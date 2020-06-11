import React from 'react';

import { Link } from 'react-router-dom';

class ModuleComponent extends React.Component {
    componentDidMount() {
        console.log(this.props.params)
    }
    render() {
        return(
            <Link to={`/editor/${this.props.courseId}/modules/${this.props.module._id}`}
                className="btn wbdv-module-item list-group-item list-group-item-action d-flex align-items-start rounded">
                <div className="d-flex w-100 justify-content-between">
                    <div className="wbdv-module-item-title">{this.props.module.title}</div>
                    <button onClick={() => this.props.deleteModule(this.props.module._id)} 
                        className="wbdv-module-item-delete-btn btn editor-btn rounded-circle">&times;
                    </button>
                </div>
            </Link>
        );
    }
}

export default ModuleComponent;