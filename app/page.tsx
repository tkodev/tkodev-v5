import { FC } from 'react'
import { Button } from '@/components/atoms/button'
import { Main } from '@/components/organisms/main'
import { Section } from '@/components/organisms/section'

const Page: FC = () => {
  return (
    <Main>
      <Section>
        <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
          <div>
            <h1 className="font-medium">Project ready!</h1>
            <p>You may now add components and start building.</p>
            <p>We&apos;ve already added the button component for you.</p>
            <Button className="mt-2">Button</Button>
          </div>
          <div className="text-muted-foreground font-mono text-xs">
            (Press <kbd>d</kbd> to toggle dark mode)
          </div>
        </div>
      </Section>
    </Main>
  )
}

export default Page
