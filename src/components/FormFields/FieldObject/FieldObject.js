import React, { useContext } from 'react'
import styled from 'styled-components'
import { formFieldRender } from '../../Form/Form'
import FormContext from '../../../hooks/useFormContext'
import { isConditionConfirmed } from '../../../helpers/helpers'

const InputField = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  padding: 20px;
`

const InputLabel = styled.div`
  display: flex;
`

const FieldObject = ({ name, label, properties, conditions }) => {
  const { values } = useContext(FormContext)
  const isVisible = isConditionConfirmed(conditions, values)
  return (
    <>
      {isVisible && (
        <InputField>
          <InputLabel>{label}</InputLabel>
          {Object.values(properties).map((field, index) => {
            const appendToField = conditions ? { ...field, conditions } : field
            return formFieldRender(appendToField, index)
          })}
        </InputField>
      )}
    </>
  )
}

export default FieldObject
