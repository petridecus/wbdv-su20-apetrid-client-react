import {connect} from "react-redux";
import WidgetListComponent from "../components/WidgetListComponent";
import WidgetService from "../services/WidgetService";

const stateToPropertyMapper = (state, ownProps) => ({
    widgets: state.widgetReducer.widgets,
    newWidgetTitle: state.widgetReducer.newWidgetTitle,
    params: ownProps.params
})

const dispatchToPropertyMapper = dispatch => {
    return {
        createWidget: (topicId, newWidget) => {
            console.log(topicId)
            WidgetService.createWidget(topicId, newWidget)
                .then(actualWidget => dispatch({
                    type: 'CREATE_TOPIC',
                    newWidget
            }))
        },
        findWidgetsForTopic: (topicId) => {
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
(WidgetListComponent)

export default WidgetContainer