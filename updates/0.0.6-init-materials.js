const lessonJson = require('./data/sei-lessons.json')
const homeworkJson = require('./data/sei-homework.json')
const diagnosticJson = require('./data/sei-diagnostics.json')

const Material = require('keystone').list('Material')

// Delete current material list if there are any
Material.model.find({}).remove((err) => {
  console.log(err, 'done')
})

const lessons = lessonJson.lessons.map(lesson => {
  return {
    name: lesson.name,
    url: lesson.url,
    unit: lesson.unit,
    type: 'Lesson'
  }
})

const homework = homeworkJson.homework.map(item => {
  return {
    name: item.name,
    url: item.url,
    unit: item.unit,
    type: 'Homework'
  }
})

const diagnostics = diagnosticJson.diagnostics.map(item => {
  return {
    name: item.name,
    url: item.url,
    unit: item.unit,
    type: 'Diagnostic'
  }
})

exports.create = {
  Material: [...lessons, ...homework, ...diagnostics]
}
