import React from 'react'
import { render, cleanup, screen } from '@testing-library/react'
import 'jest-styled-components'

import { IconText } from '.'

import MockTheme from './../../../mockTheme'

afterEach(cleanup)

test('it renders', () => {
  const iconText = render(
    <MockTheme>
      <IconText
        size="lg"
        iconPosition="left"
        icon={<img src="https://source.unsplash.com/random/30x30" />}
      >
        Test Icon Text
      </IconText>
    </MockTheme>,
  )

  const self = iconText.container.firstChild

  expect(self).toMatchSnapshot()

  expect(self).toContainHTML('<img ')
  expect(self).toContainHTML('Test Icon Text')
  expect(self).toHaveAttribute('data-size', 'lg')
})
