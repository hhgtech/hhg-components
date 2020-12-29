import React from 'react'

import { render, cleanup } from '@testing-library/react'
import 'jest-styled-components'

import * as Table from '../table'
import MockTheme from './../../../mockTheme'

afterEach(cleanup)

test('it renders', () => {
  const dropdown = render(
    <MockTheme>
      <Table.Table>
        <Table.Head isSticky>
          <th>Header one</th>
          <th>Header two</th>
          <th>Header three</th>
        </Table.Head>
      </Table.Table>
    </MockTheme>,
  )

  const self = dropdown.container.firstChild

  expect(self).toMatchSnapshot()

  expect(self.firstChild).toHaveAttribute('data-is-sticky', 'true')
})
