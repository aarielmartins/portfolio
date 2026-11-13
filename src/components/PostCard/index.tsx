import { useEffect, useId, useRef, useState } from 'react'
import type { MouseEvent } from 'react'
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
  video?: string
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
  video,
  technologies,
  love = 0,
  likes = 0,
  fire = 0,
  projectUrl,
  githubUrl,
  comments = []
}: PostCardProps) => {
  const [showComments, setShowComments] = useState(false)
  const [selected, setSelected] = useState<ReactionKey | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)
  const commentsId = useId()
  const manuallyPaused = useRef(false)

  const togglePlay = () => {
    const videoElement = videoRef.current

    if (!videoElement) return

    if (videoElement.paused) {
      manuallyPaused.current = false

      videoElement.play().catch((error) => {
        console.warn('Erro ao reproduzir vídeo:', error)
      })
    } else {
      manuallyPaused.current = true
      videoElement.pause()
    }
  }

  const handleSeek = (value: number) => {
    const videoElement = videoRef.current

    if (!videoElement) return

    videoElement.currentTime = value
    setCurrentTime(value)
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)

    return `${minutes}:${String(seconds).padStart(2, '0')}`
  }

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

  useEffect(() => {
    const videoElement = videoRef.current

    if (!videoElement) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!manuallyPaused.current) {
            videoElement.play().catch((error) => {
              console.warn('Erro ao reproduzir vídeo:', error)
            })
          }
        } else {
          videoElement.pause()
        }
      },
      {
        threshold: 0.5
      }
    )

    observer.observe(videoElement)

    return () => {
      observer.disconnect()
      videoElement.pause()
    }
  }, [video])

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

      {(image || video) && (
        <S.Cover>
          {video ? (
            <S.VideoContainer>
              <video
                ref={videoRef}
                src={video}
                muted
                loop
                playsInline
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onTimeUpdate={(e) =>
                  setCurrentTime(e.currentTarget.currentTime)
                }
                onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
                onClick={togglePlay}
              />

              {!isPlaying && (
                <S.PlayOverlay
                  onClick={togglePlay}
                  aria-label="Reproduzir vídeo"
                >
                  ▶
                </S.PlayOverlay>
              )}

              <S.VideoControls
                onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
              >
                <input
                  type="range"
                  min={0}
                  max={duration || 0}
                  step={0.1}
                  value={currentTime}
                  onChange={(e) => handleSeek(Number(e.target.value))}
                  aria-label="Progresso do vídeo"
                />
              </S.VideoControls>
            </S.VideoContainer>
          ) : (
            <a
              href={projectUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Ver projeto"
            >
              <img src={image} alt={title} />
            </a>
          )}
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
