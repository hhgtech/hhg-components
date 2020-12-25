import React from 'react'

import { Story } from '@storybook/react/types-6-0'

import { Props, ProgressBar } from '.'

export default {
  component: ProgressBar,
  title: 'Molecules/ProgressBar',
}

const Template: Story<Props> = (args) => <ProgressBar {...args} />

export const Normal = Template.bind({})

Normal.args = {
  numberOfStep: 4,
  labelPrefix: 'Step',
  activeStep: 2,
  className: 'custom-class',
  onChange: (step) => {
    console.log(step)
  },
}
