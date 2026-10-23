import trama from '../assets/images/trama.jpg'

export const posts = [
  {
    id: 'trama',
    author: 'Ariel Martins',
    user: '@aarielmartins',
    initials: 'am',
    date: '02 out. 2026',
    category: 'Frontend',
    title: 'Trama — e-commerce de ponta a ponta.',
    description:
      'Loja virtual com catálogo, carrinho e API própria, feita com React, TypeScript e Redux Toolkit.',
    image: trama,
    technologies: ['React', 'TypeScript', 'Redux Toolkit', 'Styled-Components'],
    love: 48,
    likes: 12,
    fire: 8,
    projectUrl: 'https://projeto-virtual-store.vercel.app/',
    githubUrl: 'https://github.com/aarielmartins/Projeto---Virtual_Store',
    comments: [
      {
        id: 1,
        author: 'Júlia Prado',
        initials: 'jp',
        date: '1sem',
        text: 'Já quero jogar isso 👀'
      },
      {
        id: 1,
        author: 'Júlia Prado',
        initials: 'jp',
        date: '1sem',
        text: 'Muito bacana!'
      }
    ]
  },
  {
    id: 'trama',
    author: 'Ariel Martins',
    user: '@aarielmartins',
    initials: 'am',
    date: '02 out. 2026',
    category: 'Frontend',
    title: 'Trama — e-commerce de ponta a ponta.',
    description:
      'Loja virtual com catálogo, carrinho e API própria, feita com React, TypeScript e Redux Toolkit.',
    image: trama,
    technologies: ['React', 'TypeScript', 'Redux Toolkit', 'Styled-Components'],
    love: 48,
    likes: 12,
    fire: 8,
    projectUrl: 'https://projeto-virtual-store.vercel.app/',
    githubUrl: 'https://github.com/aarielmartins/Projeto---Virtual_Store',
    comments: [
      {
        id: 1,
        author: 'Júlia Prado',
        initials: 'jp',
        date: '1sem',
        text: 'Já quero jogar isso 👀'
      },
      {
        id: 1,
        author: 'Júlia Prado',
        initials: 'jp',
        date: '1sem',
        text: 'Muito bacana!'
      }
    ]
  }
]

import { CareerProps } from '../components/Career'

export const career: CareerProps = {
  experience: [
    {
      title: 'Modelista 3D de imagens',
      place: 'Domus Arquitetura Digital',
      period: '2019 — atual',
      description:
        'Modelagem 3D e produção de imagens para projetos de arquitetura, no Rio de Janeiro.'
    }
  ],
  education: [
    {
      title: 'Full Stack Python',
      place: 'EBAC',
      period: '2026',
      description:
        'Curso de desenvolvimento Full Stack com Python, concluído em maio de 2026.'
    },
    {
      title: 'Bacharelado em Arquitetura e Urbanismo',
      place: 'UFMS',
      period: '2018',
      description:
        'Formação em projeto, espaço e representação, que hoje inspira meu olhar para interfaces.'
    }
  ]
}
