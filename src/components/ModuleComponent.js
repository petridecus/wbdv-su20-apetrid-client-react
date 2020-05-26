import React from 'react';

class ModuleComponent extends React.Component {
    render() {
        return(
            <a class="btn wbdv-module-item list-group-item list-group-item-action flex-column align-items-start rounded">
                <div className="d-flex w-100 justify-content-between align-items-center">
                    <div className="wbdv-module-item-title mr-auto">{this.props.module.title}</div>
                    <button className="wbdv-module-item-delete-btn justify-content-right btn editor-btn rounded-circle">&times;</button>
                </div>
            </a>
        );
    }
}

export default ModuleComponent;