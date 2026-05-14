import {
  CameraIcon,
  DraftingCompassIcon,
  MailIcon,
  ScanFaceIcon,
  SunMoonIcon,
  UserStarIcon
} from 'lucide-react'
import { NavEntry } from '@/types/layout'

const headerItems: NavEntry[] = [
  {
    intent: 'url',
    href: '/career',
    name: 'Career',
    icon: ScanFaceIcon,
    variant: 'ghost',
    isVisible: true
  },
  {
    intent: 'url',
    href: '/projects',
    name: 'Projects',
    icon: DraftingCompassIcon,
    variant: 'ghost',
    isVisible: true
  },
  {
    intent: 'url',
    href: '/experiments',
    name: 'Experiments',
    icon: CameraIcon,
    variant: 'ghost',
    isVisible: true
  },
  {
    intent: 'url',
    href: '/contact',
    name: 'Contact',
    icon: MailIcon,
    variant: 'ghost',
    isVisible: true
  }
]

const footerItems: NavEntry[] = [
  {
    intent: 'music',
    href: 'https://uppbeat.io/track/justin-marshall-elias/an-empty-bus',
    icon: UserStarIcon,
    name: 'Music',
    variant: 'ghost',
    isVisible: true
  },
  {
    intent: 'theme',
    icon: SunMoonIcon,
    variant: 'ghost',
    isVisible: true
  }
]

export { footerItems, headerItems }
