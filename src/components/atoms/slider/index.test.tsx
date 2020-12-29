import React from 'react'

import { render, cleanup } from '@testing-library/react'
import 'jest-styled-components'

import { Slider } from '.'
import MockTheme from './../../../mockTheme'

afterEach(cleanup)

test('it renders', () => {
  const slider = render(
    <MockTheme>
      <Slider
        heading="Consultation Fee"
        min={0}
        max={400}
        step={10}
        value={[0, 400]}
        onChange={(v) => console.log(v)}
      />
    </MockTheme>,
  )

  const self = slider.container.firstChild
  expect(self).toMatchSnapshot()
})
