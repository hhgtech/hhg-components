import React from 'react'

import { render, cleanup } from '@testing-library/react'
import 'jest-styled-components'

import { Breadcrumbs } from '.'
import MockTheme from './../../../mockTheme'

afterEach(cleanup)

test('it renders', () => {
  const dropdown = render(
    <MockTheme>
      <Breadcrumbs
        size="md"
        pages={[
          {
            label: 'Home',
            value: '/',
          },
          {
            label: 'Category 1',
            value: '/category-1',
          },
          {
            label:
              'Sub Category 1 with a very long name that will not show completely',
            value: '/category-1/sub-category-1',
          },
          {
            label: 'Sub Category 2',
            value: '/category-1/sub-category-1/sub-category-2',
          },
        ]}
      />
    </MockTheme>,
  )

  const self = dropdown.container.firstChild

  expect(self).toMatchSnapshot()

  expect(self).toContainHTML('Home')
  expect(self).toContainHTML('/category-1')
})
