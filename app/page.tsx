import { FC } from 'react'
import { CardHome } from '@/components/organisms/card-home'
import { Main } from '@/components/templates/main'
import { Section } from '@/components/templates/section'

const Page: FC = () => {
  return (
    <Main>
      <Section>
        <CardHome />
      </Section>
    </Main>
  )
}

export default Page
