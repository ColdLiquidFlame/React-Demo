import React from 'react';
import io from 'socket.io-client';

class ChatClient extends React.Component {
    constructor(props) {
        super(props)
        const socket = io('http://127.0.0.1:3030');
        socket.on('chat message', this.handleChatMessageReceived);
        this.state = { message: '', messages: [], socket };
    }

    render = () => {
        const listItems = this.state.messages.map((msg, idx) => (<li className={"list-group-item " + msg.style}key={idx}>{msg.message}</li>));
        return (
            <>
                <h1>Chat {this.props.clientNum}</h1>
                <div className="container">
                    <div className="row">
                        <ul className="list-group col-sm-12">
                            {listItems}
                        </ul>
                    </div>
                    <div className="row">
                        <input type="text" className="form-control col-sm-8" onChange={this.handleMessageChange} value={this.state.message} />
                        <button type="button" className="btn btn-primary col-sm-4" onClick={this.handleSendMessage}>Send</button>
                    </div>
                </div>
            </>
        );
    }

    handleMessageChange = (e) => {
        this.setState({ message: e.target.value });
    }

    handleSendMessage = () => {
        this.setState((state, props) => {

            state.socket.emit('chat message', {clientId: props.clientNum, message: state.message});

            state.messages.push({message: state.message, style: "text-right bg-dark text-white"})

            return { message: '', messages: state.messages};
        });
    }

    handleChatMessageReceived = (msg) => {
        this.setState((state, props) => {
            if (msg.clientId !== props.clientNum) {
                state.messages.push({message: msg.message, style: "text-left bg-info text-white"});
            }
            return {messages: state.messages};
        })
    }
}

export default ChatClient;