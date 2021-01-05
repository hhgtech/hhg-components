import React, { Fragment, useMemo } from 'react'

import { useId } from 'react-id-generator'

import { Dropdown } from '../../molecules/dropdown'
import {
  StyledBreadcrumb,
  StyledTextLink,
  // StyledLink,
  StyledSeperator,
} from './index.styled'

type Page = {
  label: string
  value: string
  active?: boolean
}

export type Props = {
  size: 'lg' | 'md' | 'sm'
  pages: Array<Page>
  className?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  LinkComponent?: React.ComponentType<any> | string
  onChangePage?: () => void
}

interface MappedPage extends Page {
  isDropdown?: boolean
  dropdownItems?: Array<Page>
}
export type BreadcrumbItemProps = {
  page: MappedPage
  isLast?: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  LinkComponent: React.ComponentType<any> | string
  onChangePage?: () => void
}

const BreadcrumbItem = ({
  LinkComponent,
  page,
  isLast,
  onChangePage,
}: BreadcrumbItemProps) => {
  const { label, value, isDropdown, dropdownItems } = page

  if (isDropdown) {
    return (
      <Dropdown
        options={dropdownItems}
        placeholder="..."
        id=""
        placeHolderIcon={null}
        onChange={onChangePage}
        className="collapsed-breadcrumb"
      />
    )
  }
  return (
    <StyledTextLink title={label} data-last={isLast}>
      {LinkComponent && (
        <LinkComponent href={value || '#'}>{label}</LinkComponent>
      )}
    </StyledTextLink>
  )
}

const Breadcrumbs = ({
  className,
  pages,
  size,
  LinkComponent = 'a',
  onChangePage,
}: Props) => {
  const mappedList: Array<MappedPage> = useMemo(
    () =>
      pages
        .map((item, index) => {
          if (pages.length > 4) {
            if (index > 1 && index < pages.length - 2) return null
            if (index === 1) {
              return {
                ...item,
                isDropdown: index === 1,
                dropdownItems: pages.slice(1, pages.length - 2),
              }
            }
            return item
          }
          return item
        })
        .filter(Boolean),
    [pages],
  )

  const idList = useId(mappedList.length)
  return (
    <StyledBreadcrumb data-size={size} className={className}>
      {mappedList.map((page, index) => {
        const isLast = index + 1 === mappedList.length
        return (
          <Fragment key={idList[index]}>
            <BreadcrumbItem
              LinkComponent={LinkComponent}
              page={page}
              isLast={isLast}
              onChangePage={onChangePage}
            />
            {!isLast && <StyledSeperator data-size={size} />}
          </Fragment>
        )
      })}
    </StyledBreadcrumb>
  )
}

export { Breadcrumbs }
