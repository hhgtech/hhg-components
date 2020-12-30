import React from 'react'

import { render, cleanup } from '@testing-library/react'
import 'jest-styled-components'

import { Grid } from '.'
import MockTheme from '../../../misc/mockTheme'

afterEach(cleanup)

test('it renders', () => {
  const grid = render(
    <MockTheme>
      <Grid columns={2} columnsDesktop={2}>
        <div>column 1</div>
        <div>column 2</div>
      </Grid>
    </MockTheme>,
  )

  const self = grid.container.firstChild

  expect(self).toMatchSnapshot()

  expect(self.firstChild).toReturn
})
