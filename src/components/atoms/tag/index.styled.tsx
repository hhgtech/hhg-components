import { ThemeProps } from 'misc/theme'
import styled from 'styled-components'

export const StyledTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 8px;
  border-radius: 24px;

  &[data-has-more-padding] {
    padding: 5px 8px;
  }

  p {
    color: ${(props: ThemeProps) => props.theme.colors.white};
  }

  &[data-tag-type='yellow'] {
    background: ${(props: ThemeProps) => props.theme.colors.yellow600};
    p {
      color: ${(props: ThemeProps) => props.theme.colors.gray800};
    }
  }

  &[data-tag-type='default'] {
    background: ${(props: ThemeProps) => props.theme.colors.neutral200};
  }

  &[data-tag-type='red'] {
    background: ${(props: ThemeProps) => props.theme.colors.red500};
  }

  &[data-tag-type='green'] {
    background: ${(props: ThemeProps) => props.theme.colors.green500};
  }

  &[data-tag-type='blue'] {
    background: ${(props: ThemeProps) => props.theme.colors.primaryBase};
  }

  &[data-tag-type='teal'] {
    background: ${(props: ThemeProps) => props.theme.colors.teal600};
  }

  &[data-tag-type='pink'] {
    background: ${(props: ThemeProps) => props.theme.colors.pink800};
  }

  &[data-tag-type='violet'] {
    background: ${(props: ThemeProps) => props.theme.colors.violet500};
  }

  &[data-tag-type='grey'] {
    background: ${(props: ThemeProps) => props.theme.colors.gray600};
  }

  &[data-is-light] {
    color: ${(props: ThemeProps) => props.theme.colors.white};
    &[data-tag-type='yellow'] {
      background: ${(props: ThemeProps) => props.theme.colors.yellow50};
    }

    &[data-tag-type='red'] {
      background: ${(props: ThemeProps) => props.theme.colors.red50};
    }

    &[data-tag-type='green'] {
      background: ${(props: ThemeProps) => props.theme.colors.green50};
    }

    &[data-tag-type='blue'] {
      background: ${(props: ThemeProps) => props.theme.colors.blue50};
    }

    &[data-tag-type='teal'] {
      background: ${(props: ThemeProps) => props.theme.colors.teal100};
    }

    &[data-tag-type='pink'] {
      background: ${(props: ThemeProps) => props.theme.colors.pink100};
    }

    &[data-tag-type='pink'] {
      background: ${(props: ThemeProps) => props.theme.colors.pink200};
    }

    &[data-tag-type='violet'] {
      background: ${(props: ThemeProps) => props.theme.colors.violet100};
    }

    &[data-tag-type='grey'] {
      background: ${(props: ThemeProps) => props.theme.colors.gray100};
    }
  }

  &[data-is-squared='true'] {
    border-radius: 4px;
  }
`
