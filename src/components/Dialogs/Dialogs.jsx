import React from 'react';
import "./Dialogs.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageCreator, updateMessageCreator} from "../../redux/dialog-reducer";

const Dialogs = (props) => {
    // dialogs
    let dialogsElement = props.state.dialogsData
        .map( d => {
           return <DialogItem avatar={d.avatar} id={d.id} name={d.name} />
        });
    // messages
    let messagesElement = props.state.messagesData
        .map( m => {
            return <Message id={m.id} message={m.message} />
        });

    let newMessageElement = React.createRef();
    let addMessage = () => {
        props.dispatch(addMessageCreator());
    };
    let areaChange = (e) => {
        let text = e.target.value;
        let action = updateMessageCreator(text);
        props.dispatch(action);
    };
    return (
        <div className="dialogs">
            <h1>Dialogs</h1>
            <div className="dialogs-content">
                <div className="dialogs-list">
                    {dialogsElement}
                </div>
                <div className="messages">
                    {messagesElement}
                    <div>
                        <textarea ref={newMessageElement} onChange={areaChange} name="" id="message-area" cols="30" rows="10"></textarea>
                    </div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    );
};
export default Dialogs;