import type { NavigationMenu } from './types'

export const navigation: NavigationMenu[] = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'About',
    path: '/about',
  },
  {
    title: 'Blog',
    path: '/posts',
  },
  {
    title: 'Guestbook',
    path: '/guestbook',
  },
  // {
  // 	title: "Features",
  // 	path: "#",
  // 	children: [
  // 		{ title: "Action", path: "/" },
  // 		{ title: "Another action", path: "#" },
  // 		{ title: "Dropdown Submenu", path: "#" },
  // 		{ title: "404 Page", path: "/404" },
  // 	],
  // },
]

export default navigation
