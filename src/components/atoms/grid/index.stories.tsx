import React from 'react'

import { Story } from '@storybook/react/types-6-0'

import { Grid, Props } from './index'

export default {
  component: Grid,
  title: 'Atoms/Grid',
  description:
    'This grid component is based on CSS Grid and uses fractional units.',
  argTypes: {
    columns: {
      description:
        'This is the default argument for a equally sized grid. Mandatory when you do not use gridTemplateColumns.',
    },
    columnsDesktop: {
      description:
        'The columns count on desktop. Mandatory when you do not use gridTemplateColumnsDesktop.',
    },
    justifyChildren: {
      description:
        'With this control you can either center the component or align it to the right. This only works when the child has a width of less than 100%',
    },
    gap: {
      description:
        'Optional value to add a gap between the columns. You have to add a unit like px at the end of the prop.',
    },
    gridTemplateColumns: {
      description:
        'Advanced replacement of the columns/columnsDesktop argument. Can be used to create non-equally sized comumns. For example 1fr 2fr 1fr.',
    },
  },
}

const Template: Story<Props> = (args) => (
  <Grid columns={2} columnsDesktop={4}>
    <div style={{ background: 'lightBlue' }}>I am a column</div>
    <div style={{ background: 'lightBlue' }}>I am a column</div>
    <div style={{ background: 'lightBlue' }}>I am a column</div>
    <div style={{ background: 'lightBlue' }}>I am a column</div>
  </Grid>
)

export const Normal = Template.bind({})

Normal.args = {
  columns: 2,

  // columnsDesktop: 4,

  // justifyChildren: 'center',
  // className: '',
}
