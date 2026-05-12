'use client'

import Link from 'next/link'
import { FC, HTMLAttributes } from 'react'
import { SunMoonIcon } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/atoms/avatar'
import { Button } from '@/components/atoms/button'
import { Icon } from '@/components/atoms/icon'
import { Logo } from '@/components/atoms/logo'
import { useTheme } from '@/hooks/theme'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['z-10 h-auto w-full', 'fixed top-0 left-0']),
  fade: cva([
    'pointer-events-none h-24 w-full',
    'bg-background gradient-mask-b-10 fixed -top-0.5 left-0'
  ]),
  blur: cva(['pointer-events-none h-24 w-full', 'fixed -top-0.5 left-0']),
  container: cva(['h-auto w-full max-w-7xl', 'fixed top-4 left-1/2 mx-auto -translate-x-1/2 px-4']),
  bar: cva('animate-slide-down flex h-16 w-full items-center justify-between px-2', {
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
  right: cva('no-scrollbar flex h-full items-center gap-2 overflow-x-auto px-2'),

  thumb: cva('hidden sm:block'),
  logo: cva('mx-2 h-6 w-18 sm:mx-4 md:mx-8'),
  intro: cva('hidden sm:block')
}

type HeaderProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof styles.bar>

const Header: FC<HeaderProps> = (props) => {
  const { variant, className, ...rest } = props
  const { theme, handleThemeModeToggle } = useTheme()

  return (
    <header className={cn(styles.root({ className }))} {...rest}>
      {[
        { blur: 'backdrop-blur-[8px]', stop: '0%' },
        { blur: 'backdrop-blur-[12px]', stop: '25%' },
        { blur: 'backdrop-blur-[16px]', stop: '50%' },
        { blur: 'backdrop-blur-[20px]', stop: '75%' }
      ].map(({ blur, stop }) => (
        <div
          key={stop}
          className={cn(styles.blur(), blur)}
          style={{ maskImage: `linear-gradient(to top, transparent ${stop}, black)` }}
        />
      ))}
      <div className={cn(styles.fade())} />
      <div className={cn(styles.container())}>
        <div className={cn(styles.bar({ variant }))}>
          <div className={cn(styles.left())}>
            <Link className={cn(styles.thumb())} href="/">
              <Avatar>
                <AvatarImage alt="Tony Ko" src="/images/tkodev/dp-thumb.jpg" />
                <AvatarFallback>tko</AvatarFallback>
              </Avatar>
            </Link>
            <Link className={cn(styles.logo())} href="/">
              <Logo />
            </Link>
          </div>
          <div className={cn(styles.right())}>
            <Button
              variant={theme === 'dark' ? 'secondary' : 'ghost'}
              onClick={handleThemeModeToggle}
            >
              <Icon icon={SunMoonIcon} />
              {theme === 'light' ? 'Light' : 'Dark'}
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export { Header }
