import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginTC} from "../../redux/auth-reducer";
import {LoginParams} from "../../api/api";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import style from "../common/FormsControls/FormsControls.module.css"

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={"Email"}
                    validate={[required]}
                    name={"email"}
                    component={Input}/>
            </div>
            <div>
                <Field
                    placeholder={"Password"}
                    validate={[required]}
                    name={"password"}
                    component={Input}
                    type="password"/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Input}/> remember me
            </div>
            {props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export const LoginReduxForm = reduxForm<FormDataType>({form: "login"})(LoginForm)

type LoginPropsType = MapStateToPropsType & MapDispatchToPropsType

export const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        const {email, password, rememberMe} = formData
        props.login({email, password, rememberMe})
    }

    if (props.isAuth) {
        return <Redirect to="/profile"/>
    }

    return (
        <div>
            <h1 style={{fontSize: "29px", color: "white"}}>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

type MapDispatchToPropsType = {
    login: (data: LoginParams) => void
}

type MapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
    }
}

export const LoginContainer = connect(mapStateToProps, {login: loginTC})(Login)