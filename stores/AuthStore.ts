import { UserType } from "@/services/adapters/authAdapter";
import { create } from 'zustand'

type AuthStore = {
  isLoggingIn?: boolean,
  username?: string,
  access_token?: string,
  refresh_token?: string,
  permissions: UserType,
  setAccessToken: (token: string) => void,
  setRefreshToken: (token: string) => void,
  setUsername: (username: string) => void,
  setPermissions: (permissions: UserType) => void,
  setIsLoggingIn: (isLoggedIn: boolean) => void,
  logout: () => void,
}

export const useAuthStore = create<AuthStore>(
  (set): AuthStore => ({
    permissions: "default",
    isLoggingIn: false,
    setAccessToken: (token) => 
      set((state) => ({
        ...state,
        access_token: token,
      })),
    setRefreshToken: (token) => 
      set((state) => ({
        ...state,
        refresh_token: token,
      })),
    setUsername: (username) => 
      set((state) => ({
        ...state,
        username,
      })),
    setPermissions: (permissions) => 
      set((state) => ({
        ...state,
        permissions,
      })),
    setIsLoggingIn: (isLoggingIn) => 
      set((state) => ({
        ...state,
        isLoggingIn,
      })),
    logout: () => 
      set((state) => ({
        ...state,
        username: undefined,
        access_token: undefined,
        refresh_token: undefined,
        permissions: "default",
      })),
  })
)