import React from 'react'

import { Story } from '@storybook/react/types-6-0'

import { UnderlinedLink, Props } from './index'

export default {
  component: UnderlinedLink,
  title: 'Atoms/Underlined Link',
  argTypes: {
    link: {
      description:
        'Add any JSX element here. A good example would be an <a> element or the Next Link component.',
    },
  },
}

const Template: Story<Props> = (args) => <UnderlinedLink {...args} />

export const Normal = Template.bind({})

Normal.args = {
  size: 'lg',
  isDisabled: false,
  prefetch: false,
  link: <a>Hello, world</a>,
}

export const Disabled = Template.bind({})
Disabled.args = {
  size: 'lg',
  isDisabled: true,
  prefetch: false,
  link: <a>This link is disabled</a>,
}
