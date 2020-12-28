import React from 'react'

import { Story } from '@storybook/react/types-6-0'

import { IconText, Props } from './index'

export default {
  component: IconText,
  title: 'Molecules/IconText',
}

const Template: Story<Props> = (args) => (
  <IconText {...args}>Icon with Text</IconText>
)

export const Normal = Template.bind({})

Normal.args = {
  size: 'lg',
  iconPosition: 'left',
  icon: <img src="https://source.unsplash.com/random/30x30" />,
}
