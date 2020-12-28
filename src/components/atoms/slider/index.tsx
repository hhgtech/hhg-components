import React, { CSSProperties, useState, useEffect } from 'react'

import { Text } from 'components/atoms'
import {
  StyledTrackContainer,
  StyledDot,
  StyledSlider,
  StyledThumb,
  StyledTrack,
  StyledLabel,
} from './index.styled'

import { Range, getTrackBackground, useThumbOverlap } from 'react-range'

export type Props = {
  step: number
  // min and max comes from api and don't change during the process
  min: number
  max: number
  value: Array<number>
  onChange: (v: Array<number>) => void
  className?: string
  heading?: string
  isMobile?: boolean
}

function ThumbLabel({
  rangeRef,
  values,
  index,
}: {
  rangeRef: Range | null
  values: number[]
  index: number
  isMobile?: boolean
}) {
  const [labelValue, labelStyle] = useThumbOverlap(
    rangeRef,
    values,
    index,
    1,
    ' - ',
    (value) => value,
  )

  return (
    <>
      <StyledLabel data-label={index} style={labelStyle as CSSProperties}>
        {labelValue}
      </StyledLabel>
      <StyledDot data-label={index}></StyledDot>
    </>
  )
}

const Slider = ({
  step,
  min,
  max,
  value,
  onChange,
  className,
  heading,
  isMobile = false,
}: Props) => {
  const COLORS = ['#DBDFE5', '#2D87F3', '#DBDFE5']

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const rangeRef: any = React.useRef()
  const [localValue, setLocalValue] = useState(value)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Thumb = ({ props, index }: any) => {
    return (
      <StyledThumb {...props}>
        <ThumbLabel
          rangeRef={rangeRef.current}
          values={localValue}
          index={index}
          isMobile={isMobile}
        />
      </StyledThumb>
    )
  }

  useEffect(() => {
    setLocalValue(value)
  }, [value[0], value[1]])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Track = ({ props, children }: any) => {
    const trackStyles = {
      background: getTrackBackground({
        values: localValue,
        colors: COLORS,
        min,
        max,
      }),
    }

    return (
      <>
        {heading && (
          <Text size="md" type="bold">
            {heading}
          </Text>
        )}
        <StyledTrackContainer
          onMouseDown={props.onMouseDown}
          onTouchStart={props.onTouchStart}
          style={{ ...props.style }}
        >
          <StyledTrack ref={props.ref} style={trackStyles}>
            {children}
          </StyledTrack>
        </StyledTrackContainer>
      </>
    )
  }

  return (
    <StyledSlider className={className}>
      <Range
        ref={rangeRef}
        values={
          localValue[0] >= min && localValue[1] <= max ? localValue : [min, max]
        }
        onChange={setLocalValue}
        onFinalChange={onChange}
        renderThumb={Thumb}
        renderTrack={Track}
        step={step}
        min={min}
        max={max}
      />
    </StyledSlider>
  )
}

export { Slider }
