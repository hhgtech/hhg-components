import React from 'react'
import { Story } from '@storybook/react/types-6-0'
import { DashboardMenu, Props } from './index'

export default {
  component: DashboardMenu,
  title: 'Molecules/Dashboard Menu',
}

const Template: Story<Props> = (args) => <DashboardMenu {...args} />

export const Normal = Template.bind({})

Normal.args = {
  initalPage: 3,
  pages: [
    {
      name: 'Overview',
      icon: <img src="https://source.unsplash.com/random/32x32" />,
      activeIcon: <img src="https://source.unsplash.com/random/32x32" />,
    },

    {
      name: 'Facilities',
      icon: <img src="https://source.unsplash.com/random/32x32" />,
      activeIcon: <img src="https://source.unsplash.com/random/32x32" />,
    },

    {
      name: 'Doctors',
      icon: <img src="https://source.unsplash.com/random/32x32" />,
      activeIcon: <img src="https://source.unsplash.com/random/32x32" />,
    },

    {
      name: 'Patients',
      icon: <img src="https://source.unsplash.com/random/32x32" />,
      activeIcon: <img src="https://source.unsplash.com/random/32x32" />,
    },

    {
      name: 'Settings',
      icon: <img src="https://source.unsplash.com/random/32x32" />,
      activeIcon: <img src="https://source.unsplash.com/random/32x32" />,
    },
  ],
}
