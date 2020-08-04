import { useState, useContext } from 'react'
import FormContext from '../hooks/useFormContext'

export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue)
  const { values, setValues } = useContext(FormContext)
  const valueKey = Object.keys(value)[0]

  return {
    value,
    valueKey,
    setValue,
    formValues: values,
    setFormValues: setValues,
    reset: () => setValue({ [valueKey]: '' }),
    bind: {
      value,
      onChange: (event, name) => {
        const newValue = { [valueKey]: event.target ? event.target.value : event }
        setValue(newValue)
        setValues({ ...values, ...newValue })
      },
    },
  }
}
