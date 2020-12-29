import React from 'react'

import { render, cleanup } from '@testing-library/react'
import 'jest-styled-components'

import { Dropdown } from '.'
import MockTheme from './../../../mockTheme'

afterEach(cleanup)

test('it renders', () => {
  const dropdown = render(
    <MockTheme>
      <Dropdown
        id="dropdown1"
        placeholder="Dropdown"
        placeHolderIcon={<img src="//unsplash.it/16" />}
        value={undefined}
        options={[
          {
            label: 'None',
            value: '1',
            icon: <img src="//unsplash.it/16" />,
          },
          {
            label: 'Second point',
            value: '2',
            icon: <img src="//unsplash.it/16" />,
          },
          {
            label: 'Third point',
            value: '3',
            icon: <img src="//unsplash.it/16" />,
          },
        ]}
      />
    </MockTheme>,
  )

  const self = dropdown.container.firstChild

  expect(self).toMatchSnapshot()

  expect(self).toContainHTML('<img')
})
