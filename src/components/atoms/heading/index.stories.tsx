import React from 'react'

import { Story } from '@storybook/react/types-6-0'

import { Heading, Props } from './index'

export default {
  component: Heading,
  title: 'Atoms/Heading',
}

const Template: Story<Props> = (args) => (
  <Heading {...args}>Lorem ipsum dolor asit amet</Heading>
)

export const Normal = Template.bind({})

Normal.args = {
  tag: 'h1',
}
