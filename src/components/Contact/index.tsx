import { useEffect, useState } from 'react'
import { FiCheck, FiCopy, FiGithub } from 'react-icons/fi'

import * as S from './styles'
import { FaLinkedinIn } from 'react-icons/fa'

const Contact = () => {
  const [copied, setCopied] = useState(false)

  // volta o botão ao normal depois de 2 segundos
  useEffect(() => {
    if (!copied) return

    const timer = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(timer)
  }, [copied])

  //função assíncrona para usar o await no meio dela
  const email = 'a.martiins.am@gmail.com'
  const copyEmail = async () => {
    try {
      //API do navegador que solicita cópia do texto do email
      await navigator.clipboard.writeText(email)
      setCopied(true)
    } catch (error) {
      // sem permissão para copiar: o link "Enviar e-mail" continua disponível
      console.warn('Não foi possível copiar o e-mail', error)
    }
  }

  return (
    <S.Section id="contato">
      <S.Title>
        Boas ideias começam com um oi
        <span>.</span>
      </S.Title>

      <S.Text>Se quiser trocar uma ideia, entre em contato:</S.Text>

      <S.Actions>
        <S.CopyButton type="button" onClick={copyEmail} aria-live="polite">
          {copied ? <FiCheck size={18} /> : <FiCopy size={18} />}
          {copied ? 'E-mail copiado' : email}
        </S.CopyButton>

        <a
          href="https://github.com/aarielmartins"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/aarielmartins/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn /> LinkedIn
        </a>
      </S.Actions>
    </S.Section>
  )
}

export default Contact
