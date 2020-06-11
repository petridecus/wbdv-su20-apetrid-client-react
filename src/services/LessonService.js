const findLessonsForModule = (moduleId) =>
  fetch(`https://wbdv-generic-server.herokuapp.com/api/001607780/modules/${moduleId}/lessons`)
    .then(response => response.json())

const createLesson = (moduleId, newLesson) =>
  fetch(`https://wbdv-generic-server.herokuapp.com/api/001607780/modules/${moduleId}/lessons`, {
    method: 'POST',
    body: JSON.stringify(newLesson),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => response.json())

const deleteLesson = (moduleId, lessonId) => {
  return fetch(`https://wbdv-generic-server.herokuapp.com/api/001607780/lessons/${lessonId}`, {
    method: 'DELETE'
  })
    .then(response => response.json())
}

export default {
  deleteLesson,
  createLesson,
  findLessonsForModule
}
