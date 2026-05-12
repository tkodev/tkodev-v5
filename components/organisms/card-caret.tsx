import { forwardRef, HTMLAttributes } from 'react'
import { ChevronDownIcon } from 'lucide-react'
import { Icon } from '@/components/atoms/icon'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva(
    'flex animate-bounce cursor-pointer items-center justify-center transition-opacity hover:opacity-80'
  )
}

type CardCaretRef = HTMLDivElement
type CardCaretProps = HTMLAttributes<CardCaretRef> & VariantProps<typeof styles.root>

const CardCaret = forwardRef<CardCaretRef, CardCaretProps>((props, ref) => {
  const { className, ...rest } = props

  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <Icon icon={ChevronDownIcon} />
    </div>
  )
})
CardCaret.displayName = 'CardCaret'

export { CardCaret }
export type { CardCaretProps, CardCaretRef }
