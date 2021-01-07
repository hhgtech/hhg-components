import React from 'react'

import { Story } from '@storybook/react/types-6-0'

import { DropdownSearch, Props } from './'

export default {
  component: DropdownSearch,
  title: 'Molecules/DropdownSearch',
}

const Template: Story<Props> = (args) => <DropdownSearch {...args} />

export const Normal = Template.bind({})

let value = {
  label: 'None',
  value: '1',
  icon: <img src="//unsplash.it/16" />,
}

const setValue = (option) => {
  value = option
}

Normal.args = {
  value,
  onChange: (option) => setValue(option),
}
