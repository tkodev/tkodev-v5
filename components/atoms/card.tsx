import * as React from 'react'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva(
    'group/card text-card-foreground ring-foreground/10 flex flex-col gap-4 overflow-hidden rounded-xl py-4 text-sm ring-1 has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:gap-3 data-[size=sm]:py-3 data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl',
    {
      variants: {
        variant: {
          default: 'bg-card',
          outline: 'bg-background/30'
        }
      },
      defaultVariants: {
        variant: 'default'
      }
    }
  ),
  header: cva(
    'group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-4 group-data-[size=sm]/card:px-3 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-4 group-data-[size=sm]/card:[.border-b]:pb-3'
  ),
  title: cva('text-base leading-snug font-medium group-data-[size=sm]/card:text-sm'),
  description: cva('text-muted-foreground text-sm'),
  action: cva('col-start-2 row-span-2 row-start-1 self-start justify-self-end'),
  content: cva('px-4 group-data-[size=sm]/card:px-3'),
  footer: cva(
    'bg-muted/50 flex items-center rounded-b-xl border-t p-4 group-data-[size=sm]/card:p-3'
  )
}

type CardRef = HTMLDivElement
type CardProps = React.ComponentProps<'div'> &
  VariantProps<typeof styles.root> & {
    size?: 'default' | 'sm'
  }

const Card = ({ className, variant, size = 'default', ...props }: CardProps) => {
  return (
    <div
      className={cn(styles.root({ variant, className }))}
      data-size={size}
      data-slot="card"
      {...props}
    />
  )
}

type CardHeaderRef = HTMLDivElement
type CardHeaderProps = React.ComponentProps<'div'> & VariantProps<typeof styles.header>

const CardHeader = ({ className, ...props }: CardHeaderProps) => {
  return <div className={cn(styles.header({ className }))} data-slot="card-header" {...props} />
}

type CardTitleRef = HTMLDivElement
type CardTitleProps = React.ComponentProps<'div'> & VariantProps<typeof styles.title>

const CardTitle = ({ className, ...props }: CardTitleProps) => {
  return <div className={cn(styles.title({ className }))} data-slot="card-title" {...props} />
}

type CardDescriptionRef = HTMLDivElement
type CardDescriptionProps = React.ComponentProps<'div'> & VariantProps<typeof styles.description>

const CardDescription = ({ className, ...props }: CardDescriptionProps) => {
  return (
    <div
      className={cn(styles.description({ className }))}
      data-slot="card-description"
      {...props}
    />
  )
}

type CardActionRef = HTMLDivElement
type CardActionProps = React.ComponentProps<'div'> & VariantProps<typeof styles.action>

const CardAction = ({ className, ...props }: CardActionProps) => {
  return <div className={cn(styles.action({ className }))} data-slot="card-action" {...props} />
}

type CardContentRef = HTMLDivElement
type CardContentProps = React.ComponentProps<'div'> & VariantProps<typeof styles.content>

const CardContent = ({ className, ...props }: CardContentProps) => {
  return <div className={cn(styles.content({ className }))} data-slot="card-content" {...props} />
}

type CardFooterRef = HTMLDivElement
type CardFooterProps = React.ComponentProps<'div'> & VariantProps<typeof styles.footer>

const CardFooter = ({ className, ...props }: CardFooterProps) => {
  return <div className={cn(styles.footer({ className }))} data-slot="card-footer" {...props} />
}

export { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle }
export type {
  CardActionProps,
  CardActionRef,
  CardContentProps,
  CardContentRef,
  CardDescriptionProps,
  CardDescriptionRef,
  CardFooterProps,
  CardFooterRef,
  CardHeaderProps,
  CardHeaderRef,
  CardProps,
  CardRef,
  CardTitleProps,
  CardTitleRef
}
