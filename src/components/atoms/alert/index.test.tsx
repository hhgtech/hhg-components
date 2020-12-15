import React from 'react'
import { render, cleanup, screen } from '@testing-library/react'
import 'jest-styled-components'

import { Alert } from '.'

afterEach(cleanup)

test('it renders', () => {
  const alert = render(
    <Alert
      text="This is an alert"
      type="success"
      contentIcon={<img src="https://source.unsplash.com/random/16x16" />}
      closeIcon={<img src="https://source.unsplash.com/random/16x16" />}
    />,
  )

  expect(alert.container).toMatchSnapshot()

  expect(alert.container.firstChild).toHaveAttribute(
    'data-alert-type',
    'success',
  )
})
