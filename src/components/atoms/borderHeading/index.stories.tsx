import React from 'react'

import { Story } from '@storybook/react/types-6-0'

import { BorderHeading, Props } from '.'

export default {
  component: BorderHeading,
  title: 'Atoms/BorderHeading',
}

const Template: Story<Props> = (args) => (
  <BorderHeading {...args}>Lorem ipsum dolor asit amet</BorderHeading>
)

export const Normal = Template.bind({})

Normal.args = {}
