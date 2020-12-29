import React from 'react'

import { Story } from '@storybook/react/types-6-0'

import { Divider, Props } from './index'

export default {
  component: Divider,
  title: 'Atoms/Divider',
}

const Template: Story<Props> = (args) => <Divider {...args} />

export const Normal = Template.bind({})

Normal.args = {
  type: 'dashed',
  className: '',
}
