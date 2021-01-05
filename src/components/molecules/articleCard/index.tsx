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
  isPin: boolean
}

const CardAuthor = ({
  type,
  avatarImg,
  doctorName,
  posterName,
  uploadTime,
  handleClick,
  isPin,
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
          {isPin ? (
            <img src={require('./bookmarked.png')} alt="bookmarked" />
          ) : (
            <img src={require('./bookmark.png')} alt="bookmark" />
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
  const [isPin, setIsPin] = useState(isBookmark)

  const handleClick = () => {
    setIsPin(!isPin)
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
              isPin={isPin}
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
              isPin={isPin}
            />
          )}
        </div>
      </div>
    </StyledCard>
  )
}

export { ArticleCard }
