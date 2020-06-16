import React from 'react';

import ModuleComponent from './ModuleComponent';

class ModuleListComponent extends React.Component {
    state = {
        newModuleTitle: 'some other module',
        editingModule: {},
        courseId: ''
    }

    componentDidMount() {
        this.props.findModuleForCourse(this.props.params.courseId)
    }

    render() {
        return (
            <div class="overflow-auto">
                <ul className="list-group wbdv-module-list">
                    {
                        this.props.modules.map(module =>
                            <ModuleComponent module={module}
                                                key={module._id}
                                                courseId={this.props.params.courseId}
                                                deleteModule={this.props.deleteModule}/>
                        )
                    }
                </ul>
                <div className="d-flex w-100">
                    <input className="form-control module-add-title mr-auto" onChange={(event) =>
                        this.setState({
                            newModuleTitle: event.target.value
                        })}
                            value={this.state.newModuleTitle}/>
                    <button className="btn" onClick={() => this.props.createModule(
                            this.props.params.courseId,
                            {
                                title: this.state.newModuleTitle
                            }
                        )}
                        className="btn editor-btn add-module-btn light-text">{'\u002b'}
                    </button>
                </div>
            </div>
        );
    }
}

export default ModuleListComponent;