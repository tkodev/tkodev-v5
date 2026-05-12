'use client'

import { FC, useLayoutEffect, useRef } from 'react'
import { BanIcon, HandIcon, LucideProps, PlusIcon, PointerIcon, TextCursorIcon } from 'lucide-react'
import { cn, cva } from '@/utils/theme'

const styles = {
  ring: cva([
    'border-background/30 dark:border-foreground/30 pointer-events-none border',
    'fixed top-0 left-0 z-9999',
    'size-18 rounded-full opacity-0',
    'mix-blend-exclusion'
  ]),
  wave: cva([
    'border-background dark:border-foreground pointer-events-none border',
    'fixed top-0 left-0 z-9999 -translate-x-1/2 -translate-y-1/2',
    'size-18 rounded-full opacity-0',
    'mix-blend-exclusion'
  ]),
  pointer: cva([
    'pointer-events-none fixed top-0 left-0 z-9999',
    'flex items-center justify-center opacity-0',
    'mix-blend-exclusion'
  ]),
  icon: cva(
    ['text-background dark:text-foreground absolute opacity-0', 'transition-opacity duration-150'],
    {
      variants: {
        offset: {
          none: '',
          pointer: 'translate-x-[15%] translate-y-[40%]'
        }
      },
      defaultVariants: {
        offset: 'none'
      }
    }
  )
}

type CursorState = 'default' | 'pointer' | 'disabled' | 'text' | 'grab'
type IconConfig = {
  icon: FC<LucideProps>
  scale: number
  offset?: 'none' | 'pointer'
}

const RingLerp = 0.1 // higher is faster
const IconLerp = 1
const Pointers: Record<CursorState, IconConfig> = {
  default: { icon: PlusIcon, scale: 1 },
  pointer: { icon: PointerIcon, scale: 1.25, offset: 'pointer' },
  disabled: { icon: BanIcon, scale: 1 },
  text: { icon: TextCursorIcon, scale: 1 },
  grab: { icon: HandIcon, scale: 1 }
}

const getCursorState = (el: Element | null): CursorState => {
  if (!el || el === document.documentElement) return 'default'
  const tag = el.tagName.toLowerCase()
  const computed = getComputedStyle(el).cursor
  if (computed === 'not-allowed') return 'disabled'
  if (computed === 'text') return 'text'
  if (computed === 'grab' || computed === 'grabbing') return 'grab'
  if (['a', 'button', 'input', 'select', 'textarea'].includes(tag)) return 'pointer'
  if (el.getAttribute('role') === 'button') return 'pointer'
  if (computed === 'pointer') return 'pointer'
  return getCursorState(el.parentElement)
}

const Cursor: FC = () => {
  const ringRef = useRef<HTMLDivElement>(null)
  const waveRef = useRef<HTMLDivElement>(null)
  const pointerRef = useRef<HTMLDivElement>(null)
  const iconRefsMap = useRef<Partial<Record<CursorState, HTMLDivElement>>>({})

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return
    if (!window.matchMedia('(pointer: fine)').matches) return

    const ring = ringRef.current
    const wave = waveRef.current
    const pointer = pointerRef.current
    const icons = iconRefsMap.current
    const hasIcons = pointer && Object.values(icons).every(Boolean)
    if (!ring || !wave) return

    let rafId: number
    let mouseX = 0
    let mouseY = 0
    let x = 0
    let y = 0
    let px = 0
    let py = 0
    let scale = Pointers.default.scale
    let targetScale = Pointers.default.scale

    if (hasIcons) icons.default!.style.opacity = '1'

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const onMouseOver = (e: MouseEvent) => {
      const state = getCursorState(e.target as Element)
      targetScale = Pointers[state].scale
      if (hasIcons) {
        for (const [key, el] of Object.entries(icons)) {
          el!.style.opacity = key === state ? '1' : '0'
        }
      }
    }

    const tick = () => {
      x += (mouseX - x) * RingLerp
      y += (mouseY - y) * RingLerp
      scale += (targetScale - scale) * RingLerp
      ring.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%) scale(${scale})`

      if (hasIcons) {
        px += (mouseX - px) * IconLerp
        py += (mouseY - py) * IconLerp
        pointer!.style.transform = `translate(${px}px, ${py}px) translate(-50%, -50%)`
      }

      rafId = requestAnimationFrame(tick)
    }

    const onMouseDown = (e: MouseEvent) => {
      wave.style.top = `${e.clientY}px`
      wave.style.left = `${e.clientX}px`
      wave.style.animation = 'none'
      void wave.offsetHeight // force reflow to restart animation
      wave.style.animation = 'var(--animate-cursor-wave)'
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    window.addEventListener('mouseover', onMouseOver, { passive: true })
    window.addEventListener('mousedown', onMouseDown, { passive: true })
    rafId = requestAnimationFrame(tick)
    ring.style.opacity = '1'
    if (hasIcons) pointer!.style.opacity = '1'

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseover', onMouseOver)
      window.removeEventListener('mousedown', onMouseDown)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div ref={ringRef} className={cn(styles.ring())} />
      <div ref={waveRef} className={cn(styles.wave())} />
      <div ref={pointerRef} className={cn(styles.pointer())}>
        {(Object.entries(Pointers) as [CursorState, IconConfig][]).map(
          ([state, { icon: Icon, offset }]) => (
            <div
              key={state}
              ref={(el) => {
                iconRefsMap.current[state] = el ?? undefined
              }}
              className={cn(styles.icon({ offset }))}
            >
              <Icon size={16} strokeWidth={2} />
            </div>
          )
        )}
      </div>
    </>
  )
}

export { Cursor }
