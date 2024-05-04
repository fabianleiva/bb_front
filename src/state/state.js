import { create } from "zustand";

export const storeBulkBuddies = create((set) => ({
  mobileMenuOpen: false,
  setMobileMenuOpen: (value) => set(() => ({ mobileMenuOpen: value })),
  userState: {},
  setUserState: (value) => set(() => ({ userState: value })),
  isAuth: false,
  setIsAuth: (isAuth, token) => set(() => {
    localStorage.setItem("token", token)
    return { isAuth: isAuth }
  }),
  alert: {},
  user: {},
  setUser: (newUser) => set(() => {
    localStorage.setItem("user", JSON.stringify(newUser))
    return { user: newUser }
  }),
  logout: () => set(() => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    return {
      isAuth: false,
      user: {}
    }
  }),
  setAlert: (value) => set(() => ({ alert: value })),
  products: [],
  setProducts: (value) => set(() => ({ products: value })),
  categories: [],
  setCategories: (value) => set(() => ({ categories: value })),
}));
