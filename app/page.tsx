import { FC } from 'react'
import { Bg } from '@/components/atoms/bg'
import { CardHome } from '@/components/organisms/card-home'
import { Main } from '@/components/templates/main'
import { Section } from '@/components/templates/section'

const Page: FC = () => {
  return (
    <Main>
      <Section bg={<Bg attach="local" variant="texture" />} height="full" isCenter>
        <CardHome />
      </Section>
      <Section bg={<Bg attach="local" variant="sand" />} height="auto" isCenter>
        yoloooo
      </Section>
    </Main>
  )
}

export default Page
