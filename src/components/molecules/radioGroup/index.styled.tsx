import styled from 'styled-components'

export const StyledRadioGroup = styled.div`
  display: flex;

  &[data-direction='vertical'] {
    flex-direction: column;

    div {
      &[data-type='circle'] {
        margin-bottom: 20px;
      }

      &[data-type='rectangle'] {
        margin-bottom: 20px;
      }
    }
  }

  &[data-direction='horizontal'] {
    flex-wrap: wrap;

    &[data-group='group1'] {
      div {
        &[data-type='rectangle'] {
          flex-wrap: wrap;

          &:first-child {
            label {
              border-top-left-radius: 6px;
              border-bottom-left-radius: 6px;
            }
          }

          &:last-child {
            label {
              border-top-right-radius: 6px;
              border-bottom-right-radius: 6px;
            }
          }

          &:not(:last-child) {
            label {
              border-right: unset;
            }
          }

          label {
            border-radius: unset;
          }
        }
      }
    }

    &[data-group='group2'] {
      div {
        &[data-type='rectangle'] {
          flex-wrap: wrap;
          margin-right: 8px;
          margin-bottom: 8px;
        }
      }
    }

    div {
      &[data-type='circle'] {
        margin-right: 25px;
      }

      &[data-type='rectangle'] {
        margin-bottom: 20px;
      }
    }
  }
`
