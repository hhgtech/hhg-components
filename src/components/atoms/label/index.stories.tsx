import React from 'react'

import { Story } from '@storybook/react/types-6-0'

import { Label, Props } from '.'

export default {
  component: Label,
  title: 'Atoms/Label',
}

const Template: Story<Props> = (args) => <Label {...args}>Hello world</Label>

export const Normal = Template.bind({})

Normal.args = {}
