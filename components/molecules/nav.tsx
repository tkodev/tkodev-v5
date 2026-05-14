import Link from 'next/link'
import { forwardRef, HTMLAttributes } from 'react'
import { PauseIcon, PlayIcon } from 'lucide-react'
import { Button } from '@/components/atoms/button'
import { useTheme } from '@/hooks/theme'
import { useBgmContext } from '@/providers/bgm'
import { NavEntry } from '@/types/layout'
import { cn, cva, VariantProps } from '@/utils/theme'
import { ButtonGroup } from '../atoms/button-group'
import { Icon } from '../atoms/icon'

const styles = {
  root: cva('flex items-center gap-2'),
  icon: cva('xs:block')
}

type NavRef = HTMLDivElement
type NavProps = HTMLAttributes<NavRef> &
  VariantProps<typeof styles.root> & {
    items: NavEntry[]
  }

const Nav = forwardRef<NavRef, NavProps>((props, ref) => {
  const { items, children, className, ...rest } = props
  const { theme, handleThemeModeToggle } = useTheme()
  const { isPlaying, toggle } = useBgmContext()

  return (
    <nav ref={ref} className={cn(styles.root({ className }))} {...rest}>
      {items.map((props, index) => {
        const { intent, href, name, icon, isVisible, variant, ...rest } = props
        const linkHref = href || '#'
        const linkTarget =
          !linkHref.startsWith('/') || linkHref.endsWith('.pdf') ? '_blank' : undefined

        if (!isVisible) {
          return null
        }
        if (intent === 'url') {
          return (
            <Button key={`nav-item-${index}`} variant={variant} {...rest} asChild>
              <Link href={linkHref} target={linkTarget}>
                <Icon className={cn(styles.icon())} icon={icon} />
                {name}
              </Link>
            </Button>
          )
        }
        if (intent === 'theme') {
          return (
            <Button key={`nav-item-${index}`} variant={variant} onClick={handleThemeModeToggle}>
              <Icon className={cn(styles.icon())} icon={icon} />
              {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </Button>
          )
        }
        if (intent === 'music') {
          return (
            <ButtonGroup key={`nav-item-${index}`}>
              <Button variant={variant} onClick={toggle}>
                <Icon icon={isPlaying ? PauseIcon : PlayIcon} />
                {name}
              </Button>
              <Button variant={variant} asChild>
                <Link href={linkHref} target="_blank">
                  <Icon className={cn(styles.icon())} icon={icon} />
                </Link>
              </Button>
            </ButtonGroup>
          )
        }
        if (intent === 'spacer') {
          return <Icon key={`nav-item-${index}`} icon={icon} />
        }
        return null
      })}
      {children}
    </nav>
  )
})

Nav.displayName = 'Nav'

export { Nav }
export type { NavProps, NavRef }
