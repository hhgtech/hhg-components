import React from 'react'
import { render, cleanup, screen } from '@testing-library/react'
import 'jest-styled-components'

import { Popup } from '.'

import MockTheme from './../../../mockTheme'

afterEach(cleanup)

test('it renders', () => {
  const popup = render(
    <MockTheme>
      <Popup
        isOpen
        type="lead"
        closeIcon={<img src="https://source.unsplash.com/random/16x16" />}
        onClose={() => console.log('onClose')}
      />
    </MockTheme>,
  )

  const self = popup.container.firstChild

  expect(self).toMatchSnapshot()
})
