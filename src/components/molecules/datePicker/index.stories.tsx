/* eslint-disable react/display-name */
import React from 'react'

import { Story } from '@storybook/react/types-6-0'

import { DatePicker, Props } from './index'

export default {
  component: DatePicker,
  title: 'Molecules/DatePicker',
}

const Template: Story<Props> = (args) => <DatePicker {...args} />

export const Normal = Template.bind({})

Normal.args = {
  placeholder: 'placeholder',
  displayDateFormat: 'dd-MM-yyyy',
  pickedDate: new Date(),
  customInput: (props) => <input {...props} />,
  onChange: (d: Date) => {
    console.log(d)
  },
}
