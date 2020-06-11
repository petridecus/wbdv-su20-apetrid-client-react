
const initialState = {
    topics: [
      {_id: '123', title: 'lesson 123'},
      {_id: '234', title: 'lesson 234'},
      {_id: '345', title: 'lesson 345'}
    ]
  }
  
  const topicReducer = (state=initialState, action) => {
    switch(action.type) {
      case "DELETE_TOPIC":
        return {
          ...state,
          topics: state.topics.filter(topic => topic._id !== action.topicId)
        }
      case "FIND_TOPICS_FOR_LESSON":
        return {
          ...state,
          topics: action.actualTopics
        }
      case "CREATE_TOPIC":
        return {
          ...state,
          topics: [...state.topics, action.newTopic]
        }
      default:
        return state
    }
  }
  
  export default topicReducer