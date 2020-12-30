import React from 'react'

import { Story } from '@storybook/react/types-6-0'

import MockTheme from './../../../misc/mockTheme'
import { Props, Text } from './index'

export default {
  component: Text,
  title: 'Atoms/Text',
}

const Template: Story<Props> = (args) => (
  <MockTheme>
    <Text {...args}>An example paragraph....</Text>
  </MockTheme>
)

export const Normal = Template.bind({})

Normal.args = {
  size: 'base',
  type: 'regular',
}
