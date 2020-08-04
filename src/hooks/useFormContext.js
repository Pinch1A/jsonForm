import React from 'react'

const FormContext = React.createContext({
  values: {},
  setValues: () => {},
})
export const FormProvider = FormContext.Provider
export default FormContext
