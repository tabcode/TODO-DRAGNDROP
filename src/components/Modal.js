import React from 'react';
import ReactDom from 'react-dom';
import TaskContext from '../context/tasks/TaskContext';

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.updateTask = this.updateTask.bind(this);
    }

    static contextType = TaskContext;

    updateTask(priority, id) {
        this.context.updateTask(priority, id);
        this.props.toggle(0);
    }

    render() {
        return (
            <>
                {
                    this.props.visible ?
                        ReactDom.createPortal(
                            <div className="modal">
                                <div className="modal-pop" role="dialog" aria-modal="true">
                                    <h3>Priority</h3>
                                    <ul className="priority">
                                        <li onClick={() => this.updateTask("Don't Worry", this.props.id)}>
                                            <div></div> Don't Worry
                                        </li>
                                        <li onClick={() => this.updateTask("More less", this.props.id)}>
                                            <div></div> More less
                                        </li>
                                        <li onClick={() => this.updateTask("Normal", this.props.id)}>
                                            <div></div> Normal
                                        </li>
                                        <li onClick={() => this.updateTask("Medium", this.props.id)}>
                                            <div></div> Medium
                                        </li>
                                        <li onClick={() => this.updateTask("Important", this.props.id)}>
                                            <div></div> Important
                                        </li>
                                    </ul>
                                    <div className="buttonsModal">
                                        <button type="button" onClick={() => this.props.toggle(0)}>Close</button>
                                    </div>
                                </div>
                                <div className="modal-overlay"></div>
                            </div>
                            , document.body
                        ) : null
                }
            </>
        )
    }
}

export default Modal;