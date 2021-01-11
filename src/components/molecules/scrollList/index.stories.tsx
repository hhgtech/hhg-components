import React from 'react'

import { Story } from '@storybook/react/types-6-0'

import { CategoryCard } from '../categoryCard'
import { ScrollList, Props } from './index'

export default {
  component: ScrollList,
  title: 'Molecules/ScrollList',
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
}

const Template: Story<Props> = (args) => (
  <ScrollList {...args}>
    {[...Array(13)].map((ele, index) => (
      <CategoryCard
        key={index}
        imgBanner={
          <img src="https://source.unsplash.com/random/74x63" alt="img" />
        }
        label="Mental Health"
      />
    ))}
  </ScrollList>
)

export const Normal = Template.bind({})
