import React from 'react'

import { Story } from '@storybook/react/types-6-0'

import { Props, Text } from './index'

export default {
  component: Text,
  title: 'Atoms/Text',
}

const Template: Story<Props> = (args) => (
  <Text {...args}>An example paragraph....</Text>
)

export const Normal = Template.bind({})

Normal.args = {
  size: 'base',
  type: 'regular',
}
