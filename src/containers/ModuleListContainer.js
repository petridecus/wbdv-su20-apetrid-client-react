import React from 'react';

import ModuleComponent from '../components/ModuleComponent';
import '../styles/CourseEditor.css'

class ModuleListContainer extends React.Component {
    render() {
        return (
            <ul className="list-group wbdv-module-list">
                {
                    this.props.modules.map(module =>
                        <ModuleComponent module={module}/>
                    )
                }
            </ul>
        );
    }
}

export default ModuleListContainer;