import React from 'react'

import { Story } from '@storybook/react/types-6-0'

import { Flag, Props } from '.'

export default {
  component: Flag,
  title: 'Atoms/Flag',
}

const Template: Story<Props> = (args) => <Flag {...args} />

export const Normal = Template.bind({})

Normal.args = {
  country: 'VN',
  rounded: false,
  width: 100,
  height: 100,
}

export const Rounded = Template.bind({})

Rounded.args = {
  country: 'TW',
  rounded: true,
  width: 100,
  height: 100,
}
