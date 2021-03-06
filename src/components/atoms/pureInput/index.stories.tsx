import React from 'react'

import { Story } from '@storybook/react/types-6-0'
import { debounce } from 'lodash'

import { PureInput, Props } from '.'
import DeleteIcon from './delete.svg'

export default {
  component: PureInput,
  title: 'Atoms/PureInput',
}

const Template: Story<Props> = (args) => (
  <PureInput {...args} onChange={debounce((v) => console.log(v), 300)} />
)

export const Normal = Template.bind({})
Normal.args = {
  name: 'normal',
  label: 'Label',
  placeholder: 'Placeholder',
}

export const NoLabel = Template.bind({})
NoLabel.args = {
  name: 'nolabel',
  placeholder: 'Placeholder',
}

export const WithLeftIcon = Template.bind({})
WithLeftIcon.args = {
  name: 'withlefticon',
  label: 'Label',
  placeholder: 'Placeholder',
  displayIcon: <img src={DeleteIcon} />,
}

export const WithRightIcon = Template.bind({})
WithRightIcon.args = {
  name: 'withrighticon',
  label: 'Label',
  placeholder: 'Placeholder',
  actionIcon: <img src={DeleteIcon} />,
}

export const WithErrorMessage = Template.bind({})
WithErrorMessage.args = {
  name: 'witherrormessage',
  label: 'Label',
  placeholder: 'Placeholder',
  errorMessage: 'Error message',
}
