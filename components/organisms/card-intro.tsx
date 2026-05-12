'use client'

import Link from 'next/link'
import { forwardRef, HTMLAttributes } from 'react'
import { ArrowRightIcon } from 'lucide-react'
import { Button } from '@/components/atoms/button'
import { Icon } from '@/components/atoms/icon'
import { Intro } from '@/components/molecules/intro'
import { cn, cva, VariantProps } from '@/utils/theme'
import { Separator } from '../atoms/separator'

const styles = {
  root: cva(''),
  title: cva('text-h3 font-heading'),
  cta: cva('mt-2')
}

type CardIntroRef = HTMLDivElement
type CardIntroProps = HTMLAttributes<CardIntroRef> & VariantProps<typeof styles.root>

const CardIntro = forwardRef<CardIntroRef, CardIntroProps>((props, ref) => {
  const { className, ...rest } = props

  return (
    <Intro ref={ref} className={cn(styles.root({ className }))} variant="text" {...rest}>
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
      <Separator />
      <div className={cn(styles.cta())}>
        <Button size="lg" asChild>
          <Link href="/profile">
            Explore Profile <Icon icon={ArrowRightIcon} />
          </Link>
        </Button>
      </div>
    </Intro>
  )
})
CardIntro.displayName = 'CardIntro'

export { CardIntro }
