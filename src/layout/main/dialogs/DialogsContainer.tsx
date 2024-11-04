import {
    DialogsActionsType,
    addMessageAC,
    DialogType,
    MessageType,
} from "../../../redux/dialogs-reducer";
import {AppStateType} from "../../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {ComponentType} from "react";

// create container component _DialogsContainer with the help of react-redux (function - connect()):

// connect()() - двойные скобки означают, что мы вызвали ф-цию connect, а она вернула нам другую ф-цию, и мы вызываем потом ту ф-цию, которую вернул нам предыдущий вызов, и во вторые скобки мы передаем нашу презентационную компоненту (Dialogs), вокруг которой мы хотим создать контейнерную компоненту. То что мы делали вручную - _DialogsContainer, сейчас это делает connect().

type MapStateToPropsType = {
    dialogs: DialogType[]
    messages: MessageType[]
    // isAuth: boolean
}

type MapDispatchToPropsType = {
    addMessage: (newMessageText: string) => void
}

export type NewDialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

// каждый раз как в стейте происходят изменения-запускается эта функция:
// смысл этой ф-ции-замапить стэйт на пропсы, т.е. превратить часть стейта в пропсы.
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        // isAuth: state.auth.isAuth
    }
}

//в пропсы попадут 2 колбэка, их мы будем отправлять в нашу презинтационную компоненту
const mapDispatchToProps = (dispatch: Dispatch<DialogsActionsType>): MapDispatchToPropsType => {
    return {
        addMessage: (text: string)=> {
            dispatch(addMessageAC(text));
        }
    }
}

export const DialogsContainer = compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

// ф-ция connect() создает контейнерную компоненту, внутри ее - она рендерит презентационную компоненту, и внутрь презентационной компоненты в качестве пропсов - передает те св-ва, которые сидят в этих 2-х объектах - которые возвращает f1() и f2().

// мы говорим: эту презинтационную компоненту (Dialogs) законнекть к стору по этим правилам: (mapStateToProps, mapDispatchToProps)