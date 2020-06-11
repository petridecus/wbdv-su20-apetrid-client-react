import React from 'react';
import { Link } from 'react-router-dom';

import LessonTabsContainer from './LessonTabsContainer';
import TopicPillsContainer from './TopicPillsContainer';
import ModuleListContainer from './ModuleListContainer';

const CourseEditorContainer = ({match}) =>
    <div className="container-fluid editor-container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex flex-row">
            <div className="d-flex w-100 align-items-center">
                <Link className="wbdv-course-editor wbdv-close mr-auto nav-link btn btn-dark rounded-circle nav-light-text" to={'/table/courses'}>
                    &times;
                </Link>
                <div className="wbdv-course-title navbar-brand mr-auto">Course Title</div>
            </div>
        </nav>
        <div className="row editor-row">
        <div className="content-frame col-4 rounded">
            <ModuleListContainer {...match}/>
        </div>
        <div className="col-8 rounded">
            <div className="lessons-row d-flex flex-row w-100">
                <LessonTabsContainer {...match}/>
            </div>
            <div className="content-frame-right">
                <TopicPillsContainer {...match}/>
                <div className="topic-frame border border-dark rounded">
                    <h4>Heading</h4>
                    <div className="topic-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad expedita dolorum nemo, voluptatem quasi id ab porro enim recusandae modi nostrum nulla ullam magni architecto doloremque explicabo. Facere, animi in.</div>
                </div>
            </div>
        </div>
        </div>
    </div>

export default CourseEditorContainer;