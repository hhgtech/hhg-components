import { ThemeProps } from 'misc/theme'
import styled from 'styled-components'

export const StyledScrollList = styled.div`
  position: relative;
  width: 100%;

  > .container {
    display: flex;
    width: 100%;
    -ms-overflow-style: none;
    overflow-x: auto;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    .section {
      display: flex;
      width: 100%;
      flex-shrink: 0;

      > .grid-layout {
        display: grid;
        width: 100%;
        grid-row-gap: 8px;

        > .item-grid {
          margin: 0 auto;
        }
      }
    }
  }

  .bullet-nav {
    position: absolute;
    z-index: ${(props: ThemeProps) => props.theme.zIndexes.zIndex100};
    bottom: -20%;
    left: 50%;
    display: flex;
    transform: translate(-50%, -50%);
  }

  .bullet-nav__link {
    display: block;
    width: 8px;
    height: 8px;
    padding: 0;
    margin-right: 8px;
    backface-visibility: hidden;
    background-color: #e4e8ec;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s;
  }

  .bullet-nav__link.active {
    background-color: ${(props: ThemeProps) => props.theme.colors.blue600};
  }
`
