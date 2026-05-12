import { forwardRef, HTMLAttributes } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/atoms/avatar'
import { Brand } from '@/components/atoms/brand'
import { Cross } from '@/components/atoms/cross'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva([
    'mb-30 h-auto w-full md:mb-25 md:w-3/4 lg:mb-0 lg:w-4/5',
    'relative',
    'flex flex-col items-center justify-center'
  ]),
  cross: cva(['centered absolute']),
  brand1: cva([
    'relative -left-8 h-auto w-3/4',
    'animate-slide-down transition-all duration-1000 hover:scale-105'
  ]),
  brand2: cva([
    'relative h-auto w-3/4',
    'animate-fade-in transition-all duration-1000 hover:scale-105'
  ]),
  brand3: cva([
    'relative left-8 h-auto w-3/4',
    'animate-slide-up transition-all duration-1000 hover:scale-105'
  ]),
  avatar: cva([
    'aspect-square h-auto w-3/5 opacity-75',
    'centered absolute',
    'blur-3xl grayscale-25 transition-opacity duration-1000 hover:opacity-100'
  ]),
  body: cva(['centered absolute h-auto w-70 text-center', 'flex flex-col gap-2'])
}

type IntroRef = HTMLDivElement
type IntroProps = HTMLAttributes<IntroRef> & VariantProps<typeof styles.root>

const Intro = forwardRef<IntroRef, IntroProps>((props, ref) => {
  const { className, children, ...rest } = props

  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <Cross className={cn(styles.cross())} />
      <Brand className={cn(styles.brand1())} variant="outline" />
      <Brand className={cn(styles.brand2())} variant="outline" />
      <Avatar className={cn(styles.avatar())}>
        <AvatarImage alt="Tony Ko" src="/images/tkodev/dp-sq.jpg" />
        <AvatarFallback>TKO</AvatarFallback>
      </Avatar>
      <Brand className={cn(styles.brand3())} variant="outline" />
      <div className={cn(styles.body())}>{children}</div>
    </div>
  )
})
Intro.displayName = 'Intro'

export { Intro }
export type { IntroProps, IntroRef }
