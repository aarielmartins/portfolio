import { useId, useState } from 'react'
import { FiArrowUpRight, FiGithub } from 'react-icons/fi'
import { HiOutlineCheckBadge } from 'react-icons/hi2'
import {
  IoChatbubble,
  IoChatbubbleOutline,
  IoFlame,
  IoFlameOutline,
  IoHeart,
  IoHeartOutline,
  IoThumbsUp,
  IoThumbsUpOutline
} from 'react-icons/io5'

import * as S from './styles'

export type PostComment = {
  id: string | number
  author: string
  initials: string
  date: string
  text: string
}

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
  comments?: PostComment[]
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
  githubUrl,
  comments = []
}: PostCardProps) => {
  const [showComments, setShowComments] = useState(false)
  const commentsId = useId()
  const [selected, setSelected] = useState<ReactionKey | null>(null)

  const toggle = (key: ReactionKey) =>
    setSelected((prev) => (prev === key ? null : key))

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
      label: 'Irado',
      base: fire
    }
  ] as const

  const CommentsIcon = showComments ? IoChatbubble : IoChatbubbleOutline

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
          <a
            href={projectUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Ver projeto"
          >
            <img src={image} alt={title} />
          </a>
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
            const isActive = selected === key
            const Current = isActive ? ActiveIcon : Icon

            return (
              <S.Reaction
                key={key}
                $active={isActive}
                onClick={() => toggle(key)}
                aria-pressed={isActive}
                aria-label={label}
              >
                <Current size={18} />
                {base + (isActive ? 1 : 0)}
              </S.Reaction>
            )
          })}

          {comments.length > 0 && (
            <S.CommentsButton
              $active={showComments}
              onClick={() => setShowComments((v) => !v)}
              aria-expanded={showComments}
              aria-controls={commentsId}
              aria-label={
                showComments ? 'Ocultar comentários' : 'Ver comentários'
              }
            >
              <CommentsIcon size={18} />
              {comments.length}
            </S.CommentsButton>
          )}

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

      {showComments && comments.length > 0 && (
        <S.Comments id={commentsId}>
          <S.CommentList>
            {comments.map((comment) => (
              <S.Comment key={comment.id}>
                <S.CommentAvatar>{comment.initials}</S.CommentAvatar>

                <S.CommentBubble>
                  <S.CommentHeader>
                    <strong>{comment.author}</strong>
                    <small>· {comment.date}</small>
                  </S.CommentHeader>
                  <p>{comment.text}</p>
                </S.CommentBubble>
              </S.Comment>
            ))}
          </S.CommentList>
        </S.Comments>
      )}
    </S.Post>
  )
}

export default PostCard
