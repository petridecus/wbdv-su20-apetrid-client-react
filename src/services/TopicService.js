const findTopicsForLesson = (lessonId) =>
  fetch(`https://wbdv-generic-server.herokuapp.com/api/001607780/lessons/${lessonId}/topics`)
    .then(response => response.json())

const createTopic = (lessonId, newTopic) =>
  fetch(`https://wbdv-generic-server.herokuapp.com/api/001607780/lessons/${lessonId}/topics`, {
    method: 'POST',
    body: JSON.stringify(newTopic),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response =>
      response.json())

const deleteTopic = (topicId) => {
    return fetch(`https://wbdv-generic-server.herokuapp.com/api/001607780/topics/${topicId}`, {
    method: 'DELETE'
  })
    .then(response => response.json())
}

export default {
  deleteTopic,
  createTopic,
  findTopicsForLesson
}