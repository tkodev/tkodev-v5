'use client'

import Link from 'next/link'
import { FC, HTMLAttributes } from 'react'
import { formatInTimeZone } from 'date-fns-tz'
import { appTimeZone } from '@/constants/date'
import { env } from '@/constants/env'
import { footerItems } from '@/constants/layout'
import { cn, cva, type VariantProps } from '@/utils/theme'
import { Button } from '../atoms/button'
import { Nav } from '../molecules/nav'

const styles = {
  root: cva(['z-10 h-auto w-full', 'fixed bottom-0 left-0']),
  fade: cva([
    'pointer-events-none fixed -bottom-0.5 left-0 h-24 w-full',
    'bg-background gradient-mask-t-10'
  ]),
  blur: cva(['pointer-events-none h-24 w-full', 'fixed -bottom-0.5 left-0']),
  container: cva([
    'fixed bottom-4 left-1/2 mx-auto -translate-x-1/2 px-4',
    'z-10 h-auto w-full max-w-7xl'
  ]),
  bar: cva('animate-slide-up flex h-16 items-center justify-between px-2', {
    variants: {
      variant: {
        bar: [
          'bg-background/30 border-border rounded-full border shadow-md',
          'backdrop-blur-lg backdrop-filter'
        ],
        flat: 'rounded-none border-none bg-transparent shadow-none'
      }
    },
    defaultVariants: {
      variant: 'flat'
    }
  }),

  left: cva('flex h-full items-center gap-2 px-2'),
  right: cva('no-scrollbar flex h-full items-center gap-2 overflow-x-auto px-2')
}

type FooterProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof styles.bar>

const Footer: FC<FooterProps> = (props) => {
  const { variant, className, ...rest } = props

  const year = formatInTimeZone(new Date(), appTimeZone, 'yyyy')
  const commitHref = `https://github.com/tkodev/tkodev-v5/commit/${env.NEXT_PUBLIC_COMMIT_SHA}`

  return (
    <footer className={cn(styles.root({ className }))} {...rest}>
      {[
        { blur: 'backdrop-blur-[8px]', stop: '0%' },
        { blur: 'backdrop-blur-[12px]', stop: '25%' },
        { blur: 'backdrop-blur-[16px]', stop: '50%' },
        { blur: 'backdrop-blur-[20px]', stop: '75%' }
      ].map(({ blur, stop }) => (
        <div
          key={stop}
          className={cn(styles.blur(), blur)}
          style={{ maskImage: `linear-gradient(to bottom, transparent ${stop}, black)` }}
        />
      ))}
      <div className={cn(styles.fade())} />
      <div className={cn(styles.container())}>
        <div className={cn(styles.bar({ variant }))}>
          <div className={cn(styles.left())}>
            <Button variant="link" asChild>
              <Link href={commitHref} target="_blank">
                {year} - {env.NEXT_PUBLIC_COMMIT_SHA.slice(0, 8)}
              </Link>
            </Button>
          </div>
          <div className={cn(styles.right())}>
            <Nav items={footerItems} />
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
