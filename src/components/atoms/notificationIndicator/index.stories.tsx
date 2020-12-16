import React from 'react'

import { Story } from '@storybook/react/types-6-0'

import { NotificationIndicator, Props } from './index'

export default {
  component: NotificationIndicator,
  title: 'Atoms/Notification Indicator',
}

const Template: Story<Props> = (args) => <NotificationIndicator {...args} />

export const Normal = Template.bind({})

Normal.args = {
  className: '',
  amount: 4,
  type: 'medium',
  hasIcon: false,
}
