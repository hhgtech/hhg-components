import React from 'react'

import { Story } from '@storybook/react/types-6-0'

import { Props, ProgressBar } from '.'

export default {
  component: ProgressBar,
  title: 'Molecules/ProgressBar',
}

const Template: Story<Props> = (args) => <ProgressBar {...args} />

export const Normal = Template.bind({})

const icon = (
  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 19.6 19.6"
  >
    <title>{'Component 3'}</title>
    <path
      d="M7.91 15.8a2.61 2.61 0 00-.11.75 2.14 2.14 0 002 2.25 2.14 2.14 0 002-2.25 2.61 2.61 0 00-.11-.75"
      fill="none"
      stroke="#262626"
      strokeWidth={1.6}
    />
    <path
      d="M15.8 6.8a6 6 0 00-12 0c0 7-3 9-3 9h18s-3-2-3-9z"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      stroke="#262626"
      strokeWidth={1.6}
    />
  </svg>
)

Normal.args = {
  type: 'detail-track',
  numberOfStep: 4,
  labelPrefix: 'Step',
  detailSteps: [
    {
      text: 'fyjfhj fhhchgchg',
      icon,
      description:
        'descrip tion descr iption description desc ription descrip tion descript ion description 1',
    },
    {
      text: 'Waiting',
      icon,
      description: 'description',
    },
    {
      text: 'In progress',
      icon,
      description: 'description',
    },
    {
      text: 'Waiting',
      icon,
      description: 'description',
    },
  ],
  activeStep: 1,
  className: 'custom-class',
  onChange: (step) => {
    console.log(step)
  },
}
