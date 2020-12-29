import styled from 'styled-components'
import { ThemeProps } from 'theme'

export const StyledDivider = styled.hr`
  border-color: ${(props: ThemeProps) => props.theme.colors.neutral200};
  border-style: solid;
  border-width: 1px;

  &[data-diver-type='dashed'] {
    border-style: dashed;
  }
  &[data-diver-type='dotted'] {
    border-style: dotted;
  }
  &[data-diver-type='double'] {
    border-style: double;
  }
  &[data-diver-type='groove'] {
    border-style: groove;
  }
  &[data-diver-type='ridge'] {
    border-style: ridge;
  }
  &[data-diver-type='inset'] {
    border-style: inset;
  }
  &[data-diver-type='outset'] {
    border-style: outset;
  }
`
