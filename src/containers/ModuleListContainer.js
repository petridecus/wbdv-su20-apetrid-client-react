import React from 'react';

import ModuleComponent from '../components/ModuleComponent';

class ModuleListContainer extends React.Component {
    render() {
        return (
            <ul className="list-group wbdv-module-list">
                {
                    this.props.modules.map(module =>
                        <ModuleComponent module={module}
                                            key={module.title}/>
                    )
                }
            </ul>
        );
    }
}

export default ModuleListContainer;