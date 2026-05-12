import { forwardRef, HTMLAttributes } from 'react'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva('relative flex h-auto w-full', {
    variants: {
      height: {
        full: 'min-h-full',
        auto: 'min-h-5'
      }
    },
    defaultVariants: {
      height: 'full'
    }
  }),
  content: cva('relative mx-auto w-full max-w-full grow px-8 py-24 lg:py-32', {
    variants: {
      width: {
        full: 'max-w-7xl',
        narrow: 'max-w-270'
      }
    },
    defaultVariants: {
      width: 'full'
    }
  })
}

type SectionRef = HTMLDivElement
type SectionProps = HTMLAttributes<SectionRef> &
  VariantProps<typeof styles.root> &
  VariantProps<typeof styles.content> & {}

const Section = forwardRef<SectionRef, SectionProps>((props, ref) => {
  const { height, width, className, children, ...rest } = props

  return (
    <section ref={ref} className={cn(styles.root({ height }))} {...rest}>
      <div className={cn(styles.content({ width, className }))}>{children}</div>
    </section>
  )
})
Section.displayName = 'Section'

export { Section }
export type { SectionProps, SectionRef }
