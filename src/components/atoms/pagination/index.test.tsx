import React from 'react'

import { render, cleanup } from '@testing-library/react'
import 'jest-styled-components'

import { Pagination } from '.'
import MockTheme from '../../../misc/mockTheme'

afterEach(cleanup)

test('it renders', () => {
  const rendered = render(
    <MockTheme>
      <Pagination
        pagesAmount={10}
        currentPage={3}
        onChange={(page) => {
          console.log(page)
        }}
        arrowLeft={
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 5.5 9.5"
          >
            <title>{'chevron-right'}</title>
            <path
              d="M4.75 8.75l-4-4 4-4"
              fill="none"
              stroke="#2d87f3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
            />
          </svg>
        }
        arrowRight={
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 5.5 9.5"
          >
            <title>{'chevron-right'}</title>
            <path
              d="M.75 8.75l4-4-4-4"
              fill="none"
              stroke="#2d87f3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
            />
          </svg>
        }
      />
    </MockTheme>,
  )

  const self = rendered.container.firstChild
  expect(self).toMatchSnapshot()
})
