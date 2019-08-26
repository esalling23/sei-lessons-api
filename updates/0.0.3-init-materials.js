const lessonJson = require('./data/sei-lessons.json')

const lessons = lessonJson.lessons.map(lesson => {
  return {
    name: lesson.name,
    url: lesson.url,
    unit: lesson.unit
  }
})

exports.create = {
  Material: lessons
}
