import React from 'react'

import { Story } from '@storybook/react/types-6-0'

import { Avatar, Props } from '.'

export default {
  component: Avatar,
  title: 'Atoms/Avatar',
}

const Template: Story<Props> = (args) => <Avatar {...args} />

export const Square = Template.bind({})
Square.args = {
  avatarImg: <img src="https://source.unsplash.com/random/74x74" />,
}

export const Rounded = Template.bind({})
Rounded.args = {
  avatarImg: <img src="https://source.unsplash.com/random/74x74" />,
  type: 'rounded',
}

export const WithCustomCSS = Template.bind({})
WithCustomCSS.args = {
  avatarImg: <img src="https://source.unsplash.com/random/74x74" />,
  type: 'rounded',
  style: { border: 'solid 1px red' },
}
