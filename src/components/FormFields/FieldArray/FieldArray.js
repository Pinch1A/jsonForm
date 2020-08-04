import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { formFieldRender } from '../../Form/Form'
import FormContext from '../../../hooks/useFormContext'

const ArrayWrapper = styled.div`
  display: flex;
  align-items: center;
`
const ItemWrap = styled.div`
  display: flex;
  align-self: start;
`

const AddButton = styled.button`
  height: 30px;
  display: flex;
  align-items: center;
`

const FieldInput = ({ label, name, required, type, items, enums }) => {
  const [itemList, setList] = useState(items)
  const { values, setValues } = useContext(FormContext)

  console.log(values)
  const itemsType = items[0].type
  const maxSize = items.length + enums.length

  useEffect(() => {
    setList(itemList)
  }, [itemList])

  const addItem = () => {
    const newItem = {
      label: enums[itemList.length - 1],
      type: itemsType,
      required: false,
    }
    const newValue = { [newItem.label]: '' }
    setList([...itemList, newItem])
    setValues({ ...values, ...newValue })
  }
  const removeItem = () => {
    itemList.pop()
    delete values[enums[itemList.length - 1]]
    setList([...itemList])
    setValues({ ...values })
  }

  return (
    <ArrayWrapper>
      <ItemWrap>{itemList.map((field, index) => formFieldRender(field, index))}</ItemWrap>
      <ItemWrap>
        <AddButton onClick={addItem} disabled={itemList.length >= maxSize}>
          Add Item
        </AddButton>
        <AddButton onClick={removeItem} disabled={itemList.length <= items.length}>
          Remove Item
        </AddButton>
      </ItemWrap>
    </ArrayWrapper>
  )
}

export default FieldInput
