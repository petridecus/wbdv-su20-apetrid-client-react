import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import CourseManagerContainer from './containers/CourseManagerContainer';
import CourseEditorContainer from './containers/CourseEditorContainer';

function WhiteBoard() {
  return (
    <BrowserRouter>
      <Route path='/' exact={true}>
        <Redirect to={'/table/courses'}/>
      </Route>

      <Route path='/courses' component={CourseManagerContainer}/>

      <Route
            path='/:layout/courses'
            exact={true}
            component={CourseManagerContainer}/>

          <Route
            path={['/editor', '/editor/:courseId', '/editor/:courseId/modules/:moduleId',
                    '/editor/:courseId/modules/:moduleId/lessons/:lessonId',
                    '/editor/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId']}
            exact={true}
            component={CourseEditorContainer}/>
    </BrowserRouter>
  );
}

export default WhiteBoard;
