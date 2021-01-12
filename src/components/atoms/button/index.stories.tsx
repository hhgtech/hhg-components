import React from 'react'

import { Story } from '@storybook/react/types-6-0'

import { Button, Props } from '.'

export default {
  component: Button,
  title: 'Atoms/Button',
}

const Template: Story<Props> = (args) => <Button {...args}>A Button</Button>

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
  size: 'lg',
  isDisabled: false,
  isLoading: false,
}

export const Secondary = Template.bind({})
Secondary.args = {
  color: 'secondary',
  size: 'lg',
  isDisabled: false,
  isLoading: false,
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  color: 'tertiary',
  size: 'lg',
  isDisabled: false,
  isLoading: false,
}

export const Transparent = Template.bind({})
Transparent.args = {
  color: 'transparent',
  size: 'lg',
  isDisabled: false,
  isLoading: false,
}

export const Ghost = Template.bind({})
Ghost.args = {
  color: 'ghost',
  size: 'lg',
  isDisabled: false,
  isLoading: false,
}

export const Medium = Template.bind({})
Medium.args = {
  color: 'primary',
  size: 'md',
  isDisabled: false,
  isLoading: false,
}

export const Small = Template.bind({})
Small.args = {
  color: 'primary',
  size: 'sm',
  isDisabled: false,
  isLoading: false,
}

export const Disabled = Template.bind({})
Disabled.args = {
  color: 'primary',
  size: 'lg',
  isDisabled: true,
  isLoading: false,
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  color: 'primary',
  size: 'lg',
  isDisabled: false,
  isLoading: false,
  icon: <img src="//unsplash.it/16" />,
}

export const Loading = Template.bind({})
Loading.args = {
  color: 'primary',
  size: 'lg',
  isDisabled: false,
  isLoading: true,
}
