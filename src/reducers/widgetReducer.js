const initialState = {
    widgets: []
  }
  
  const widgetReducer = (state=initialState, action) => {
    switch(action.type) {
      case "DELETE_WIDGET":
        return {
          ...state,
          widgets: state.widget.filter(widget => widget._id !== action.widgetId)
        }
      case "FIND_WIDGETS_FOR_TOPIC":
        return {
          ...state,
          widgets: action.actualWidgets
        }
      case "CREATE_WIDGETS":
        return {
          ...state,
          widgets: [...state.widgets, action.newWidget]
        }
      case "UPDATE_WIDGET":
        return {
            ...state,
            widgets: state.widget.map(widget => {
                if (widget._id == action.widgetId) {
                    return action.newWidget
                } else {
                    return widget
                }
            }) 
        }
      default:
        return state
    }
  }
  
  export default widgetReducer