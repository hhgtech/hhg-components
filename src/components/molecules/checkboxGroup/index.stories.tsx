import React from 'react'

import { Story } from '@storybook/react/types-6-0'

import { Props, CheckboxGroup } from '.'

export default {
  component: CheckboxGroup,
  title: 'Molecules/CheckboxGroup',
}

const Template: Story<Props> = (args) => <CheckboxGroup {...args} />

export const Checked = Template.bind({})

Checked.args = {
  options: [
    {
      label: 'option 1',
      value: '1',
    },
    {
      label: 'option 2',
      value: '2',
    },
    {
      label: 'option 3',
      value: '3',
    },
    {
      label: 'option 4',
      value: '4',
    },
  ],
  values: ['1'],
  isDisabled: true,
  name: 'CheckboxGroup',
  type: 'vertical',
}

export const Unchecked = Template.bind({})

Unchecked.args = {
  options: [
    {
      label: 'option 1',
      value: '1',
    },
    {
      label: 'option 2',
      value: '2',
    },
    {
      label: 'option 3',
      value: '3',
    },
    {
      label: 'option 4',
      value: '4',
    },
  ],
  name: 'CheckboxGroup',
  type: 'vertical',
}

export const LongText = Template.bind({})

LongText.args = {
  options: [
    {
      label:
        'Checkbox label that wraps to multiple lines because it is too long',
      value: '1',
    },
    {
      label: 'option 2',
      value: '2',
    },
    {
      label:
        'Checkbox label that wraps to multiple lines because it is too long',
      value: '3',
    },
    {
      label: 'option 4',
      value: '4',
    },
  ],
  name: 'CheckboxGroup',
  type: 'vertical',
}
export const SomeDisabled = Template.bind({})

SomeDisabled.args = {
  options: [
    {
      label: 'Checkbox 1',
      value: '1',
    },
    {
      label: 'option 2',
      value: '2',
      disabled: true,
    },
    {
      label: 'Checkbox 3',
      value: '3',
    },
    {
      label: 'option 4',
      value: '4',
      disabled: true,
    },
  ],
  values: ['1', '4'],
  name: 'CheckboxGroup',
  type: 'vertical',
}
