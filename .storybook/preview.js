import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from 'theme'

import './main.css'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
]
