import React from 'react'

import { Story } from '@storybook/react/types-6-0'

import { Tabs, Props } from './index'

export default {
  component: Tabs,
  title: 'Molecules/Tabs',
}

const Template: Story<Props> = (args) => <Tabs {...args} />

export const Normal = Template.bind({})

Normal.args = {
  initialTab: 0,
  tabContent: [
    {
      name: 'Tab 1',
    },
    {
      name: 'With icon',
      icon: <img src="//unsplash.it/16/16" />,
    },
    {
      name: 'Tab 2',
    },
    {
      name: 'With icon',
      icon: <img src="//unsplash.it/16/16" />,
    },
    {
      name: 'With icon',
      icon: <img src="//unsplash.it/16/16" />,
    },
    {
      name: 'With icon',
      icon: <img src="//unsplash.it/16/16" />,
    },
  ],
}
