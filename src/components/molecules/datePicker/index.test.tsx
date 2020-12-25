import React from 'react'
import { render, cleanup } from '@testing-library/react'
import ReactTestUtils, { act } from 'react-dom/test-utils'
import 'jest-styled-components'

import { DatePicker } from '.'

import MockTheme from './../../../mockTheme'

afterEach(cleanup)

const placeholder = 'text holder'

test('it renders and calendar appears on click', () => {
  const datePicker = render(
    <MockTheme>
      <DatePicker
        placeholder={placeholder}
        displayDateFormat="dd-MM-yyyy"
        pickedDate={new Date()}
        customInput={(props: any) => <input {...props} />}
        onChange={(d: Date) => {
          console.log(d)
        }}
      />
    </MockTheme>,
  )

  const self = datePicker.container.firstChild
  const input = datePicker.container.querySelector('input')

  expect(self).toMatchSnapshot()
  expect(input.placeholder).toEqual(placeholder)

  let calendar = datePicker.container.querySelector('.pickerOverlayWrapper')

  expect(calendar).toBeNull()

  act(() => {
    input.dispatchEvent(new MouseEvent('click', { bubbles: true }))
  })

  calendar = datePicker.container.querySelector('.pickerOverlayWrapper')
  expect(calendar).toBeTruthy()
})
