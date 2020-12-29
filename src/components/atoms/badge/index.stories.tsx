import React from 'react'

import { Story } from '@storybook/react/types-6-0'

import { Avatar } from '../avatar'
import { Badge, Props } from './index'

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

export const WithIcon = Template.bind({})
WithIcon.args = {
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
