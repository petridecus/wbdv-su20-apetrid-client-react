import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import CourseManagerContainer from './containers/CourseManagerContainer';
import CourseEditorContainer from './containers/CourseEditorContainer';

function WhiteBoard() {
  return (
    <BrowserRouter>
      <Route path='/courses' component={CourseManagerContainer}/>
      <Route path='/editor' component={CourseEditorContainer}/>
    </BrowserRouter>
  );
}

export default WhiteBoard;
