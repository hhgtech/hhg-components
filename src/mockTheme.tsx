import React from 'react'
import { theme } from 'theme'
import { ThemeProvider } from 'styled-components'

const MockTheme = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default MockTheme
