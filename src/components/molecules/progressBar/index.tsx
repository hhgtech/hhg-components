import React, { useState, useEffect, useCallback } from 'react'

import { throttle } from 'lodash'
import { useId } from 'react-id-generator'

import {
  StyledTrackContainer,
  StyledStep,
  StyledSlider,
  StyledTrack,
  StyledStepLabel,
  StyledBreadcrumbContainer,
  StyledBreadcrumbWrapper,
  StyledDetailStep,
  StyledDetailStepLabel,
  StyledDetailStepIndicator,
  StyledDetailStepIndicatorExternal,
  StyledDetailStepDescription,
} from './index.styled'

export type Props = {
  type: 'breadcrumb' | 'step-track' | 'detail-track'
  numberOfStep: number
  activeStep: number
  labelPrefix: string
  detailSteps?: { text: string; icon: JSX.Element; description: string }[]
  onChange?: (s: number) => void
  className?: string
  isMobile?: boolean
}

const ProgressBar = ({
  type,
  numberOfStep,
  activeStep,
  labelPrefix,
  detailSteps,
  className,
  onChange,
}: Props) => {
  const [trackLength, setTrackLength] = useState(0)

  const Track = ({ ...props }: { trackClassName: string }) => {
    return (
      <StyledTrackContainer {...props} className={props.trackClassName}>
        <StyledTrack></StyledTrack>
      </StyledTrackContainer>
    )
  }

  // step track

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
    return (
      <>
        {Array.from({ length: numberOfStep }, (v, i) => i).map((_, step) => (
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
            <StyledStepLabel data-step-passed={step <= activeStep}>
              {labelPrefix + ' ' + (step + 1)}
            </StyledStepLabel>
          </StyledStep>
        ))}
      </>
    )
  }

  const stepTrack = (
    <StyledSlider className={className + ' progress-bar'}>
      <Track />
      <Steps
        trackLength={trackLength}
        activeStep={activeStep}
        labelPrefix={labelPrefix}
        onChange={onChange}
      />
    </StyledSlider>
  )

  // breadcrumb

  const breadcrumbIcon = (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 5.5 9.5"
    >
      <title>{'chevron-right'}</title>
      <path
        d="M.75 8.75l4-4-4-4"
        fill="none"
        // stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  )

  const breadcrumb = (
    <StyledBreadcrumbContainer>
      {detailSteps &&
        Array.from({ length: detailSteps.length }, (v, i) => i).map(
          (_, step_index) => (
            <StyledBreadcrumbWrapper
              key={step_index}
              data-selected={step_index === activeStep}
              onClick={() => {
                onChange && onChange(step_index)
              }}
            >
              {detailSteps[step_index]?.text}{' '}
              {step_index < detailSteps.length - 1 && breadcrumbIcon}
            </StyledBreadcrumbWrapper>
          ),
        )}
    </StyledBreadcrumbContainer>
  )

  // detail track

  const DetailStepsGroup = ({
    detailSteps,
    activeStep,
    onChange,
  }: {
    detailSteps: { text: string; icon: JSX.Element; description: string }[]
    activeStep: number
    onChange: (s: number) => void
  }) => {
    const idList = useId(detailSteps.length)
    return (
      <>
        {Array.from({ length: detailSteps.length }, (v, i) => i).map(
          (step, step_index) => (
            <StyledDetailStep
              key={idList[step_index]}
              style={{
                left: (100 / detailSteps.length) * step_index + '%',
                width: 100 / detailSteps.length + '%',
              }}
              onClick={() => {
                onChange && onChange(step_index)
              }}
            >
              {detailSteps[step_index].icon ? (
                <StyledDetailStepIndicatorExternal
                  onClick={() => {
                    onChange && onChange(step_index)
                  }}
                >
                  {detailSteps[step_index].icon}
                </StyledDetailStepIndicatorExternal>
              ) : (
                <StyledDetailStepIndicator
                  data-is-active={step_index === activeStep}
                  data-label={step}
                  onClick={() => {
                    onChange && onChange(step_index)
                  }}
                  key={step_index}
                >
                  {step_index + 1}
                </StyledDetailStepIndicator>
              )}
              <StyledDetailStepLabel
                data-step-passed={step_index < activeStep + 1}
              >
                {detailSteps[step_index].text}
                <StyledDetailStepDescription>
                  {detailSteps[step_index].description}
                </StyledDetailStepDescription>
              </StyledDetailStepLabel>
              {step_index < detailSteps.length - 1 && (
                <Track
                  data-step-passed={step_index < activeStep}
                  trackClassName={'progress-track'}
                  data-track-type="detail"
                />
              )}
            </StyledDetailStep>
          ),
        )}
      </>
    )
  }

  const detailTrack = (
    <StyledSlider className={className + ' progress-bar'}>
      <DetailStepsGroup
        activeStep={activeStep}
        detailSteps={detailSteps}
        onChange={onChange}
      />
    </StyledSlider>
  )

  const resizeTrack = useCallback(
    throttle(() => {
      const progressTrack = document.querySelector(
        '.progress-bar',
      ) as HTMLElement

      progressTrack && setTrackLength(progressTrack.offsetWidth)
    }, 1000),
    [],
  )

  useEffect(() => {
    const track = document.querySelector('.progress-bar') as HTMLElement
    setTrackLength(track?.offsetWidth)

    window.addEventListener('resize', resizeTrack)

    return () => {
      window.removeEventListener('resize', resizeTrack)
    }
  }, [])

  return (
    (type === 'step-track' && stepTrack) ||
    (type === 'breadcrumb' && breadcrumb) ||
    (type === 'detail-track' && detailTrack)
  )
}

export { ProgressBar }
