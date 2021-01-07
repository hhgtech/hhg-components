import React, { useState } from 'react'

import { CSSProperties } from 'styled-components'

import { Button } from '../../atoms/button'
import { Label } from '../../atoms/label'
import { Text } from '../../atoms/text'
import { StyledCard, StyledAuthor } from './index.styled'

type BaseProps = {
  banner: string
  title: string
  styleLabel?: CSSProperties
  styleTitle?: CSSProperties
  text: string
  avatarImg: JSX.Element
  doctorName: string
  uploadTime: string
  isBookmark?: boolean
  hasButton?: boolean
  textButton?: string
  className?: string
}

interface Group1 extends BaseProps {
  type: 'group1'
  size: 'small' | 'large'
  label: string
  posterName?: string
}

interface Group2 extends BaseProps {
  type: 'group2'
  size?: never
  label?: never
  posterName: string
}

export type Props = Group1 | Group2

type CardAuthorProps = {
  type: 'group1' | 'group2'
  avatarImg: JSX.Element
  doctorName: string
  uploadTime: string
  posterName?: string
  handleClick: () => void
  isBookmarked: boolean
}

const CardAuthor = ({
  type,
  avatarImg,
  doctorName,
  posterName,
  uploadTime,
  handleClick,
  isBookmarked,
}: CardAuthorProps) => {
  return (
    <StyledAuthor data-type={type}>
      <div className="author" data-type={type}>
        <div className="avatar">{avatarImg}</div>
        <div className="poster">
          <p>
            {doctorName} • {`${posterName ? `${posterName} • ` : ''}`}
            <span>{uploadTime}</span>
          </p>
        </div>
      </div>
      {type === 'group1' ? (
        <div className="bookmark" onClick={handleClick}>
          {!isBookmarked ? (
            <svg
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 15L7 11.1111L1 15V2.55556C1 2.143 1.18061 1.74733 1.5021 1.45561C1.82359 1.16389 2.25963 1 2.71429 1H11.2857C11.7404 1 12.1764 1.16389 12.4979 1.45561C12.8194 1.74733 13 2.143 13 2.55556V15Z"
                stroke="#404040"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 15L7 11.1111L1 15V2.55556C1 2.143 1.18061 1.74733 1.5021 1.45561C1.82359 1.16389 2.25963 1 2.71429 1H11.2857C11.7404 1 12.1764 1.16389 12.4979 1.45561C12.8194 1.74733 13 2.143 13 2.55556V15Z"
                fill="#2D87F3"
                stroke="#2D87F3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      ) : (
        []
      )}
    </StyledAuthor>
  )
}

const ArticleCard = ({
  type,
  banner,
  size = 'large',
  label,
  styleLabel,
  title,
  styleTitle,
  text,
  avatarImg,
  doctorName,
  posterName,
  uploadTime,
  isBookmark = false,
  hasButton = false,
  textButton,
  className,
}: Props) => {
  const [isBookmarked, setisBookmarked] = useState(isBookmark)

  const handleClick = () => {
    setisBookmarked(!isBookmarked)
  }

  return (
    <StyledCard className={className} data-size={size} data-type={type}>
      <div className="banner">
        <img src={banner} />
      </div>
      <div className="content">
        <div className="new">
          <Text style={styleLabel} className="label" size="sm" type="caption">
            {label}
          </Text>
          <Text
            style={styleTitle}
            className="title"
            size={type === 'group1' ? 'md' : 'lg'}
            type="bold"
          >
            {title}
          </Text>
          {type === 'group2' ? (
            <CardAuthor
              type={type}
              avatarImg={avatarImg}
              doctorName={doctorName}
              posterName={posterName}
              uploadTime={uploadTime}
              handleClick={handleClick}
              isBookmarked={isBookmarked}
            />
          ) : (
            []
          )}
          <Label className="text">{text}</Label>
        </div>
        <div className="footer">
          {hasButton || type === 'group2' ? (
            <Button size="md">{textButton}</Button>
          ) : (
            <CardAuthor
              type={type}
              avatarImg={avatarImg}
              doctorName={doctorName}
              posterName={posterName}
              uploadTime={uploadTime}
              handleClick={handleClick}
              isBookmarked={isBookmarked}
            />
          )}
        </div>
      </div>
    </StyledCard>
  )
}

export { ArticleCard }
