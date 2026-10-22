import { useState } from 'react'
import {
  FiArrowUpRight,
  FiCheckCircle,
  FiGithub,
  FiHeart,
  FiShare2
} from 'react-icons/fi'
import { IoFlameOutline, IoSparklesOutline } from 'react-icons/io5'

import * as S from './styles'

export type PostCardProps = {
  author: string
  handle: string
  initials: string
  avatarUrl?: string
  date: string
  category: string
  title: string
  description: string
  image?: string
  imageAlt?: string
  technologies: string[]
  likes?: number
  fires?: number
  sparks?: number
  projectUrl?: string
  githubUrl?: string
}

type ReactionKey = 'likes' | 'fires' | 'sparks'

const PostCard = ({
  author,
  handle,
  initials,
  avatarUrl,
  date,
  category,
  title,
  description,
  image,
  imageAlt,
  technologies,
  likes = 0,
  fires = 0,
  sparks = 0,
  projectUrl,
  githubUrl
}: PostCardProps) => {
  const [active, setActive] = useState<Record<ReactionKey, boolean>>({
    likes: false,
    fires: false,
    sparks: false
  })

  const toggle = (key: ReactionKey) =>
    setActive((prev) => ({ ...prev, [key]: !prev[key] }))

  const reactions = [
    { key: 'likes', Icon: FiHeart, label: 'Curtir', base: likes },
    { key: 'fires', Icon: IoFlameOutline, label: 'Em chamas', base: fires },
    { key: 'sparks', Icon: IoSparklesOutline, label: 'Incrível', base: sparks }
  ] as const

  const share = async () => {
    const url = projectUrl ?? githubUrl
    if (!url) return

    try {
      if (navigator.share) {
        await navigator.share({ title, url })
      } else {
        await navigator.clipboard?.writeText(url)
      }
    } catch (error) {
      // o usuário fechou o menu de compartilhar, então não há o que tratar
      console.warn('Compartilhamento cancelado', error)
    }
  }

  return (
    <S.Post>
      <S.Header>
        <S.Avatar>
          {avatarUrl ? <img src={avatarUrl} alt={author} /> : initials}
        </S.Avatar>

        <S.Who>
          <strong>
            {author} <FiCheckCircle size={14} />
          </strong>
          <small>
            {handle} · {date}
          </small>
        </S.Who>

        <S.Category>{category}</S.Category>
      </S.Header>

      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>

      {image && (
        <S.Cover>
          <img src={image} alt={imageAlt ?? `Prévia do projeto ${title}`} />
        </S.Cover>
      )}

      <S.Tags>
        {technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </S.Tags>

      <S.Footer>
        <S.Actions>
          {reactions.map(({ key, Icon, label, base }) => (
            <S.Reaction
              key={key}
              $active={active[key]}
              onClick={() => toggle(key)}
              aria-pressed={active[key]}
              aria-label={label}
            >
              <Icon size={18} />
              {base + (active[key] ? 1 : 0)}
            </S.Reaction>
          ))}

          <S.IconButton onClick={share} aria-label="Compartilhar">
            <FiShare2 size={18} />
          </S.IconButton>

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
          <S.ProjectLink href={projectUrl} target="_blank" rel="noreferrer">
            Ver projeto <FiArrowUpRight size={16} />
          </S.ProjectLink>
        )}
      </S.Footer>
    </S.Post>
  )
}

export default PostCard
