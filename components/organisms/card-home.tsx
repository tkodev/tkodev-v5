'use client'

import Link from 'next/link'
import { FC } from 'react'
import { ArrowUpRightIcon } from 'lucide-react'
import { Button } from '@/components/atoms/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/atoms/card'
import { Logo } from '@/components/atoms/logo'
import { cn, cva } from '@/utils/theme'

const styles = {
  root: cva('bg-background w-full'),
  header: cva('flex w-full flex-row items-center justify-between'),
  logo: cva('w-full'),
  footer: cva('flex items-end justify-between gap-6'),
  blurb: cva('flex flex-col gap-3'),
  blurbText: cva('text-muted-foreground text-sm leading-relaxed')
}

const CardHome: FC = () => {
  return (
    <Card className={cn(styles.root())}>
      <CardHeader>
        <div className={cn(styles.header())}>
          <Button size="sm" variant="link">
            Staff Software Engineer + Designer
          </Button>
          <Button size="sm" variant="link" asChild>
            <Link href="https://badal.io" target="_blank">
              Badal.io
              <ArrowUpRightIcon />
            </Link>
          </Button>
        </div>
      </CardHeader>

      <CardContent>
        <Logo className={cn(styles.logo())} />
      </CardContent>

      <CardFooter className={cn(styles.footer())}>
        <div className={cn(styles.blurb())}>
          <p className={cn(styles.blurbText())}>
            Tony Ko is a Canadian Staff Software Engineer + Designer working with Badal.io
          </p>
        </div>
        <Button size="sm" variant="link" asChild>
          <Link href="/profile">
            View profile
            <ArrowUpRightIcon />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export { CardHome }
