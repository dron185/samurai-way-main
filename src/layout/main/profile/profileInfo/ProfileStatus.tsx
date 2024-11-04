import React, {ChangeEvent} from "react";

type Props = {
    status: string
    updateStatus: (status: string) => void
}

type State = {
    editMode: boolean
    status: string
}

export class ProfileStatus extends React.Component<Props> {

    state: State = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({editMode: true});
    }

    deactivateEditMode() {
        this.setState({editMode: false});
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps: Props, prevState: State) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || "-----"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true}
                               onBlur={this.deactivateEditMode.bind(this)} value={this.state.status}/>
                    </div>
                }
            </div>
        )
    }

}

