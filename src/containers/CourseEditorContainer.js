import React from 'react';
import { Link } from 'react-router-dom';

import ModuleListContainer from './ModuleListContainer';
import LessonTabsContainer from './LessonTabsContainer';
import TopicPillsContainer from './TopicPillsContainer';

class CourseEditorContainer extends React.Component {
    state = {
        lessons: [
            { title: 'Page 1' },
            { title: 'Page 2' },
            { title: 'Page 3' }
        ],
        modules : [
            { title: 'Module 1' },
            { title: 'Module 2' },
            { title: 'Module 3' },
            { title: 'Module 4' },
            { title: 'Module 5' }
        ],
        topics: [
            { title: 'Topic 1' },
            { title: 'Topic 2' },
            { title: 'Topic 3' }
        ]
    }
    render() {
        return (
            <div className="container-fluid editor-container">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex flex-row">
                    <div className="d-flex w-100 align-items-center">
                        <Link className="wbdv-course-editor wbdv-close mr-auto nav-link btn btn-dark rounded-circle nav-light-text" to={'/courses'}>
                            &times;
                        </Link>
                        <div className="wbdv-course-title navbar-brand mr-auto">Course Title</div>
                        <LessonTabsContainer lessons={this.state.lessons}/>
                        <button className="wbdv-new-page-btn btn editor-btn light-text ml-auto">{'\u002b'}</button>
                    </div>
                </nav>
                <div className="row editor-row">
                <div className="content-frame col-4 rounded">
                    <ModuleListContainer modules={this.state.modules}/>
                    <button className="wbdv-module-item-add-btn btn editor-btn light-text rounded-circle">{'\u002b'}</button>
                </div>
                <div className="content-frame-right col-8 rounded">
                    <TopicPillsContainer topics={this.state.topics}/>
                    <div className="topic-frame border border-dark rounded">
                        <h4>Heading</h4>
                        <div className="topic-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad expedita dolorum nemo, voluptatem quasi id ab porro enim recusandae modi nostrum nulla ullam magni architecto doloremque explicabo. Facere, animi in.</div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default CourseEditorContainer;