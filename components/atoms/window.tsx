import { forwardRef, HTMLAttributes } from 'react'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['pointer-events-none fixed top-0 left-0 z-50 h-screen w-screen p-2']),
  container: cva(['h-full w-full', 'outline-background rounded-3xl outline-50 outline-solid'])
}

type WindowRef = HTMLDivElement
type WindowProps = HTMLAttributes<WindowRef> &
  VariantProps<typeof styles.root> &
  VariantProps<typeof styles.container>

const Window = forwardRef<WindowRef, WindowProps>((props, ref) => {
  const { className, ...rest } = props

  return (
    <div className={cn(styles.root())}>
      <div ref={ref} className={cn(styles.container({ className }))} {...rest} />
    </div>
  )
})
Window.displayName = 'Window'

export { Window }
export type { WindowProps, WindowRef }
