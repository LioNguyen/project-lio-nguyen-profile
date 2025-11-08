/**
 * Application route constants
 */
export const APP_ROUTES = {
  HOME: '/',
  ABOUT: '#about',
  SKILLS: '#skills',
  QUALIFICATION: '#qualification',
  CONTACT: '#contact',
} as const

export type AppRoute = (typeof APP_ROUTES)[keyof typeof APP_ROUTES]
