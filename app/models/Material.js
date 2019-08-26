const keystone = require('keystone')
const { Types } = keystone.Field

/**
 * Model Config
 */
const Material = new keystone.List('Material', {
  label: 'Material',
  sortable: true,
  autokey: {
    path: 'key',
    from: 'name',
    unique: true
  }
})

/**
 * Model Schema
 */
Material.add({
  name: {
    type: String,
    required: true,
    initial: true
  },
  url: {
    type: String,
    required: true,
    initial: true
  },
  unit: {
    type: Types.Number,
    required: true,
    initial: true
  }
})

/**
 * Hooks
 */
Material.schema.pre('save', function (next) {
  // Save state for post hook
  this.wasNew = this.isNew
  this.wasModified = this.isModified()

  next()
})

Material.schema.post('save', function (next) {
  // Post hooks
})

/**
 * Model Registration
 */
Material.defaultColumns = 'name, unit'
Material.register()
