import React, { useState } from 'react'
import { Form } from './components'
import schema from './schema/mockSchema.json'
import { contextBuilder } from './helpers/helpers'
import { FormProvider } from './hooks/useFormContext'

const App = () => {
  const [formState, setFormState] = useState(contextBuilder(schema))
  const setValues = (values) => {
    setFormState({ ...formState, ...values })
  }
  const context = {
    values: formState,
    setValues,
  }
  return (
    <FormProvider value={context}>
      <Form schema={schema} />
    </FormProvider>
  )
}

export default App
