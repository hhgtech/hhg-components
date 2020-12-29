import React from 'react'

import { Story } from '@storybook/react/types-6-0'

import { Checkbox, Props } from '.'

export default {
  component: Checkbox,
  title: 'Atoms/Checkbox',
}

const Template: Story<Props> = (args) => (
  <Checkbox {...args}>Normal Checkbox</Checkbox>
)

export const Checked = Template.bind({})

Checked.args = {
  name: 'checkbox',
  label: 'checkbox',
  checked: true,
}

export const Unchecked = Template.bind({})

Unchecked.args = {
  name: 'checkbox',
  label: 'checkbox',
  checked: false,
}
