import React from 'react'
import { render, cleanup, screen } from '@testing-library/react'
import 'jest-styled-components'

import MockTheme from './../../../mockTheme'

import { Alert } from '.'

afterEach(cleanup)

test('it renders', () => {
  const alert = render(
    <MockTheme>
      <Alert
        text="This is an alert"
        type="success"
        contentIcon={<img src="https://source.unsplash.com/random/16x16" />}
        closeIcon={<img src="https://source.unsplash.com/random/16x16" />}
      />
    </MockTheme>,
  )

  const self = alert.container.firstChild

  expect(self).toMatchSnapshot()

  expect(self).toHaveAttribute('data-alert-type', 'success')
})
