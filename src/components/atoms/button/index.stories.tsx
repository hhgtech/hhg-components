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

const IsLoading: Story<Props> = (args) => <Button {...args}>Is Loading</Button>

const WithIcon: Story<Props> = (args) => <Button {...args}>Icon Button</Button>

const Secondary: Story<Props> = (args) => (
  <Button {...args}>Secondary Button</Button>
)

const Medium: Story<Props> = (args) => (
  <Button {...args}>Medium sized button</Button>
)

const IsDisabled: Story<Props> = (args) => (
  <Button {...args}>Is Disabled</Button>
)

export const Normal = Template.bind({})

Normal.args = {
  color: 'primary',
  size: 'lg',
  isDisabled: false,
  isLoading: false,
}

export const withIcon = WithIcon.bind({})

withIcon.args = {
  color: 'primary',
  size: 'lg',
  isDisabled: false,
  isLoading: false,
  icon: <img src="//unsplash.it/16" />,
}

export const isLoading = IsLoading.bind({})

isLoading.args = {
  color: 'primary',
  size: 'lg',
  isDisabled: false,
  isLoading: true,
}

export const secondary = Secondary.bind({})

secondary.args = {
  color: 'secondary',
  size: 'lg',
  isDisabled: false,
  isLoading: false,
}

export const medium = Medium.bind({})

Medium.args = {
  color: 'primary',
  size: 'md',
  isDisabled: false,
  isLoading: false,
}

export const isDisabled = IsDisabled.bind({})

isDisabled.args = {
  color: 'primary',
  size: 'lg',
  isDisabled: true,
  isLoading: false,
}
