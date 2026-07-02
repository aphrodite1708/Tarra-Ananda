import { createContext, useContext } from 'react'

export type Page = 'home' | 'about' | 'skills' | 'case-studies' | 'contact'
export const PAGES: Page[] = ['home', 'about', 'skills', 'case-studies', 'contact']

export const NavCtx = createContext<(page: Page) => void>(() => {})
export const useNav = () => useContext(NavCtx)
