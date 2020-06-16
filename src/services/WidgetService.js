const findWidgetsForTopic = (topicId) =>
  fetch(`https://wbdv-su20-apetrid-server-java.herokuapp.com/api/topics/${topicId}/widgets`)
    .then(response => response.json())

const createWidget = (topicId, newWidget) =>
  fetch(`https://wbdv-su20-apetrid-server-java.herokuapp.com/api/topics/${topicId}/widgets`, {
      method: 'POST',
      body: JSON.stringify(newWidget),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())

const deleteWidget = (widgetId) => {
    return fetch(`https://wbdv-su20-apetrid-server-java.herokuapp.com/api/widgets/${widgetId}`, {
    method: 'DELETE'
  })
    .then(response => response.json())
}

const updateWidget = (widgetId, newWidget) => {
  return fetch(`https://wbdv-su20-apetrid-server-java.herokuapp.com/api/widgets/${widgetId}`, {
    method: 'PUT',
    body: JSON.stringify(newWidget),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => response.json())
}

export default {
  deleteWidget,
  createWidget,
  findWidgetsForTopic,
  updateWidget
}