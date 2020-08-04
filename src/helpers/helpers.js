export const contextBuilder = (schema) => {
  let context = {}
  if (!schema) return null
  for (const field of Object.values(schema)) {
    if (field.items || field.properties) {
      const loop = field.items || field.properties
      for (const subField of Object.values(loop)) {
        context[subField.name] = ''
      }
    } else {
      context[field.name] = ''
    }
  }
  return context
}

export const isConditionConfirmed = (conditions, values) => {
  if (conditions) {
    for (const field of Object.values(conditions)) {
      for (const key of Object.keys(field)) {
        if (values[key] !== field[key]) return false
      }
    }
  }
  return true
}
