import React from 'react'

import { Story } from '@storybook/react/types-6-0'

import { FileDropdown, Props } from './index'

export default {
  component: FileDropdown,
  title: 'Atoms/FileDropDown',
}

const Template: Story<Props> = (args) => <FileDropdown {...args} />

export const Normal = Template.bind({})

Normal.args = {
  id: 'dropdown1',
  placeholder: 'CSV file',
  placeholderIcon: undefined,
  value: undefined,
  options: [
    {
      type: 'upload',
      label: 'Upload',
      value: '1',
      icon: undefined,
      fileAcceptedType: '*',
      multiple: true,
    },
    {
      type: 'download',
      label: 'Download',
      value: '2',
      icon: undefined,
      url: 'http://unsplash.it/16',
    },
  ],
  onUploadSelected: (e: FileList) => {
    console.log(e)
  },
}
