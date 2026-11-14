import trama from '../assets/images/trama.jpg'
import contatos from '../assets/images/contatos.jpg'
import imc from '../assets/images/imc.jpg'
import efood from '../assets/images/efood.jpg'
import disney from '../assets/images/disney.jpg'

export const posts = [
  {
    id: 'trama',
    author: 'Ariel Martins',
    user: '@arielmartinss',
    initials: 'am',
    date: '06 out. 2026',
    category: 'Frontend',
    title: 'Trama — e-commerce virtual',
    description:
      'Loja virtual de roupas e mobiliário com fluxo completo de compra: catálogo por coleção, página de produto, carrinho global, checkout com formulário validado e API REST própria. Construída com React, TypeScript e Redux Toolkit, com testes automatizados e deploy em produção.',
    image: trama,
    video: '/videos/trama-video.mp4',
    technologies: [
      'React',
      'TypeScript',
      'Redux Toolkit',
      'RTK Query',
      'React Router',
      'Styled-Components',
      'Formik',
      'Yup',
      'React IMask',
      'Jest',
      'React Testing Library',
      'JSON Server',
      'REST API',
      'Vercel',
      'Render',
      'Cloudinary'
    ],
    love: 48,
    likes: 57,
    fire: 30,
    projectUrl: 'https://projeto-virtual-store.vercel.app/',
    githubUrl: 'https://github.com/aarielmartins/Projeto---Virtual_Store',
    comments: [
      {
        id: 1,
        author: 'Mãe',
        initials: 'ma',
        date: '1 semana',
        text: 'Adorei a gama de tamanhos! Os produtos são lindos, queria comprar na vida real 👀.'
      },
      {
        id: 1,
        author: 'Guto',
        initials: 'al',
        date: '2 semanas',
        text: 'Muito bacana. O trabalho duro valeu a pena, parabéns!'
      }
    ]
  },
  {
    id: 'efood',
    author: 'Ariel Martins',
    user: '@arielmartinss',
    initials: 'am',
    date: '30 ago. 2025',
    category: 'Frontend',
    title: 'E-food — plataforma de pedidos de restaurantes',
    description:
      'Plataforma web de pedidos de restaurantes, inspirada em aplicações como o iFood. Permite visualizar restaurantes e seus respectivos pratos, adicionar e remover produtos do carrinho, controlar quantidades e calcular o valor total do pedido. Conta com formulário de checkout com validação, consumo de API REST e tela de confirmação do pedido. Desenvolvida com React e TypeScript, utilizando Redux Toolkit para gerenciamento de estado global e Styled Components para estilização.',
    image: efood,
    video: '/videos/efood-video.mp4',
    technologies: [
      'React',
      'TypeScript',
      'Redux Toolkit',
      'React Router',
      'Formik',
      'Yup',
      'Styled Components',
      'HTML',
      'CSS',
      'Vercel'
    ],
    love: 40,
    likes: 35,
    fire: 17,
    projectUrl: 'https://projeto-e-food-murex.vercel.app/',
    githubUrl: 'https://github.com/aarielmartins/Projeto---E-food',
    comments: [
      {
        id: 1,
        author: 'Guto',
        initials: 'al',
        date: '7 meses',
        text: 'Fiquei até com fome hahaha.'
      }
    ]
  },
  {
    id: 'contatos',
    author: 'Ariel Martins',
    user: '@arielmartinss',
    initials: 'am',
    date: '26 mai. 2025',
    category: 'Frontend',
    title: 'Lista de contatos online',
    description:
      'Aplicação web para gerenciamento de contatos, desenvolvida como exercício prático de React. Permite cadastrar e editar contatos, classificá-los por tipo (Amigo, Trabalho, Família ou Outro) e utiliza máscara automática para números de telefone. O projeto explora conceitos de componentização, gerenciamento de estados globais e locais, eventos e navegação entre páginas.',
    image: contatos,
    technologies: [
      'React',
      'TypeScript',
      'Redux',
      'Styled Components',
      'React Router DOM',
      'ESLint',
      'Prettier'
    ],
    love: 28,
    likes: 20,
    fire: 6,
    projectUrl: 'https://projeto-lista-contatos-beryl.vercel.app/',
    githubUrl: 'https://github.com/aarielmartins/Projeto---Lista_Contatos',
    comments: [
      {
        id: 1,
        author: 'Júlia Prado',
        initials: 'jp',
        date: '9 meses',
        text: 'Simples, rápido e com um design lindooo. ✨'
      }
    ]
  },
  {
    id: 'imc',
    author: 'Ariel Martins',
    user: '@arielmartinss',
    initials: 'am',
    date: '21 mar. 2025',
    category: 'Frontend',
    title: 'Calculadora IMC — índice de massa corporal',
    description:
      'Aplicação web desenvolvida com React, como exercício prático de componentização, gerenciamento de estados e manipulação de eventos. O projeto utiliza componentes independentes para estruturar a interface e React Hooks para trabalhar com estados, explorando a construção de uma aplicação interativa com Vite.',
    image: imc,
    technologies: ['React', 'JavaScript', 'Vite', 'HTML', 'CSS'],
    love: 15,
    likes: 15,
    fire: 10,
    projectUrl: 'https://projeto-calculadora-imc-omega.vercel.app/',
    githubUrl: 'https://github.com/aarielmartins/Projeto---Calculadora_IMC',
    comments: [
      {
        id: 1,
        author: 'Lilian Freitas',
        initials: 'lf',
        date: '2 anos',
        text: 'Calculou certinho o meu IMC! 😄'
      }
    ]
  },
  {
    id: 'disney',
    author: 'Ariel Martins',
    user: '@arielmartinss',
    initials: 'am',
    date: '27 dez. 2024',
    category: 'Frontend',
    title: 'Disney — plataforma de streaming',
    description:
      'Reprodução da página inicial do Disney+, desenvolvida com HTML, CSS, JavaScript e Sass. O projeto apresenta uma interface inspirada na plataforma original, com seções de planos de assinatura, catálogo de conteúdos, dispositivos compatíveis e perguntas frequentes. Conta com navegação entre categorias de conteúdo, elementos interativos e layout responsivo. Utiliza Gulp para automatizar tarefas de compilação, otimização de imagens e minificação de arquivos JavaScript.',
    image: disney,
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'Sass',
      'Gulp',
      'gulp-sass',
      'gulp-imagemin',
      'gulp-uglify'
    ],
    love: 5,
    likes: 3,
    fire: 1,
    projectUrl: 'https://projeto-clone-disney-plus-ixxt.vercel.app/',
    githubUrl: 'https://github.com/aarielmartins/Projeto---Clone_Disney_Plus',
    comments: [
      {
        id: 1,
        author: 'Mãe',
        initials: 'ma',
        date: '1 ano',
        text: 'Parabéns por ter iniciado essa jornada! 👏'
      }
    ]
  }
]

import { CareerProps } from '../components/Career'

export const career: CareerProps = {
  experience: [
    {
      title: 'Desenvolvedora Front End',
      place: 'Transição de Carreira',
      period: '2024 — atual',
      description:
        'Desenvolvimento de projetos práticos para consolidar conhecimentos em Front End e noções de Back End, com foco em aplicações web completas, versionamento com Git/GitHub e deploy em produção.'
    },
    {
      title: 'Artista 3D Pleno',
      place: 'Domus Arquitetura Digital',
      period: '2021 — atual',
      description:
        'Modelagem 3D e produção de imagens para projetos de lançamento imobiliário de alto padrão, no Rio de Janeiro. Colaboração com arquitetos, artistas 3D e demais profissionais para alinhar demandas, padronizar processos, melhorar o fluxo de produção e garantir qualidade visual e cumprimento de prazos.'
    },
    {
      title: 'Artista 3D Junior',
      place: 'Domus Arquitetura Digital',
      period: '2019 — 2021',
      description:
        'Preparação de cenas para renderização e colaboração com a equipe. Aprendizado rápido do 3ds Max, adquirindo domínio da ferramenta em curto período e evoluindo rapidamente na execução das atividades.'
    }
  ],
  education: [
    {
      title: 'Full Stack Python',
      place: 'EBAC',
      period: '2024 — 2026',
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

export const contact = {
  email: 'a.martiins.am@gmail.com'
}
