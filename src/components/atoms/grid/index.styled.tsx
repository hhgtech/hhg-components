import { pcLayout } from 'misc/utils'
import styled from 'styled-components'

export const StyledGrid = styled.div`
  --column-count: ${(props) => props.theme.columns};
  --columns-count-desktop: ${(props) => props.theme.columnsDesktop};

  --grid-template-columns: ${(props) => props.theme.gridTemplateColumns};
  --grid-template-columns-desktop: ${(props) =>
    props.theme.gridTemplateColumnsDesktop};

  --columns: var(--grid-template-columns, repeat(var(--columns-count), 1fr));
  --columns-desktop: var(
    --grid-template-columns-desktop,
    repeat(var(--columns-count-desktop), 1fr)
  );

  --justify-children: ${(props) => props.theme.justifyChildren};
  --grid-gap: ${(props) => props.theme.gap};
  --align-items: ${(props) => props.theme.alignItems};

  display: grid;
  grid-template-columns: var(--columns);
  grid-gap: var(--grid-gap);
  align-items: var(--align-items);

  ${pcLayout()`
      grid-template-columns: var(--columns-desktop);
  `}

  > * {
    justify-self: var(--justify-children);
  }
`
