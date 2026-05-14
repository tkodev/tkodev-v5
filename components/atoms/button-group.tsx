import { forwardRef, HTMLAttributes } from 'react'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva(
    [
      'flex items-center',
      '[&>*:not(:first-child)]:-ml-px',
      '[&>*:not(:first-child):not(:last-child)]:rounded-none',
      '[&>*:first-child:not(:last-child)]:rounded-r-none',
      '[&>*:last-child:not(:first-child)]:rounded-l-none',
      '[&>*:focus-visible]:relative [&>*:focus-visible]:z-10'
    ],
    {
      variants: {
        orientation: {
          horizontal: 'flex-row',
          vertical:
            'flex-col [&>*:first-child:not(:last-child)]:rounded-r-lg [&>*:first-child:not(:last-child)]:rounded-b-none [&>*:last-child:not(:first-child)]:rounded-t-none [&>*:last-child:not(:first-child)]:rounded-l-lg [&>*:not(:first-child)]:-mt-px [&>*:not(:first-child)]:-ml-0 [&>*:not(:first-child):not(:last-child)]:rounded-none'
        }
      },
      defaultVariants: {
        orientation: 'horizontal'
      }
    }
  )
}

type ButtonGroupRef = HTMLDivElement
type ButtonGroupProps = HTMLAttributes<ButtonGroupRef> & VariantProps<typeof styles.root>

const ButtonGroup = forwardRef<ButtonGroupRef, ButtonGroupProps>((props, ref) => {
  const { className, orientation, ...rest } = props

  return (
    <div
      ref={ref}
      className={cn(styles.root({ orientation, className }))}
      data-slot="button-group"
      role="group"
      {...rest}
    />
  )
})
ButtonGroup.displayName = 'ButtonGroup'

export { ButtonGroup, styles as buttonGroupStyles }
export type { ButtonGroupProps, ButtonGroupRef }
