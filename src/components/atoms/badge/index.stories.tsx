import { Badge, Props } from './index'

import { Avatar } from '../avatar'
import React from 'react'
import { Story } from '@storybook/react/types-6-0'

export default {
  component: Badge,
  title: 'Atoms/Badge',
}

const Template: Story<Props> = (args) => <Badge {...args} />

export const StandAlone = Template.bind({})
StandAlone.args = {
  className: '',
  amount: 4,
  type: 'dot',
  size: 'medium',
  color: 'primary',
  icon: '',
}

export const WithAvatar = Template.bind({})
WithAvatar.args = {
  className: '',
  amount: 4,
  type: 'numeric',
  size: 'medium',
  color: 'primary',
  icon: (
    <Avatar
      avatarImg={<img src="https://source.unsplash.com/random/74x74" />}
      type="rounded"
      onClick={() => console.log('avatar')}
    />
  ),
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  className: '',
  amount: 4,
  type: 'numeric',
  size: 'medium',
  color: 'primary',
  icon: (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 19.6 19.6"
    >
      <title>{'bell'}</title>
      <path
        d="M7.91 15.8a2.67 2.67 0 00-.11.75 2.13 2.13 0 002 2.25 2.13 2.13 0 002-2.25 2.67 2.67 0 00-.11-.75"
        fill="none"
        stroke="#262626"
        strokeWidth={1.6}
      />
      <path
        d="M15.8 6.8a6 6 0 00-12 0c0 7-3 9-3 9h18s-3-2-3-9z"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        stroke="#262626"
        strokeWidth={1.6}
      />
    </svg>
  ),
}
