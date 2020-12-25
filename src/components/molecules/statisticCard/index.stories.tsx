import React from 'react'
import { Story } from '@storybook/react/types-6-0'
import { StatisticCard, Props } from './index'

export default {
  component: StatisticCard,
  title: 'Molecules/StatisticCard',
}

const Template: Story<Props> = (args) => <StatisticCard {...args} />

export const Normal = Template.bind({})

Normal.args = {
  description: 'Total Bookings',
  value: 12789,
  withIcon: (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 26.56 26.94"
    >
      <title>{'like'}</title>
      <path
        d="M7.36 25.69H3.69a2.41 2.41 0 01-1.72-.71 2.45 2.45 0 01-.72-1.73v-8.56a2.46 2.46 0 012.44-2.44h3.67m8.56-2.44V4.92a3.67 3.67 0 00-3.67-3.67l-4.89 11v13.44h13.79a2.44 2.44 0 002.44-2.07l1.69-11a2.48 2.48 0 00-.07-1 2.43 2.43 0 00-.5-.92 2.39 2.39 0 00-.85-.63 2.27 2.27 0 00-1-.21z"
        fill="none"
        stroke="#262626"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
      />
    </svg>
  ),
  isInACard: true,
  cardColor: '#E3F2FF',
  className: 'string',
}
