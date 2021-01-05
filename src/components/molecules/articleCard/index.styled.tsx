import styled from 'styled-components'

import { ThemeProps } from '../../../misc/theme'

export const StyledCard = styled.div`
  width: 100%;
  background-color: ${(props: ThemeProps) => props.theme.colors.white};
  box-sizing: border-box;
  display: flex;

  div.banner {
    height: 0;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      object-fit: cover;
      object-position: center;
    }
  }

  div.content {
    display: flex;
    flex-direction: column;

    div.new {
      display: flex;
      flex-direction: column;

      .label {
        margin-top: 16px;
      }

      .title {
        margin-top: 4px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      .text {
        margin-top: 8px;
        margin-bottom: 8px;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
  }

  div.footer {
    display: flex;

    div.bookmark {
      width: 12px;
      height: 14px;
      display: flex;
      cursor: pointer;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  &[data-type='group1'] {
    padding: 16px;

    div.banner {
      img {
        border-radius: 6px;
      }
    }

    &[data-size='large'] {
      flex-direction: column;

      div.banner {
        width: 100%;
        padding-top: 192px;
      }
    }

    &[data-size='small'] {
      height: 134px;
      flex-direction: row;

      div.banner {
        width: 100px;
        padding-top: 100px;
        margin-right: 16px;
      }

      div.content {
        /* 100px (img), 16px(margin-right banner) */
        width: calc(100% - 100px - 16px);
        justify-content: space-between;

        div.new {
          .label {
            margin-top: 0px;
          }

          .text {
            display: none;
          }
        }
      }
    }
  }

  &[data-type='group2'] {
    flex-direction: column;

    div.banner {
      width: 100%;
      padding-top: 192px;
    }

    div.content {
      padding: 16px;

      div.new {
        .label {
          display: none;
        }

        .title {
          margin-bottom: 16px;
        }

        .text {
          margin-top: 24px;
          margin-bottom: 24px;
        }
      }

      div.footer {
        justify-content: center;
      }
    }
  }
`

export const StyledAuthor = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  &[data-type='group1'] {
    justify-content: space-between;
  }

  div.author {
    display: flex;
    align-items: center;

    div.avatar {
      flex-shrink: 0;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }

    div.poster {
      display: flex;
      align-items: center;
      white-space: pre-wrap;

      p {
        font-size: 11px;
        font-weight: 400;
        color: ${(props: ThemeProps) => props.theme.colors.gray800};

        span {
          color: ${(props: ThemeProps) => props.theme.colors.gray400};
        }
      }
    }

    &[data-type='group1'] {
      div.avatar {
        width: 24px;
        height: 24px;
        margin-right: 4px;
      }
    }

    &[data-type='group2'] {
      div.avatar {
        width: 40px;
        height: 40px;
        margin-right: 8px;
      }

      div.poster {
        p {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      }
    }
  }
`
