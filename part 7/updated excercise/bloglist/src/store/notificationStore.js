import { create } from 'zustand'

const useNotificationStore = create((set) => ({
  notification: null,
  setNotification: (message, type = 'success') =>
    set({ notification: { message, type } }),
  clearNotification: () => set({ notification: null }),
}))

export default useNotificationStore
