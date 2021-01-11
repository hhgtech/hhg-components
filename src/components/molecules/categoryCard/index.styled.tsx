import { ThemeProps } from 'src/misc/theme'
import styled from 'styled-components'

export const StyledCategoryCard = styled.div`
  display: flex;
  width: 110px;
  height: 125px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  border: 1px solid ${(props: ThemeProps) => props.theme.colors.neutral100};
  background-color: white;
  border-radius: 6px;
  box-shadow: 0px 5px 12px rgba(40, 74, 117, 0.08);

  div.banner {
    width: 100%;
    height: 63px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  div.content {
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: center;
  }
`
