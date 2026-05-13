import { forwardRef, HTMLAttributes } from 'react'
import { Cursor } from '@/components/atoms/cursor'
import { cn, cva, VariantProps } from '@/utils/theme'
import { Window } from '../atoms/window'

const styles = {
  root: cva('')
}

type OverlayRef = HTMLDivElement
type OverlayProps = HTMLAttributes<OverlayRef> & VariantProps<typeof styles.root>

const Overlay = forwardRef<OverlayRef, OverlayProps>((props, ref) => {
  const { className, ...rest } = props

  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <Window />
      <Cursor />
    </div>
  )
})
Overlay.displayName = 'Overlay'

export { Overlay }
export type { OverlayProps, OverlayRef }
