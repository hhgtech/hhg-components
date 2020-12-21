import React from 'react'

import { Story } from '@storybook/react/types-6-0'

import { BorderHeading, Props } from '.'
import MockTheme from './../../../mockTheme'

export default {
  component: BorderHeading,
  title: 'Atoms/BorderHeading',
}

const Template: Story<Props> = (args) => (
  <MockTheme>
    <BorderHeading {...args}>Lorem ipsum dolor asit amet</BorderHeading>
  </MockTheme>
)

export const Normal = Template.bind({})

Normal.args = {}
