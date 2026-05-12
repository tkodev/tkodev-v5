import { forwardRef, HTMLAttributes } from 'react'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva('')
}

type UnderlayRef = HTMLDivElement
type UnderlayProps = HTMLAttributes<UnderlayRef> & VariantProps<typeof styles.root>

const Underlay = forwardRef<UnderlayRef, UnderlayProps>((props, ref) => {
  const { className, ...rest } = props

  return <div ref={ref} className={cn(styles.root({ className }))} {...rest}></div>
})
Underlay.displayName = 'Underlay'

export { Underlay }
export type { UnderlayProps, UnderlayRef }
