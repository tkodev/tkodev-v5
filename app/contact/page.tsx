import { FC } from 'react'
import { SectionContact } from '@/components/organisms/section-contact'
import { Main } from '@/components/templates/main'
import { Section } from '@/components/templates/section'

const Page: FC = () => {
  return (
    <Main>
      <Section height="full">
        <SectionContact />
      </Section>
    </Main>
  )
}

export default Page
