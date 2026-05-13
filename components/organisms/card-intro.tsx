'use client'

import Link from 'next/link'
import { forwardRef, HTMLAttributes } from 'react'
import { ArrowRightIcon } from 'lucide-react'
import { Button } from '@/components/atoms/button'
import { Icon } from '@/components/atoms/icon'
import { Intro } from '@/components/molecules/intro'
import { cn, cva, VariantProps } from '@/utils/theme'
import { Card } from '../atoms/card'

const styles = {
  root: cva('flex w-full items-center justify-center'),
  title: cva('text-h3 font-heading'),
  cta: cva('mt-2')
}

type CardIntroRef = HTMLDivElement
type CardIntroProps = HTMLAttributes<CardIntroRef> & VariantProps<typeof styles.root>

const CardIntro = forwardRef<CardIntroRef, CardIntroProps>((props, ref) => {
  const { className, ...rest } = props

  return (
    <Card ref={ref} className={cn(styles.root({ className }))} variant="outline" {...rest}>
      <Intro variant="text">
        <h1 className={cn(styles.title())}>
          Works By <strong>Tony Ko</strong>
        </h1>
        <h2>
          <strong>
            Staff Software Engineer <br />
          </strong>
          & <strong>Designer</strong> —
        </h2>
        <h3>
          Based in <em>Toronto, Canada.</em>
        </h3>
        <div className={cn(styles.cta())}>
          <Button size="lg" asChild>
            <Link href="/profile">
              Explore Career <Icon icon={ArrowRightIcon} />
            </Link>
          </Button>
        </div>
      </Intro>
    </Card>
  )
})
CardIntro.displayName = 'CardIntro'

export { CardIntro }
