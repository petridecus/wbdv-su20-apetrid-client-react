import {connect} from "react-redux";
import LessonTabsComponent from "../components/LessonTabsComponent";
import LessonService from "../services/LessonService";

const stateToPropertyMapper = (state, ownProps) => ({
    lessons: state.lessonReducer.lessons,
    newLessonTitle: state.lessonReducer.newLessonTitle,
    params: ownProps.params
})

const dispatchToPropertyMapper = dispatch => {
    return {
        createLesson: (moduleId, newLesson) => {
            LessonService.createLesson(moduleId, newLesson)
                .then(actualLesson => dispatch({
                    type: 'CREATE_LESSON',
                    newLesson
            }))
        },
        findLessonsForModule: (moduleId) => {
            LessonService.findLessonsForModule(moduleId)
                .then(actualLessons => dispatch({
                    type: "FIND_LESSONS_FOR_MODULE",
                    actualLessons
                }))
        },
        deleteLesson  : (lessonId) => {
            LessonService.deleteLesson(lessonId)
              .then(status => dispatch({
                type: "DELETE_LESSON",
                lessonId: lessonId
              }))
          }
    }
}

const LessonTabsContainer = connect
(stateToPropertyMapper, dispatchToPropertyMapper)
(LessonTabsComponent)

export default LessonTabsContainer