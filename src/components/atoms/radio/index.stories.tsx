import React from 'react'

import { Story } from '@storybook/react/types-6-0'

import { Props, Radio } from '.'

export default {
  component: Radio,
  title: 'Atoms/Radio',
}

const Template: Story<Props> = (args) => <Radio {...args} />

export const SelectedCircle = Template.bind({})

SelectedCircle.args = {
  type: 'circle',
  name: 'radio',
  label: 'radio',
  checked: true,
}

export const UnselectedCircle = Template.bind({})

UnselectedCircle.args = {
  type: 'circle',
  name: 'radio',
  label: 'radio',
  checked: false,
}

export const SelectedRectangle = Template.bind({})

SelectedRectangle.args = {
  type: 'rectangle',
  name: 'radio',
  label: 'radio',
  checked: true,
}

export const UnselectedRectangle = Template.bind({})

UnselectedRectangle.args = {
  type: 'rectangle',
  name: 'radio',
  label: 'radio',
  checked: false,
}
