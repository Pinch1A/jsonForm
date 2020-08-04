import React from 'react'
import styled from 'styled-components'
import { useInput } from '../../../hooks/useInput'

const InputField = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  padding: 20px;
`

const InputLabel = styled.div`
  display: flex;
`

const FieldInput = ({ name, placeholder, label, required, type, conditions }) => {
  const keyField = name || label
  const { value, bind } = useInput({ [keyField]: '' })

  return (
    <InputField>
      <InputLabel>
        {label} {required && <span>*</span>}
      </InputLabel>
      <input
        type={type}
        {...bind}
        name={name}
        placeholder={placeholder}
        value={value[name]}
        required={required}
      />
    </InputField>
  )
}

export default FieldInput
