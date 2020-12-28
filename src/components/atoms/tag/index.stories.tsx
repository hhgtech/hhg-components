import React from 'react'

import { Story } from '@storybook/react/types-6-0'

import { Props, Tag } from './index'

export default {
  component: Tag,
  title: 'Atoms/Tag',
}

const Template: Story<Props> = (args) => (
  <Tag {...args}>Waiting for confirmation</Tag>
)

export const Normal = Template.bind({})

Normal.args = {
  squared: false,
}
