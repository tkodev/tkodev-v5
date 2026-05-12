import { forwardRef, HTMLAttributes } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/atoms/avatar'
import { Brand } from '@/components/atoms/brand'
import { Cross } from '@/components/atoms/cross'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva([
    'mb-30 aspect-square h-auto w-full md:w-2/3 lg:mb-0 lg:w-3/5',
    'relative',
    'flex flex-col items-center justify-center'
  ]),
  cross: cva(['centered absolute']),
  brand1: cva([
    'relative -left-8 h-auto w-[75%]',
    'animate-slide-down transition-all duration-1000 hover:scale-105'
  ]),
  brand2: cva([
    'relative h-auto w-[75%]',
    'animate-fade-in transition-all duration-1000 hover:scale-105'
  ]),
  brand3: cva([
    'relative left-8 h-auto w-[75%]',
    'animate-slide-up transition-all duration-1000 hover:scale-105'
  ]),
  avatar: cva([
    'aspect-square h-auto w-[50%]',
    'centered absolute',
    'grayscale-25 transition-all duration-1000 hover:scale-105 hover:grayscale'
  ]),
  body: cva([
    'absolute h-auto w-60',
    'top-[80%] left-1/2 -translate-x-1/2 text-center',
    'lg:top-1/2 lg:left-full lg:-translate-1/2 lg:text-left',
    'flex flex-col gap-2'
  ])
}

type IntroRef = HTMLDivElement
type IntroProps = HTMLAttributes<IntroRef> & VariantProps<typeof styles.root>

const Intro = forwardRef<IntroRef, IntroProps>((props, ref) => {
  const { className, children, ...rest } = props

  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <Cross className={cn(styles.cross())} />
      <Brand className={cn(styles.brand1())} variant="fill" />
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
