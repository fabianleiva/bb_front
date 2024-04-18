import { create } from 'zustand'

export const storeBulkBuddies = create((set) => ({
  mobileMenuOpen: false,
  setMobileMenuOpen: (value) => set(() => ({ mobileMenuOpen: value })),
  userState: {},
  setUserState: (value) => set(() => ({ userState: value })),
  isAuth: false,
  setIsAuth: (value) => set(() => ({ isAuth: value })),
}))
