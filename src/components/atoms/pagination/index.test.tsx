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
      />
    </MockTheme>,
  )

  const self = rendered.container.firstChild
  expect(self).toMatchSnapshot()
})
