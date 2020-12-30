import React from 'react'

import { Story } from '@storybook/react/types-6-0'

import { Popup, Props } from './index'

export default {
  component: Popup,
  title: 'Molecules/Popup',
  argTypes: { onClick: { action: 'clicked' } },
}

const Template: Story<Props> = (args) => <Popup {...args} />

export const Lead = Template.bind({})

Lead.args = {
  type: 'lead',
  closeIcon: <img src="https://source.unsplash.com/random/16x16" />,
}
