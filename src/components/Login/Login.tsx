import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginTC} from "../../redux/auth-reducer";
import {LoginParams} from "../../api/api";

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

// const maxLength10 = maxLengthCreator(10);

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
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export const LoginReduxForm = reduxForm<FormDataType>({form: "login"})(LoginForm)

export const Login = (props: MapDispatchToPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        const {email, password, rememberMe} = formData
        props.login({email, password, rememberMe})
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

export const LoginContainer = connect(null, {login: loginTC})(Login)