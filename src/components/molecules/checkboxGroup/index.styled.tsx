import styled from 'styled-components'

export const StyledCheckboxGroup = styled.div`
  display: flex;

  &[data-type='vertical'] {
    flex-direction: column;

    div {
      margin-bottom: 20px;
    }
  }

  &[data-type='horizontal'] {
    flex-wrap: wrap;

    div {
      margin-right: 25px;
    }
  }
`
