import { ThemeProps } from 'misc/theme'
import styled from 'styled-components'

export const StyledTag = styled.div`
  --padding-horizontal: 8px;
  --pading-vertical: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--pading-vertical) var(--padding-horizontal);
  border-radius: 24px;

  &[data-tag-type='sponsored'] {
    --offset-size: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    position: relative;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);
    border-radius: 0 4px 18px 0;
    height: 24px;
    width: 90px;
    border-left: var(--offset-size) solid
      ${(props: ThemeProps) => props.theme.colors.accentLight};
    padding: 0;
    margin-left: calc(var(--offset-size) * -1);

    p {
      font-weight: ${(props: ThemeProps) => props.theme.sizes.fwBold};
      color: ${(props: ThemeProps) => props.theme.colors.secondaryDark};
      font-size: 11px;
      margin-left: calc(var(--offset-size) * -1);
    }

    &::after {
      width: calc(var(--offset-size) * 2);
      height: var(--offset-size);
      background: ${(props: ThemeProps) => props.theme.colors.accentMain};
      position: absolute;
      left: calc(var(--offset-size) * -1);
      bottom: calc(var(--offset-size) * -1);
      clip-path: polygon(0 1%, 100% 0%, 100% 100%);
      content: '';
    }
  }

  &[data-is-inline] {
    display: inline-block;
  }

  &[data-has-more-padding] {
    padding: calc(var(--pading-vertical) + 5px) var(--padding-horizontal);
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

  &[data-tag-type='standard'] {
    background: ${(props: ThemeProps) => props.theme.colors.white};
    border: 1px solid ${(props: ThemeProps) => props.theme.colors.gray200};

    p {
      color: ${(props: ThemeProps) => props.theme.colors.gray800};
    }

    &:hover {
      background: ${(props) => props.theme.colors.gray100};
    }
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
    p {
      color: #000;
    }
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

  &[data-is-squared='true']:not([data-tag-type='sponsored']) {
    border-radius: 4px;
  }

  &[data-is-link] {
    cursor: pointer;
  }

  &[data-is-selected],
  &:active {
    background: ${(props: ThemeProps) => props.theme.colors.blue50};
  }
`
