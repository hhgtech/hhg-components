import React from 'react'

import { Story } from '@storybook/react/types-6-0'

import { Shadow, Props } from '.'

export default {
  component: Shadow,
  title: 'Atoms/Shadow',
}

const Template: Story<Props> = (args) => (
  <Shadow {...args}>
    <div
      style={{
        height: 100,
        width: 100,
        borderRadius: 15,
        margin: 32,
        background: 'white',
        display: 'block',
      }}
    />
  </Shadow>
)

export const Small = Template.bind({})

Small.args = {
  size: 'small',
}

export const Normal = Template.bind({})

Normal.args = {
  size: 'normal',
}

export const Medium = Template.bind({})

Medium.args = {
  size: 'medium',
}

export const Large = Template.bind({})

Large.args = {
  size: 'large',
}

export const Soft = Template.bind({})

Soft.args = {
  size: 'soft',
}
