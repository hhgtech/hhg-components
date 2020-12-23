import React from 'react'

import { Story } from '@storybook/react/types-6-0'

import { Badge, Props } from './index'

export default {
  component: Badge,
  title: 'Atoms/Badge',
}

const Template: Story<Props> = (args) => <Badge {...args} />

export const Dot = Template.bind({})
Dot.args = {
  className: '',
  amount: 4,
  type: 'dot',
  color: 'primary',
  hasIcon: false,
}

export const Numeric = Template.bind({})
Numeric.args = {
  className: '',
  amount: 4,
  type: 'numeric',
  size: 'medium',
  color: 'primary',
  hasIcon: false,
}
