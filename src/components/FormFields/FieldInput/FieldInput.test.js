import FieldInput from './FieldInput'
import React from 'react'
import { shallow, mount } from 'enzyme'

const props = {
  name: 'Test Field',
  placeholder: 'Placeholder',
  label: 'Test Label',
  required: true,
  type: 'text',
  conditions: [],
}

describe('<FieldInput>', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<FieldInput {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  describe('FieldInput - functionalities: ', () => {
    it('renders the label', () => {
      const wrapper = mount(<FieldInput {...props} />)
      expect(wrapper.text()).toContain(props.label)
    })
    it('renders the input and updates it', () => {
      const wrapper = mount(<FieldInput {...props} />)
      const inputField = wrapper.find('input')
      expect(inputField.render().attr('type')).toEqual(props.type)
      expect(inputField.render().attr('value')).toEqual('')
      inputField.simulate('change', { target: { value: 'Hello' } })
      wrapper.update()
      expect(inputField.render().attr('value')).toEqual('Hello')
    })
  })
})
