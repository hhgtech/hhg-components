import React from 'react'
import { render, cleanup } from '@testing-library/react'
import 'jest-styled-components'

import { FileDropdown } from '.'

import MockTheme from '../../../mockTheme'

afterEach(cleanup)

test('it renders', () => {
  const dropdown = render(
    <MockTheme>
      <FileDropdown
        id="dropdown1"
        placeholder="CSV file"
        placeHolderIcon={undefined}
        value={undefined}
        options={[
          {
            type: 'upload',
            label: 'Upload',
            value: '1',
            icon: undefined,
            fileAcceptedType: '*',
            multiple: false,
          },
          {
            type: 'download',
            label: 'Download',
            value: '2',
            icon: undefined,
            url: 'http://unsplash.it/16',
          },
        ]}
        onUploadSelected={(e: FileList) => {
          console.log(e)
        }}
      />
    </MockTheme>,
  )

  const self = dropdown.container.firstChild

  expect(self).toMatchSnapshot()
})
