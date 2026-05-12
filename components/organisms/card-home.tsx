'use client'

import Link from 'next/link'
import { FC } from 'react'
import { ArrowRightIcon } from 'lucide-react'
import { Button } from '@/components/atoms/button'
import { Icon } from '@/components/atoms/icon'
import { Intro } from '@/components/molecules/intro'
import { cn, cva } from '@/utils/theme'

const styles = {
  root: cva('flex w-full items-center justify-center'),
  title: cva('text-h4 font-heading'),
  cta: cva('mt-2')
}

const CardHome: FC = () => {
  return (
    <div className={cn(styles.root())}>
      <Intro>
        <h1 className={cn(styles.title())}>
          Works By <strong>Tony Ko</strong>
        </h1>
        <h2>
          <strong>Staff Software Engineer</strong> & <strong>Designer</strong> —
        </h2>
        <h3>
          Based in <em>Toronto, Canada.</em>
        </h3>
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
}

export { CardHome }
