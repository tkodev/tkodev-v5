import { FC } from 'react'
import { Bg } from '@/components/atoms/bg'
import { CardCaret } from '@/components/organisms/card-caret'
import { CardHome } from '@/components/organisms/card-home'
import { Main } from '@/components/templates/main'
import { Section } from '@/components/templates/section'
import { cn, cva } from '@/utils/theme'

const styles = {
  intro: cva('flex flex-col items-center justify-evenly gap-8')
}

const Page: FC = () => {
  return (
    <Main>
      <Section
        className={cn(styles.intro())}
        bg={<Bg attach="local" variant="texture" />}
        height="full"
      >
        <CardHome />
        <CardCaret />
      </Section>
      <Section bg={<Bg attach="local" variant="sand" />} height="auto">
        yoloooo
      </Section>
    </Main>
  )
}

export default Page
