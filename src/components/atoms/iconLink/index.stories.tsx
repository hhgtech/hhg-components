import React from 'react'

import { Story } from '@storybook/react/types-6-0'

import { IconLink, Props } from './index'

export default {
  component: IconLink,
  title: 'Atoms/IconLink',
}

const Template: Story<Props> = (args) => <IconLink {...args}>IconLink</IconLink>

export const Normal = Template.bind({})

Normal.args = {
  size: 'lg',
  iconPosition: 'left',
  isDisabled: false,
}
