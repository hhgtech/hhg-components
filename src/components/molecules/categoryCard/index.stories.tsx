import React from 'react'

import { Story } from '@storybook/react/types-6-0'

import { CategoryCard, Props } from './index'

export default {
  component: CategoryCard,
  title: 'Molecules/CategoryCard',
}

const Template: Story<Props> = (args) => <CategoryCard {...args} />

export const Normal = Template.bind({})

Normal.args = {
  imgBanner: <img src="https://source.unsplash.com/random/74x63" alt="img" />,
  label: 'Mental Health',
}
