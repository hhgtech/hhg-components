import React from 'react'

import { Story } from '@storybook/react/types-6-0'

import { Toggle, Props } from '.'

export default {
  component: Toggle,
  title: 'Atoms/Toggle',
}

const Template: Story<Props> = (args) => <Toggle {...args} />

export const Checked = Template.bind({})

Checked.args = {
  checked: true,
}

export const Unchecked = Template.bind({})

Unchecked.args = {
  checked: false,
}
