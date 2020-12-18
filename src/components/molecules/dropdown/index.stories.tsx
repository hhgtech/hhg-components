import React from 'react'

import { Story } from '@storybook/react/types-6-0'

import { Dropdown, Props } from './index'

export default {
  component: Dropdown,
  title: 'Molecules/Dropdown',
}

const Template: Story<Props> = (args) => <Dropdown {...args} />

export const Normal = Template.bind({})

Normal.args = {
  id: 'dropdown1',
  placeholder: 'Dropdown',
  placeHolderIcon: <img src="//unsplash.it/16" />,
  value: undefined,
  options: [
    {
      label: 'None',
      value: '1',
      icon: <img src="//unsplash.it/16" />,
    },
    {
      label: 'Second point',
      value: '2',
      icon: <img src="//unsplash.it/16" />,
    },
    {
      label: 'Third point',
      value: '3',
      icon: <img src="//unsplash.it/16" />,
    },
  ],
}
