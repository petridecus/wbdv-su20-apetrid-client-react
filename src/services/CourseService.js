
const url = 'https://wbdv-generic-server.herokuapp.com/api/apetrides/courses';

const createCourse = (course) =>
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const findAllCourses = () =>
    fetch(url)
        .then(allCourses => allCourses.json())

const findCourseById = courseId =>
    fetch(url + '/' + courseId)
        .then(response => response.json())

const updateCourse = (courseId, course) =>
    fetch(url + '/' + courseId, {
        method: 'PUT',
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const deleteCourse = courseId =>
    fetch(url + '/' + courseId, {
        method: 'DELETE'
    })
        .then(response => response.json())

export default {
    createCourse,
    findCourseById,
    findAllCourses,
    updateCourse,
    deleteCourse
}