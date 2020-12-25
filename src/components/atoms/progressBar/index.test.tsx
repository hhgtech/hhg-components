import React from 'react'
import { render, cleanup } from '@testing-library/react'
import 'jest-styled-components'

import { ProgressBar } from '.'

import MockTheme from './../../../mockTheme'

afterEach(cleanup)

test('it renders', () => {
  const progressBar = render(
    <MockTheme>
      <ProgressBar
        numberOfStep={4}
        labelPrefix="Step"
        activeStep={2}
        className="custom-class"
        onChange={(step) => {
          console.log(step)
        }}
      />
    </MockTheme>,
  )

  const self = progressBar.container.firstChild
  expect(self).toMatchSnapshot()
})
