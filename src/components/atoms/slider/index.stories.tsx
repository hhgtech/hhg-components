import React from 'react'

import { Story } from '@storybook/react/types-6-0'

import { Props, Slider } from '.'

export default {
  component: Slider,
  title: 'Atoms/Slider',
}

const Template: Story<Props> = (args) => <Slider {...args} />

export const Normal = Template.bind({})

Normal.args = {
  heading: 'Consultation Fee',
  min: 0,
  max: 400,
  step: 10,
  value: [0, 400],
}
