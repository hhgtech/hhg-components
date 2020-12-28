import React from 'react'
import { ThemeProvider } from 'styled-components'
import figlet from 'figlet'
import shadow from 'figlet/importable-fonts/Shadow'
import { theme } from 'theme'

import './main.css'

figlet.parseFont('shadow', shadow)

figlet.text(
  'HHG Components',
  {
    font: 'shadow',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 120,
    whitespaceBreak: true,
  },
  function (__err, data) {
    console.info(data)
  },
)

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
]
