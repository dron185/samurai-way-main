import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

// const maxLength10 = maxLengthCreator(10);

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={"Login"}
                    validate={[required]}
                    name={"login"}
                    component={Input}/>
            </div>
            <div>
                <Field
                    placeholder={"Password"}
                    validate={[required]}
                    name={"password"}
                    component={Input}/>
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

export const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return (
        <div>
            <h1 style={{fontSize: "29px", color: "white"}}>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

