import React, { FC } from 'react'
import Style from './style.module.scss'
import { Episode } from '../../types'

interface IProps {
  Episode: Episode,
  Max?: boolean
}

export const Card: FC<IProps> = ({ Episode, Max }: IProps) => {
  return (
    <div
      onClick={() => { window.location.href = Episode.link }}
      className={Max ? Style.MaxCard : Style.Card}>
      <img alt={Style.Title} src={Episode.image} />

      <div className={Style.Attribute}>
        <div className={Style.Title}>
          { Episode.title }
        </div>

        <div className={Style.Description}
          dangerouslySetInnerHTML={{__html: Episode.description}} >
        </div>

        <div>
          { Episode.date }
        </div>
      </div>

    </div>
  )
}