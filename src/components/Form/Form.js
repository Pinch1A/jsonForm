import React, { useContext } from 'react'
import { FieldInput, FieldCheckbox, FieldArray, FieldObject } from '../../components'
import FormContext from '../../hooks/useFormContext'
import styled from 'styled-components'

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`
const FlexItem = styled.div`
  display: flex;
  padding: 20px;
`
const SubmitButton = styled.input`
  display: flex;
  background: green;
  color: #fff;
  font-size: 20px;
  border: none;
  border-radius: 6px;
  padding: 7px 20px;
  cursor: pointer;
`
const ResultBoard = styled.pre`
  background: #ddd;
  border: 1px solid gray;
  padding: 20px;
`

export function formFieldRender(field, index) {
  switch (field.type) {
    case 'text':
      return <FieldInput {...field} key={index} />
    case 'date':
      return <FieldInput {...field} key={index} />
    case 'checkbox':
      return <FieldCheckbox {...field} key={index} />
    case 'array':
      return <FieldArray items={field.items} key={`array-${index}`} enums={field.enums} />
    case 'object':
      return <FieldObject {...field} key={`array-${index}`} />

    // return Object.values(field.properties).map((field, index) => formFieldRender(field, index))
    default:
      return null
  }
}

const Form = ({ schema }) => {
  const { values } = useContext(FormContext)
  const onSubmit = () => {
    window.alert(JSON.stringify(values, 0, 2))
  }
  return (
    <FormWrapper onSubmit={onSubmit}>
      {Object.values(schema).map((field, index) => formFieldRender(field, index))}
      <FlexItem>
        <SubmitButton type="submit" value="Submit" />
      </FlexItem>
      <FlexItem>
        <ResultBoard>{JSON.stringify(values, 0, 2)}</ResultBoard>
      </FlexItem>
    </FormWrapper>
  )
}

export default Form
