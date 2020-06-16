import {connect} from "react-redux";
import WidgetComponent from "../components/WidgetComponent";
import WidgetService from "../services/WidgetService";

const stateToPropertyMapper = (state) => ({
    widgets: state.widgetReducer.widgets
})

const dispatchToPropertyMapper = dispatch => {
    return {
        createWidget: (topicId, newWidget) => {
            WidgetService.createWidget(topicId, newWidget)
                .then(actualWidget => dispatch({
                    type: 'CREATE_TOPIC',
                    newWidget
            }))
        },
        findWidgetssForTopic: (topicId) => {
            WidgetService.findWidgetsForTopic(topicId)
                .then(actualWidgets => dispatch({
                    type: "FIND_TOPICS_FOR_LESSON",
                    actualWidgets
                }))
        },
        deleteWidget: (widgetId) => {
            WidgetService.deleteWidget(widgetId)
              .then(status => dispatch({
                type: "DELETE_TOPIC",
                widgetId: widgetId
              }))
        },
        updateWidget: (widgetId, newWidget) => {
            WidgetService.updateWidget(widgetId, newWidget)
                .then(actualWidget => dispatch({
                    type: "UPDATE_TOPIC",
                    newWidget
                }))
        }
    }
}

const WidgetContainer = connect
(stateToPropertyMapper, dispatchToPropertyMapper)
(WidgetComponent)

export default WidgetContainer