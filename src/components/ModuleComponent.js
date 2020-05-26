import React from 'react';

class ModuleComponent extends React.Component {
    render() {
        return(
            // <li className="btn list-group-item d-flex justify-content-between align-items-center wbdv-module-item rounded"> 
            //     <a className="btn">
            //         <div className="wbdv-module-item-title mr-auto">{this.props.module.title}</div>
            //         <a className="wbdv-module-item-delete-btn justify-content-right btn rounded-circle" href="#">&times;</a>
            //     </a>
            // </li>

            <a class="btn wbdv-module-item list-group-item list-group-item-action flex-column align-items-start rounded">
                <div class="d-flex w-100 justify-content-between align-items-center">
                    <div className="wbdv-module-item-title mr-auto">{this.props.module.title}</div>
                    <a className="wbdv-module-item-delete-btn justify-content-right btn rounded-circle" href="#">&times;</a>
                </div>
            </a>
        );
    }
}

export default ModuleComponent;