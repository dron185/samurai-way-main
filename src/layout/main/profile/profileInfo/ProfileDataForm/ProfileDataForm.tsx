import {ProfileType} from "../../../../../redux/profile-reducer";
import React from "react";
import {Input, Textarea} from "../../../../../components/common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../../../utils/validators/validators";
import {Field, reduxForm} from "redux-form";
import {FormDataType} from "../../../dialogs/Dialogs";

type Props = {
    profile: ProfileType
}

export const ProfileDataForm = ({profile}: Props) => {
    return (
        <form>
            <div>
                <button onClick={() => {
                }}>save
                </button>
            </div>
            <div>
                <b>Full name</b>: <Field
                placeholder={"Full name"}
                validate={[required]}
                name={"fullName"}
                component={Input}
            />
            </div>
            <div>
                <div>Looking for a job:</div>
                <Field
                    type={"checkbox"}
                    name={"lookingForAJob"}
                    component={Input}
                />
            </div>
            <div>
                <b>My professional skills</b>:
                <Field
                    component={Textarea}
                    validate={[maxLengthCreator(50)]}
                    name="lookingForAJobDescription"
                    placeholder="My professional skills"
                />
            </div>
            <div>
                <b>About me</b>: {profile.aboutMe}
                <Field
                    component={Textarea}
                    validate={[maxLengthCreator(50)]}
                    name="aboutMe"
                    placeholder="About me"
                />
            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm<FormDataType, Props>({form: "edit-profile"})(ProfileDataForm)

export default ProfileDataFormReduxForm