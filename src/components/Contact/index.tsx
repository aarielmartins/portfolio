import { useEffect, useState } from 'react'
import { FiArrowUpRight, FiCheck, FiCopy } from 'react-icons/fi'

import * as S from './styles'

export type ContactProps = {
  email: string
  eyebrow?: string
  title?: string
  text?: string
  note?: string
}

const Contact = ({
  email,
  eyebrow = 'Próximo capítulo',
  title = 'Boas ideias começam com um oi',
  text = 'Tem um projeto em mente ou quer trocar uma ideia?',
  note
}: ContactProps) => {
  const [copied, setCopied] = useState(false)

  // volta o botão ao normal depois de alguns segundos
  useEffect(() => {
    if (!copied) return

    const timer = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(timer)
  }, [copied])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
    } catch (error) {
      // sem permissão para copiar: o link "Enviar e-mail" continua disponível
      console.warn('Não foi possível copiar o e-mail', error)
    }
  }

  return (
    <S.Section id="contato">
      <S.Eyebrow>{eyebrow}</S.Eyebrow>

      <S.Title>
        {title}
        <span>.</span>
      </S.Title>

      <S.Text>{text}</S.Text>

      <S.Actions>
        <S.CopyButton type="button" onClick={copyEmail} aria-live="polite">
          {copied ? <FiCheck size={18} /> : <FiCopy size={18} />}
          {copied ? 'E-mail copiado' : email}
        </S.CopyButton>

        <S.MailLink href={`mailto:${email}`}>
          Enviar e-mail <FiArrowUpRight size={16} />
        </S.MailLink>
      </S.Actions>

      {note && <S.Note>{note}</S.Note>}
    </S.Section>
  )
}

export default Contact
