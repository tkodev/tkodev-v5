import Link from 'next/link'
import { forwardRef, HTMLAttributes } from 'react'
import { FileTextIcon, GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from 'lucide-react'
import { Button } from '@/components/atoms/button'
import { Icon } from '@/components/atoms/icon'
import { profileEntries } from '@/constants/profile'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva('flex flex-col items-start justify-center gap-4'),
  heading: cva('text-h2 font-heading'),
  sub: cva('text-muted-foreground text-lg'),
  links: cva('mt-4 flex flex-col gap-3')
}

type SectionContactRef = HTMLDivElement
type SectionContactProps = HTMLAttributes<SectionContactRef> & VariantProps<typeof styles.root>

const SectionContact = forwardRef<SectionContactRef, SectionContactProps>((props, ref) => {
  const { className, ...rest } = props
  const tony = profileEntries.tony

  const links = [
    { href: tony.linkedin, icon: LinkedinIcon, label: 'LinkedIn' },
    { href: tony.github, icon: GithubIcon, label: 'GitHub' },
    { href: `mailto:${tony.email}`, icon: MailIcon, label: tony.email },
    { href: `tel:${tony.phone}`, icon: PhoneIcon, label: tony.phone },
    { href: '/files/tony-ko-resume-2026.pdf', icon: FileTextIcon, label: 'Resume' }
  ]

  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <h1 className={cn(styles.heading())}>
        Get in <strong>Touch.</strong>
      </h1>
      <p className={cn(styles.sub())}>Reach out via any of the channels below.</p>
      <div className={cn(styles.links())}>
        {links.map(({ href, icon, label }) => (
          <Button key={href} size="lg" variant="ghost" asChild>
            <Link rel="noopener noreferrer" href={href} target="_blank">
              <Icon icon={icon} />
              {label}
            </Link>
          </Button>
        ))}
      </div>
    </div>
  )
})
SectionContact.displayName = 'SectionContact'

export { SectionContact }
export type { SectionContactProps, SectionContactRef }
