import React from 'react'

import { Story } from '@storybook/react/types-6-0'

import { Breadcrumbs, Props } from './'

export default {
  component: Breadcrumbs,
  title: 'Molecules/Breadcrumbs',
}

const Template: Story<Props> = (args) => <Breadcrumbs {...args} />

export const Normal = Template.bind({})
export const LongList = Template.bind({})

Normal.args = {
  size: 'md',
  pages: [
    {
      label: 'Home',
      value: '/',
    },
    {
      label: 'Category 1',
      value: '/category-1',
    },
    {
      label:
        'Sub Category 1 with a very long name that will not show completely',
      value: '/category-1/sub-category-1',
    },
    {
      label: 'Sub Category 2',
      value: '/category-1/sub-category-1/sub-category-2',
    },
  ],
}
LongList.args = {
  size: 'md',
  pages: [
    {
      label: 'Home',
      value: '/',
    },
    {
      label: 'Category 1',
      value: '/category-1',
    },
    {
      label: 'Sub Category 1',
      value: '/category-1/sub-category-1',
    },
    {
      label: 'Category 1',
      value: '/category-1',
    },
    {
      label: 'Sub Category 1',
      value: '/category-1/sub-category-1',
    },
    {
      label: 'Category 1',
      value: '/category-1',
    },
    {
      label: 'Sub Category 1',
      value: '/category-1/sub-category-1',
    },
    {
      label: 'Category 1',
      value: '/category-1',
    },
    {
      label: 'Sub Category 1',
      value: '/category-1/sub-category-1',
    },
  ],
}
