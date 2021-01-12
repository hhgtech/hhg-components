import styled from 'styled-components'

import { ThemeProps } from '../../../misc/theme'

export const StyledCard = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  background-color: ${(props: ThemeProps) => props.theme.colors.white};
  cursor: pointer;

  .banner {
    position: relative;
    height: 0;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  .content {
    display: flex;
    flex-direction: column;

    .new {
      display: flex;
      flex-direction: column;

      .label {
        margin-top: 16px;
      }

      .title {
        display: -webkit-box;
        overflow: hidden;
        margin-top: 4px;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }

      .text {
        display: -webkit-box;
        overflow: hidden;
        margin-top: 8px;
        margin-bottom: 8px;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
      }
    }
  }

  .footer {
    display: flex;

    .bookmark {
      display: flex;
      width: 12px;
      height: 14px;
      cursor: pointer;

      svg {
        width: 100%;
        height: 100%;
      }
    }
  }

  &[data-type='group1'] {
    .banner {
      img {
        border-radius: 6px;
      }
    }

    &[data-size='lg'] {
      flex-direction: column;

      .banner {
        width: 100%;
        height: 100px;
      }
    }

    &[data-size='sm'] {
      flex-direction: row;

      .banner {
        width: 100px;
        height: 100px;
        margin-right: 16px;
      }

      .content {
        /* 100px (img), 16px(margin-right banner) */
        width: calc(100% - 100px - 16px);
        justify-content: space-between;

        .new {
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

    .banner {
      width: 100%;
      padding-top: 192px;
    }

    .content {
      padding: 16px;

      .new {
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

      .footer {
        justify-content: center;
      }
    }
  }
`

export const StyledAuthor = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;

  &[data-type='group1'] {
    justify-content: space-between;
  }

  .author {
    display: flex;
    align-items: center;

    .avatar {
      flex-shrink: 0;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }

    .poster {
      display: flex;
      align-items: center;
      white-space: pre-wrap;

      p {
        color: ${(props: ThemeProps) => props.theme.colors.gray800};
        font-size: 11px;
        font-weight: 400;

        span {
          color: ${(props: ThemeProps) => props.theme.colors.gray400};
        }
      }
    }

    &[data-type='group1'] {
      .avatar {
        width: 24px;
        height: 24px;
        margin-right: 4px;
      }
    }

    &[data-type='group2'] {
      .avatar {
        width: 40px;
        height: 40px;
        margin-right: 8px;
      }

      .poster {
        p {
          display: -webkit-box;
          overflow: hidden;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
        }
      }
    }
  }
`
