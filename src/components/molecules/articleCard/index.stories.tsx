import React from 'react'

import { Story } from '@storybook/react/types-6-0'

import { ArticleCard, Props } from './index'

export default {
  component: ArticleCard,
  title: 'Molecules/ArticleCard',
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
}

const Template: Story<Props> = (args) => <ArticleCard {...args} />

export const Group1Large = Template.bind({})

Group1Large.args = {
  type: 'group1',
  banner: 'https://source.unsplash.com/random/500x500',
  size: 'large',
  label: 'category name',
  styleLabel: { color: '#008C50' },
  title: 'Article Title',
  text:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus quis lacus, ullamcorper pellentesque pharetra, a dignissim',
  avatarImg: <img src="https://source.unsplash.com/random/74x74" />,
  doctorName: 'By Doctor’s',
  uploadTime: 'Updated time',
}

export const Group1Small = Template.bind({})

Group1Small.args = {
  type: 'group1',
  banner: 'https://source.unsplash.com/random/500x500',
  size: 'small',
  label: 'category name',
  styleLabel: { color: '#008C50' },
  title: 'Article Title',
  text:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus quis lacus, ullamcorper pellentesque pharetra, a dignissim',
  avatarImg: <img src="https://source.unsplash.com/random/74x74" />,
  doctorName: 'By Doctor’s',
  uploadTime: 'Updated time',
}

export const Group1HasButton = Template.bind({})

Group1HasButton.args = {
  type: 'group1',
  banner: 'https://source.unsplash.com/random/500x500',
  size: 'large',
  label: 'category name',
  styleLabel: { color: '#008C50' },
  title: 'Article Title',
  text:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus quis lacus, ullamcorper pellentesque pharetra, a dignissim',
  avatarImg: <img src="https://source.unsplash.com/random/74x74" />,
  doctorName: 'By Doctor’s',
  uploadTime: 'Updated time',
  hasButton: true,
  textButton: 'READ MORE',
}

export const Group2 = Template.bind({})

Group2.args = {
  type: 'group2',
  banner: 'https://source.unsplash.com/random/500x500',
  title: 'Article Title',
  text:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus quis lacus, ullamcorper pellentesque pharetra, a dignissim',
  avatarImg: <img src="https://source.unsplash.com/random/74x74" />,
  doctorName: 'Medical reviewed by Doctor’s Name',
  posterName: 'Written by Author’s Name',
  uploadTime: 'Updated time',
  hasButton: true,
  textButton: 'READ MORE',
}
