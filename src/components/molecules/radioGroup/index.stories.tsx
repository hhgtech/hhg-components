import React from 'react'

import { Story } from '@storybook/react/types-6-0'

import { Props, RadioGroup } from '.'

export default {
  component: RadioGroup,
  title: 'Molecules/RadioGroup',
}

const Template: Story<Props> = (args) => <RadioGroup {...args} />

export const CheckedRadioGroup = Template.bind({})

CheckedRadioGroup.args = {
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
  value: '1',
  isDisabled: true,
  id: 'radioGroup',
  type: 'circle',
  direction: 'vertical',
  size: 'small',
  group: 'group1',
}

export const UncheckedRadioGroup = Template.bind({})

UncheckedRadioGroup.args = {
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
  id: 'radioGroup',
  type: 'circle',
  direction: 'horizontal',
  size: 'small',
  group: 'group1',
}

export const CheckedRectangleGroup = Template.bind({})

CheckedRectangleGroup.args = {
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
  value: '1',
  isDisabled: true,
  id: 'radioGroup',
  type: 'rectangle',
  direction: 'horizontal',
  size: 'small',
  group: 'group1',
}

export const UncheckedRectangleGroup = Template.bind({})

UncheckedRectangleGroup.args = {
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
  id: 'radioGroup',
  type: 'rectangle',
  direction: 'horizontal',
  size: 'small',
  group: 'group2',
}
