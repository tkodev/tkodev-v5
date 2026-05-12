import { forwardRef, HTMLAttributes, ReactNode } from 'react'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva('relative flex h-auto w-full', {
    variants: {
      height: {
        full: 'min-h-full',
        'auto-full': 'min-h-5 lg:min-h-full',
        auto: 'min-h-5'
      }
    },
    defaultVariants: {
      height: 'full'
    }
  }),
  underlay: cva('absolute top-0 left-0 h-full w-full'),
  content: cva('relative mx-auto w-full max-w-full grow px-8 py-24 lg:py-32', {
    variants: {
      width: {
        full: 'max-w-7xl',
        narrow: 'max-w-7xl'
      },
      isCenter: {
        true: 'flex items-center justify-center'
      }
    },
    defaultVariants: {
      width: 'full',
      isCenter: false
    }
  })
}

type SectionRef = HTMLDivElement
type SectionProps = HTMLAttributes<SectionRef> &
  VariantProps<typeof styles.root> &
  VariantProps<typeof styles.content> & {
    bg?: ReactNode
  }

const Section = forwardRef<SectionRef, SectionProps>((props, ref) => {
  const { bg, height, width, isCenter, className, children, ...rest } = props

  return (
    <section ref={ref} className={cn(styles.root({ height }))} {...rest}>
      <div className={cn(styles.underlay())}>{bg}</div>
      <div className={cn(styles.content({ width, className, isCenter }))}>{children}</div>
    </section>
  )
})
Section.displayName = 'Section'

export { Section }
export type { SectionProps, SectionRef }
