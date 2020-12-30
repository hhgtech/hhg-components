import React from 'react'

import { render, cleanup } from '@testing-library/react'
import 'jest-styled-components'

import { ProgressBar } from '.'
import MockTheme from '../../../misc/mockTheme'

afterEach(cleanup)

const icon = (
  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 19.6 19.6"
  >
    <title>{'Component 3'}</title>
    <path
      d="M7.91 15.8a2.61 2.61 0 00-.11.75 2.14 2.14 0 002 2.25 2.14 2.14 0 002-2.25 2.61 2.61 0 00-.11-.75"
      fill="none"
      stroke="#262626"
      strokeWidth={1.6}
    />
    <path
      d="M15.8 6.8a6 6 0 00-12 0c0 7-3 9-3 9h18s-3-2-3-9z"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      stroke="#262626"
      strokeWidth={1.6}
    />
  </svg>
)

test('it renders', () => {
  const progressBar = render(
    <MockTheme>
      <ProgressBar
        type={'step-track'}
        numberOfStep={4}
        labelPrefix="Step"
        detailSteps={[
          {
            text: 'fyjfhj fhhchgchg',
            icon,
            description: 'description',
          },
          {
            text: 'Waiting',
            icon,
            description: 'description',
          },
          {
            text: 'In progress',
            icon,
            description: 'description',
          },
          {
            text: 'Waiting',
            icon,
            description: 'description',
          },
        ]}
        activeStep={1}
        className={'custom-class'}
        onChange={(step) => {
          console.log(step)
        }}
      />
    </MockTheme>,
  )

  const self = progressBar.container.firstChild
  expect(self).toMatchSnapshot()
})
