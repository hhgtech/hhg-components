import React from 'react'

import { Story } from '@storybook/react/types-6-0'

import { Props, Tag } from './index'

export default {
  component: Tag,
  title: 'Atoms/Tag',
}

const Template: Story<Props> = (args) => (
  <Tag {...args}>
    {args.type === 'sponsored' ? 'Sponsored' : 'Waiting for confirmation'}
  </Tag>
)

export const Normal = Template.bind({})

Normal.args = {
  isSquared: true,
  type: 'standard',
  isLight: true,
}

export const Sponsored = Template.bind({})

Sponsored.args = {
  type: 'sponsored',
}

export const Solid = Template.bind({})

Solid.args = {
  type: 'red',
  isLight: false,
}

export const HasMorePadding = Template.bind({})

HasMorePadding.args = {
  type: 'green',
  isRounded: true,
  hasMorePadding: true,
  isLight: true,
}

export const IsSquared = Template.bind({})

IsSquared.args = {
  type: 'green',
  isSquared: true,
  isLight: true,
}
