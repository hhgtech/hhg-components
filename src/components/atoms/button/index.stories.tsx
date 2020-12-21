import React from 'react'

import { Story } from '@storybook/react/types-6-0'

import { Button, Props } from '.'

export default {
  component: Button,
  title: 'Atoms/Button',
}

const Template: Story<Props> = (args) => (
  <Button {...args}>Normal Button</Button>
)

export const Normal = Template.bind({})

Normal.args = {
  color: 'primary',
  size: 'lg',
  isDisabled: false,
  isLoading: false,
}
