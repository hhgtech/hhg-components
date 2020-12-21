import React from 'react'
import { render, cleanup, screen } from '@testing-library/react'
import 'jest-styled-components'

import MockTheme from './../../../mockTheme'

import { Grid } from '.'

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
