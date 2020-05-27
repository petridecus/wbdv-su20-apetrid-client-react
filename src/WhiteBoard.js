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
            
      <Route path='/editor' component={CourseEditorContainer}/>
    </BrowserRouter>
  );
}

export default WhiteBoard;
