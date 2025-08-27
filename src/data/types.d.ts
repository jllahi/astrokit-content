interface Site {
  title: string
  description: string
  language: string
  logo?: {
    src: './src/assets/icons/logo.svg'
    alt: string
  }
  opengraph: {
    title: string
    description: string
    image?: string
  }
  urls: {
    posts: string
    tags: string
    category: string
  }
  pagination: number
  scheduled: number
}

export interface NavigationMenu {
  title: string
  path: string // | URL
  // children?: NavItem[] // | NavItem
}

interface Icon {
  title?: string
  id: string
  name: string
  collection: string
}

export interface Social {
  github?: {
    link: string
    icon?: 'ri:github-line' | string
  }
  twitter?: {
    link: string
    icon?: 'ri:twitter-x-line' | string
  }
}
