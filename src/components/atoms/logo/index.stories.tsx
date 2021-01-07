import React from 'react'

import { Story } from '@storybook/react/types-6-0'

import { Logo, Props } from '.'

export default {
  component: Logo,
  title: 'Atoms/Logo',
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: [
          'hellobacsi',
          'hellosehat',
          'hellohealth',
          'hellotogether',
          'hellocare',
          'logomark',
        ],
      },
      description: 'Show the logo for any Hello brand',
    },
  },
}

const Template: Story<Props> = (args) => <Logo {...args} />

export const HelloBacsi = Template.bind({})

const defaultprops = {
  width: '350px',
  height: 'auto',
}

HelloBacsi.args = {
  type: 'hellobacsi',
  ...defaultprops,
}

export const HelloHealth = Template.bind({})

HelloHealth.args = {
  type: 'hellohealth',
  ...defaultprops,
}

export const HelloSehat = Template.bind({})

HelloSehat.args = {
  type: 'hellosehat',
  ...defaultprops,
}

export const HelloTogether = Template.bind({})

HelloTogether.args = {
  type: 'hellotogether',
  ...defaultprops,
}

export const HelloCare = Template.bind({})

HelloCare.args = {
  type: 'hellocare',
  ...defaultprops,
}

export const LogoMark = Template.bind({})

LogoMark.args = {
  type: 'logomark',
  ...defaultprops,
}
