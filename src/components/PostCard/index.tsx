import { useState } from 'react'
import { FiArrowUpRight, FiGithub } from 'react-icons/fi'
import { HiOutlineCheckBadge } from 'react-icons/hi2'
import {
  IoFlame,
  IoFlameOutline,
  IoHeart,
  IoHeartOutline,
  IoThumbsUp,
  IoThumbsUpOutline
} from 'react-icons/io5'

import * as S from './styles'

export type PostCardProps = {
  author: string
  user: string
  initials: string
  avatarUrl?: string
  date: string
  category: string
  title: string
  description: string
  image?: string
  imageAlt?: string
  technologies: string[]
  love?: number
  likes?: number
  fire?: number
  projectUrl?: string
  githubUrl?: string
}

type ReactionKey = 'love' | 'likes' | 'fire'

const PostCard = ({
  author,
  user,
  initials,
  date,
  category,
  title,
  description,
  image,
  technologies,
  love = 0,
  likes = 0,
  fire = 0,
  projectUrl,
  githubUrl
}: PostCardProps) => {
  const [active, setActive] = useState<Record<ReactionKey, boolean>>({
    love: false,
    likes: false,
    fire: false
  })

  const toggle = (key: ReactionKey) =>
    setActive((prev) => ({ ...prev, [key]: !prev[key] }))

  const reactions = [
    {
      key: 'love',
      Icon: IoHeartOutline,
      ActiveIcon: IoHeart,
      label: 'Amei',
      base: love
    },
    {
      key: 'likes',
      Icon: IoThumbsUpOutline,
      ActiveIcon: IoThumbsUp,
      label: 'Curtir',
      base: likes
    },
    {
      key: 'fire',
      Icon: IoFlameOutline,
      ActiveIcon: IoFlame,
      label: 'Em chamas',
      base: fire
    }
  ] as const

  return (
    <S.Post>
      <S.Header>
        <S.Avatar>{initials}</S.Avatar>

        <S.Who>
          <strong>
            {author} <HiOutlineCheckBadge size={14} />
          </strong>
          <small>
            {user} · {date}
          </small>
        </S.Who>

        <S.Category>{category}</S.Category>
      </S.Header>

      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>

      {image && (
        <S.Cover>
          <img src={image} alt={title} />
        </S.Cover>
      )}

      <S.Tags>
        {technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </S.Tags>

      <S.Footer>
        <S.Actions>
          {reactions.map(({ key, Icon, ActiveIcon, label, base }) => {
            const Current = active[key] ? ActiveIcon : Icon

            return (
              <S.Reaction
                key={key}
                $active={active[key]}
                onClick={() => toggle(key)}
                aria-pressed={active[key]}
                aria-label={label}
              >
                <Current size={18} />
                {base + (active[key] ? 1 : 0)}
              </S.Reaction>
            )
          })}

          {githubUrl && (
            <S.IconLink
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Código no GitHub"
            >
              <FiGithub size={18} />
            </S.IconLink>
          )}
        </S.Actions>

        {projectUrl && (
          <S.ProjectLink
            href={projectUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Ver projeto"
          >
            Ver projeto <FiArrowUpRight size={16} />
          </S.ProjectLink>
        )}
      </S.Footer>
    </S.Post>
  )
}

export default PostCard
