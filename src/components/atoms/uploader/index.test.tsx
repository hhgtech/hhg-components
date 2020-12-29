import React from 'react'
import { render, cleanup } from '@testing-library/react'
import 'jest-styled-components'

import { Uploader } from '.'

import MockTheme from '../../../mockTheme'
import { Avatar } from '../avatar'
import { Button } from '../button'

afterEach(cleanup)

const icon = (
  <svg
    id="prefix__Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 15.5 12.5"
  >
    <defs>
      <style>
        {
          '.prefix__cls-1{fill:none;stroke:#262626;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}'
        }
      </style>
    </defs>
    <title>{'camera'}</title>
    <path
      className="prefix__cls-1"
      d="M15 11.78a1.19 1.19 0 01-.37.86 1.31 1.31 0 01-.9.36H2.27a1.31 1.31 0 01-.9-.36 1.19 1.19 0 01-.37-.86V5.06a1.19 1.19 0 01.37-.87 1.31 1.31 0 01.9-.36h2.55L6.09 2h3.82l1.27 1.83h2.55a1.31 1.31 0 01.9.36 1.19 1.19 0 01.37.87z"
      transform="translate(-.25 -1.25)"
    />
    <path
      className="prefix__cls-1"
      d="M8 10a2 2 0 10-2-2 2 2 0 002 2z"
      transform="translate(-.25 -1.25)"
    />
  </svg>
)

const avatar = (
  <Avatar
    type="square"
    avatarImg={<img src="https://source.unsplash.com/random/74x74" />}
    onClick={() => {}}
  />
)

const button = (
  <Button size="md" color="secondary" className="default-button" icon={icon}>
    <svg
      id="prefix__Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 13.5 13.5"
    >
      <defs>
        <style>
          {
            '.prefix__cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}'
          }
        </style>
      </defs>
      <title>{'upload'}</title>
      <path
        className="prefix__cls-1"
        d="M14 10v2.67A1.33 1.33 0 0112.67 14H3.33A1.33 1.33 0 012 12.67V10M11.33 5.33L8 2 4.67 5.33M8 2v8"
        transform="translate(-1.25 -1.25)"
      />
    </svg>
    {'Upload Image 2'}
  </Button>
)

let type: 'badge' | 'button' = 'badge'

test('it renders', () => {
  const uploader = render(
    <MockTheme>
      <Uploader
        type={type}
        onFileSelected={(files: FileList) => {
          console.log(files)
        }}
        withIcon={icon}
        inputId={'1'}
        fileAcceptType="image/*"
        multiple={true}
        withElement={type === 'badge' ? avatar : button}
      />
    </MockTheme>,
  )

  const self = uploader.container.firstChild
  expect(self).toMatchSnapshot()
})
