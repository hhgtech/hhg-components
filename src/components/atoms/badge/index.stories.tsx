import React from 'react'

import { Story } from '@storybook/react/types-6-0'

import { Bagde, Props } from '.'

export default {
  component: Bagde,
  title: 'Atoms/Bagde',
}

const Template: Story<Props> = (args) => <Bagde {...args} />

export const Numeric = Template.bind({})
Numeric.args = {
  color: 'primary',
  number: '99+',
}
