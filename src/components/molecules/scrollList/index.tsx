import React, {
  ReactElement,
  ReactNode,
  useRef,
  useState,
  useCallback,
} from 'react'

import { throttle } from 'lodash'

import { StyledScrollList } from './index.styled'

export type Props = {
  row: 1 | 2 | 3
  column: 1 | 2 | 3
  children: ReactNode
  className?: string
}

export const ScrollList = ({
  row = 2,
  column = 3,
  children,
  className,
}: Props) => {
  const [onSection, setOnSection] = useState(0)

  //Create groups
  const groups = []
  React.Children.map(children, (element: ReactElement, idx) => {
    if (idx % (row * column) === 0) {
      groups.push([])
    }
    groups[groups.length - 1].push(React.cloneElement(element))
  })

  const refs = []
  groups.forEach((group, index) => {
    refs[index] = useRef(null)
  })

  const handleClick = (index) => {
    refs[index].current.scrollIntoView({
      behavior: 'smooth',
    })

    setOnSection(index)
  }

  const scrollRef = useRef<HTMLDivElement>()

  const handleScroll = () => {
    if (!scrollRef.current) return
    const { clientWidth, scrollLeft } = scrollRef.current
    const page = Math.floor(scrollLeft / clientWidth)

    setOnSection((oldOnSection) => {
      if (page != oldOnSection) {
        return page
      }
      return oldOnSection
    })
  }

  const handleScrollThrottle = useCallback(throttle(handleScroll, 200), [])

  return (
    <StyledScrollList className={className} data-row={row}>
      <div
        ref={scrollRef}
        className="container"
        onScroll={handleScrollThrottle}
      >
        {groups.map((group, groupIndex) => {
          return (
            <div key={groupIndex} ref={refs[groupIndex]} className="section">
              <div
                className="grid-layout"
                data-index={groupIndex}
                style={{
                  gridTemplateColumns: `repeat(${column}, calc(100% / ${column}))`,
                  gridTemplateRows: `repeat(${row}, auto)`,
                }}
              >
                {group.map((item, itemIndex) => (
                  <React.Fragment key={itemIndex}>
                    <div className="item-grid" key={itemIndex}>
                      {item}
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      <ul className="bullet-nav">
        {groups.map((group, index) => (
          <li key={index} className="bullet-nav__item ">
            <p
              onClick={() => handleClick(index)}
              className={`bullet-nav__link scroll ${
                onSection == index ? 'active' : null
              }`}
            ></p>
          </li>
        ))}
      </ul>
    </StyledScrollList>
  )
}
