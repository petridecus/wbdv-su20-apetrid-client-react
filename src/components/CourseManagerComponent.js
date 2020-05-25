import React from 'react';
import CourseTableComponent from './CourseTableComponent';
import CourseGridComponent from './CourseGridComponent';

class CourseManagerComponent extends React.Component {
    state = {
        layout: 'table',
        courses: [
            {_id: 123, title: 'CS2500', owner: 'me', modified: '1/1/2020'},
            {_id: 234, title: 'CS2510', owner: 'myself', modified: '2/1/2020'},
            {_id: 345, title: 'CS3500', owner: 'you', modified: '3/1/2020'},
            {_id: 456, title: 'CS4550', owner: 'them', modified: '4/1/2020'}
        ]
    }

    setLayout = (layout) => {
        this.setState(
            {layout: layout}
        );
    }

    render() {
        return (
            <div>
                <div class="collapse" id="navbarLinks">
                    <ul class="row nav nav-pills bg-dark homepage-button-group">
                        <li class="nav-item">
                            <a class="nav-link btn btn-dark" href="./login/login.template.client.html">Login</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link btn btn-dark" href="./profile/profile.template.client.html">Profile</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link btn btn-dark" href="./register/register.template.client.html">Register</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link btn btn-dark" href="./course-editor/course-editor.template.client.html">Course Editor</a>
                        </li>
                        <li class="nav-item">
                            <form class="wbdv-field wbdv-new-course form-inline">
                                <input class="form-control" placeholder="New Course"/>
                            </form>
                        </li>
                        <li class="nav-item float-right">
                            <a class="wbdv-button wbdv-add-course nav-link btn btn-dark" href="#">&plus;</a>
                        </li>
                    </ul>
                </div>

                <nav class="navbar navbar-dark bg-dark">
                    <div class="d-flex flex-row home-nav">
                        <button class="wbdv-field wbdv-hamburger navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarLinks" aria-controls="navbarLinks" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="wbdv-label wbdv-course-manager navbar-brand ml-auto">Course Manager</div>
                    </div>
                </nav>

                <div class="headers nav align-items-center">
                    <li class="wbdv-header wbdv-title mr-auto nav-item">Title</li>
                    <li class="wbdv-header wbdv-owner mr-auto nav-item">Owner</li>
                    <li class="wbdv-header wbdv-last-modified mr-auto nav-item">Last Modified</li>
                    {
                        this.state.layout === 'table' &&
                        <li class="nav-item float-right">
                            <button class="wbdv-button wbdv-grid-layout btn"
                                    onClick={() => this.setLayout('grid')}>
                                Grid
                            </button>
                        </li>
                    }
                    {
                        this.state.layout === 'grid' &&
                        <li class="nav-item float-right">
                            <button class="wbdv-button wbdv-grid-layout btn"
                                    onClick={() => this.setLayout('table')}>
                                Table
                            </button>
                        </li>
                    }
                    <li class="nav-item float-right">
                        <a class="wbdv-header wbdv-sort btn">{'\u2191\u2193'}</a>
                    </li>
                </div>
                <div>
                    {
                        this.state.layout === 'table' &&
                        <CourseTableComponent courses={this.state.courses}/>
                    }
                    {
                        this.state.layout === 'grid' &&
                        <CourseGridComponent courses={this.state.courses}/>
                    }
                </div>
            </div>
        );
    }
}

export default CourseManagerComponent;