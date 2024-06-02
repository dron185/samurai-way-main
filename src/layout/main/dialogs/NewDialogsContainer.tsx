import {
    addMessageAC,
    changeNewMessageAC,
    DialogType,
    MessageType,
    newMessageTextType
} from "../../../redux/dialogs-reducer";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";

// create container component DialogsContainer with the help of react-redux (function - connect()):

// connect()() - двойные скобки означают, что мы вызвали ф-цию connect, а она вернула нам другую ф-цию, и мы вызываем потом ту ф-цию, которую вернул нам предыдущий вызов, и во вторые скобки мы передаем нашу презентационную компоненту (Dialogs), вокруг которой мы хотим создать контейнерную компоненту. То что мы делали вручную - DialogsContainer, сейчас это делает connect().

type MapStateToPropsType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageText: newMessageTextType
}

type MapDispatchToPropsType = {
    addMessage: (newMessageText: string) => void
    newMessageChange: (value: string) => void
}

export type NewDialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

// каждый раз как в стейте происходят изменения-запускается эта функция:
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addMessage: (text: newMessageTextType)=> {
            dispatch(addMessageAC(text));
        },
        newMessageChange: (value: string)=> {
            dispatch(changeNewMessageAC(value));
        }
    }
}

export const NewDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

// ф-ция connect() создает контейнерную компоненту, внутри ее - она рендерит презентационную компоненту, и внутрь презентационной компоненты в качестве пропсов - передает те св-ва, которые сидят в этих 2-х объектах - которые возвращает f1() и f2().