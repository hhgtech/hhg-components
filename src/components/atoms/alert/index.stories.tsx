import React from 'react'

import { Story } from '@storybook/react/types-6-0'

import { Alert, Props } from './index'

export default {
  component: Alert,
  title: 'Atoms/Alert',
}

const Template: Story<Props> = (args) => <Alert {...args} />

export const Normal = Template.bind({})

Normal.args = {
  text: 'This is an alert',
  type: 'success',
  contentIcon: <img src="https://source.unsplash.com/random/16x16" />,
  closeIcon: <img src="https://source.unsplash.com/random/16x16" />,
}
