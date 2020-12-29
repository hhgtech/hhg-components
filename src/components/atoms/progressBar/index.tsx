import React, { useState, useEffect, useCallback } from 'react'

import _ from 'lodash'

import {
  StyledTrackContainer,
  StyledStep,
  StyledSlider,
  StyledTrack,
  StyledStepLabel,
} from './index.styled'

export type Props = {
  numberOfStep: number
  activeStep: number
  labelPrefix: string
  onChange?: (s: number) => void
  className?: string
  isMobile?: boolean
}

const ProgressBar = ({
  numberOfStep,
  activeStep,
  labelPrefix,
  className,
  onChange,
}: Props) => {
  const [trackLength, setTrackLength] = useState(0)

  const Track = ({ trackClassName }: { trackClassName: string }) => {
    return (
      <StyledTrackContainer className={trackClassName}>
        <StyledTrack></StyledTrack>
      </StyledTrackContainer>
    )
  }

  const Steps = ({
    trackLength,
    activeStep,
    labelPrefix = 'Step',
    onChange,
  }: {
    trackLength: number
    activeStep: number
    labelPrefix?: string
    onChange: (s: number) => void
  }) => {
    const steps = []
    for (let step = 0; step < numberOfStep; step++) {
      steps.push(
        <StyledStep
          data-is-active={step === activeStep}
          data-label={step}
          style={{ left: (step * trackLength) / (numberOfStep - 1) }}
          onClick={() => {
            onChange && onChange(step)
          }}
          key={step}
        >
          {step + 1}
          <StyledStepLabel>{labelPrefix + ' ' + (step + 1)}</StyledStepLabel>
        </StyledStep>,
      )
    }

    return <>{steps}</>
  }

  const resizeTrack = useCallback(
    _.throttle(() => {
      const progressTrack = document.querySelector(
        '.progress-track',
      ) as HTMLElement

      progressTrack && setTrackLength(progressTrack.offsetWidth)
    }, 1000),
    [],
  )

  useEffect(() => {
    const track = document.querySelector('.progress-track') as HTMLElement
    setTrackLength(track.offsetWidth)

    window.addEventListener('resize', resizeTrack)

    return () => {
      window.removeEventListener('resize', resizeTrack)
    }
  }, [])

  return (
    <StyledSlider className={className}>
      <Track trackClassName={'progress-track'} />
      <Steps
        trackLength={trackLength}
        activeStep={activeStep}
        labelPrefix={labelPrefix}
        onChange={onChange}
      />
    </StyledSlider>
  )
}

export { ProgressBar }
