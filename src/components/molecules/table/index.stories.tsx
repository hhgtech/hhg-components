import React from 'react'

import { Story } from '@storybook/react/types-6-0'

import * as Table from '../table'

import MockTheme from './../../../mockTheme'

export default {
  component: Table,
  title: 'Molecules/Table',
}

const Template: Story = (args) => (
  <Table.Table {...args}>
    <Table.Head isSticky>
      <Table.Cell isTableHead>Header Cell one</Table.Cell>
      <Table.Cell isTableHead>Header Cell Two</Table.Cell>
      <Table.Cell isTableHead>Header Cell Tree</Table.Cell>
      <Table.Cell isTableHead>Header Cell Four</Table.Cell>
      <Table.Cell isTableHead>Header Cell Five</Table.Cell>
    </Table.Head>
    <Table.Body isStriped isHoverable>
      <Table.Row>
        <Table.Cell>Cell one</Table.Cell>
        <Table.Cell>Cell Two</Table.Cell>
        <Table.Cell>Cell Three</Table.Cell>
        <Table.Cell>Cell Four</Table.Cell>
        <Table.Cell>Cell Dive</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Cell one</Table.Cell>
        <Table.Cell>Cell Two</Table.Cell>
        <Table.Cell>Cell Three</Table.Cell>
        <Table.Cell>Cell Four</Table.Cell>
        <Table.Cell>Cell Dive</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Cell one</Table.Cell>
        <Table.Cell>Cell Two</Table.Cell>
        <Table.Cell>Cell Three</Table.Cell>
        <Table.Cell>Cell Four</Table.Cell>
        <Table.Cell>Cell Dive</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Cell one</Table.Cell>
        <Table.Cell>Cell Two</Table.Cell>
        <Table.Cell>Cell Three</Table.Cell>
        <Table.Cell>Cell Four</Table.Cell>
        <Table.Cell>Cell Dive</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Cell one</Table.Cell>
        <Table.Cell>Cell Two</Table.Cell>
        <Table.Cell>Cell Three</Table.Cell>
        <Table.Cell>Cell Four</Table.Cell>
        <Table.Cell>Cell Dive</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Cell one</Table.Cell>
        <Table.Cell>Cell Two</Table.Cell>
        <Table.Cell>Cell Three</Table.Cell>
        <Table.Cell>Cell Four</Table.Cell>
        <Table.Cell>Cell Dive</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Cell one</Table.Cell>
        <Table.Cell>Cell Two</Table.Cell>
        <Table.Cell>Cell Three</Table.Cell>
        <Table.Cell>Cell Four</Table.Cell>
        <Table.Cell>Cell Dive</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Cell one</Table.Cell>
        <Table.Cell>Cell Two</Table.Cell>
        <Table.Cell>Cell Three</Table.Cell>
        <Table.Cell>Cell Four</Table.Cell>
        <Table.Cell>Cell Dive</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Cell one</Table.Cell>
        <Table.Cell>Cell Two</Table.Cell>
        <Table.Cell>Cell Three</Table.Cell>
        <Table.Cell>Cell Four</Table.Cell>
        <Table.Cell>Cell Dive</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Cell one</Table.Cell>
        <Table.Cell>Cell Two</Table.Cell>
        <Table.Cell>Cell Three</Table.Cell>
        <Table.Cell>Cell Four</Table.Cell>
        <Table.Cell>Cell Dive</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Cell one</Table.Cell>
        <Table.Cell>Cell Two</Table.Cell>
        <Table.Cell>Cell Three</Table.Cell>
        <Table.Cell>Cell Four</Table.Cell>
        <Table.Cell>Cell Dive</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Cell one</Table.Cell>
        <Table.Cell>Cell Two</Table.Cell>
        <Table.Cell>Cell Three</Table.Cell>
        <Table.Cell>Cell Four</Table.Cell>
        <Table.Cell>Cell Dive</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Cell one</Table.Cell>
        <Table.Cell>Cell Two</Table.Cell>
        <Table.Cell>Cell Three</Table.Cell>
        <Table.Cell>Cell Four</Table.Cell>
        <Table.Cell>Cell Dive</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Cell one</Table.Cell>
        <Table.Cell>Cell Two</Table.Cell>
        <Table.Cell>Cell Three</Table.Cell>
        <Table.Cell>Cell Four</Table.Cell>
        <Table.Cell>Cell Dive</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Cell one</Table.Cell>
        <Table.Cell>Cell Two</Table.Cell>
        <Table.Cell>Cell Three</Table.Cell>
        <Table.Cell>Cell Four</Table.Cell>
        <Table.Cell>Cell Dive</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Cell one</Table.Cell>
        <Table.Cell>Cell Two</Table.Cell>
        <Table.Cell>Cell Three</Table.Cell>
        <Table.Cell>Cell Four</Table.Cell>
        <Table.Cell>Cell Dive</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Cell one</Table.Cell>
        <Table.Cell>Cell Two</Table.Cell>
        <Table.Cell>Cell Three</Table.Cell>
        <Table.Cell>Cell Four</Table.Cell>
        <Table.Cell>Cell Dive</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table.Table>
)

export const FullTable = Template.bind({})

FullTable.args = {
  horizontalPadding: '19px',
  verticalPadding: '30px',
}

const Header: Story = (args) => (
  <Table.Table>
    <Table.Head>
      <th>Header Cell one</th>
      <th>Header Cell Two</th>
      <th>Header Cell Three</th>
      <th>Header Cell Four</th>
      <th>Header Cell Five</th>
    </Table.Head>
  </Table.Table>
)

export const TableHeader = Header.bind({})

TableHeader.args = {
  isSticky: true,
}

const Row: Story = (args) => (
  <Table.Table>
    <Table.Row {...args}>
      <Table.Cell>Cell one</Table.Cell>
      <Table.Cell>Cell Two</Table.Cell>
      <Table.Cell>Cell Three</Table.Cell>
      <Table.Cell>Cell Four</Table.Cell>
      <Table.Cell>Cell Dive</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Cell one</Table.Cell>
      <Table.Cell>Cell Two</Table.Cell>
      <Table.Cell>Cell Three</Table.Cell>
      <Table.Cell>Cell Four</Table.Cell>
      <Table.Cell>Cell Dive</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Cell one</Table.Cell>
      <Table.Cell>Cell Two</Table.Cell>
      <Table.Cell>Cell Three</Table.Cell>
      <Table.Cell>Cell Four</Table.Cell>
      <Table.Cell>Cell Dive</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Cell one</Table.Cell>
      <Table.Cell>Cell Two</Table.Cell>
      <Table.Cell>Cell Three</Table.Cell>
      <Table.Cell>Cell Four</Table.Cell>
      <Table.Cell>Cell Dive</Table.Cell>
    </Table.Row>
  </Table.Table>
)

export const TableRow = Row.bind({})

TableRow.args = {
  isActive: true,
}

const Body: Story = (args) => (
  <Table.Table>
    <Table.Body {...args}>
      <Table.Row>
        <Table.Cell>Cell one</Table.Cell>
        <Table.Cell>Cell Two</Table.Cell>
        <Table.Cell>Cell Three</Table.Cell>
        <Table.Cell>Cell Four</Table.Cell>
        <Table.Cell>Cell Dive</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Cell one</Table.Cell>
        <Table.Cell>Cell Two</Table.Cell>
        <Table.Cell>Cell Three</Table.Cell>
        <Table.Cell>Cell Four</Table.Cell>
        <Table.Cell>Cell Dive</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Cell one</Table.Cell>
        <Table.Cell>Cell Two</Table.Cell>
        <Table.Cell>Cell Three</Table.Cell>
        <Table.Cell>Cell Four</Table.Cell>
        <Table.Cell>Cell Dive</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Cell one</Table.Cell>
        <Table.Cell>Cell Two</Table.Cell>
        <Table.Cell>Cell Three</Table.Cell>
        <Table.Cell>Cell Four</Table.Cell>
        <Table.Cell>Cell Dive</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table.Table>
)

export const TableBody = Body.bind({})

TableBody.args = {
  isStriped: true,
  isHoverable: false,
}

const Cell: Story = (args) => (
  <Table.Table>
    <Table.Row>
      <Table.Cell {...args}>Header Cell one</Table.Cell>
    </Table.Row>
  </Table.Table>
)

export const TableCell = Cell.bind({})

TableCell.args = {
  textAlign: 'right',
  isTableHead: false,
}
