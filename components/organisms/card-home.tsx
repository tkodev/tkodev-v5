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
  root: cva('flex w-full flex-col items-center justify-center'),
  title: cva('text-h3 font-heading'),
  cta: cva('mt-2')
}

type CardHomeRef = HTMLDivElement
type CardHomeProps = HTMLAttributes<CardHomeRef> & VariantProps<typeof styles.root>

const CardHome = forwardRef<CardHomeRef, CardHomeProps>((props, ref) => {
  const { className, ...rest } = props

  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <Intro>
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
    </div>
  )
})
CardHome.displayName = 'CardHome'

export { CardHome }
