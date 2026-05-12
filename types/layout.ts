import { SvgComponent } from '@/types/theme'

type SelectEntry = {
  icon: SvgComponent
  name: string
  value: string
}

type PageProps = {
  params: Promise<{ [key: string]: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export type { PageProps, SelectEntry }
