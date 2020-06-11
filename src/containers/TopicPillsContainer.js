import {connect} from "react-redux";
import TopicPillsComponent from "../components/TopicPillsComponent";
import TopicService from "../services/TopicService";

const stateToPropertyMapper = (state) => ({
    topics: state.topicReducer.topics
})

const dispatchToPropertyMapper = dispatch => {
    return {
        createTopic: (lessonId, newTopic) => {
            TopicService.createTopic(lessonId, newTopic)
                .then(actualTopic => dispatch({
                    type: 'CREATE_TOPIC',
                    newTopic
            }))
        },
        findTopicsForLesson: (lessonId) => {
            TopicService.findTopicsForLesson(lessonId)
                .then(actualTopics => dispatch({
                    type: "FIND_TOPICS_FOR_LESSON",
                    actualTopics
                }))
        },
        deleteTopic  : (topicId) => {
            TopicService.deleteTopic(topicId)
              .then(status => dispatch({
                type: "DELETE_TOPIC",
                topicId: topicId
              }))
          }
    }
}

const TopicPillsContainer = connect
(stateToPropertyMapper, dispatchToPropertyMapper)
(TopicPillsComponent)

export default TopicPillsContainer