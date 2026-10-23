import { IoBriefcaseOutline, IoSchoolOutline } from 'react-icons/io5'

import * as S from './styles'

export type CareerItem = {
  title: string
  place: string
  period: string
  description: string
}

export type CareerProps = {
  experience: CareerItem[]
  education: CareerItem[]
}

type GroupProps = {
  label: string
  items: CareerItem[]
  Icon: typeof IoBriefcaseOutline
}

const Group = ({ label, items, Icon }: GroupProps) => (
  <S.Group>
    <S.GroupLabel>
      <Icon size={20} /> {label}
    </S.GroupLabel>

    <S.Timeline>
      {items.map(({ title, place, period, description }) => (
        <S.Item key={`${title}-${place}`}>
          <S.ItemHeader>
            <h4>{title}</h4>
            <time>{period}</time>
          </S.ItemHeader>
          <S.Place>{place}</S.Place>
          <S.Description>{description}</S.Description>
        </S.Item>
      ))}
    </S.Timeline>
  </S.Group>
)

const Career = ({ experience, education }: CareerProps) => (
  <S.Section id="carreira">
    <S.Title>
      Carreira <span>&</span> Formação
    </S.Title>

    {experience.length > 0 && (
      <Group label="Experiência" items={experience} Icon={IoBriefcaseOutline} />
    )}

    {education.length > 0 && (
      <Group label="Formação" items={education} Icon={IoSchoolOutline} />
    )}
  </S.Section>
)

export default Career
