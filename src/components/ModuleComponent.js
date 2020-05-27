import React from 'react';

class ModuleComponent extends React.Component {
    render() {
        return(
            <button className="btn wbdv-module-item list-group-item list-group-item-action d-flex align-items-start rounded">
                <div className="d-flex w-100 justify-content-between">
                    <div className="wbdv-module-item-title">{this.props.module.title}</div>
                    <div className="wbdv-module-item-delete-btn btn editor-btn rounded-circle">&times;</div>
                </div>
            </button>
        );
    }
}

export default ModuleComponent;