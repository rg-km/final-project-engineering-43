import create from 'zustand';
import { persist } from 'zustand/middleware';

const userStore = create(
  persist(
    (set) => ({
      user: {
        isLogged: false,
      },
      login: (user) => set({ user: { ...user, isLogged: true } }),
      logout: () => set({ user: { isLogged: false } }, true),
    }),
    {
      name: 'user-storage',
    }
  )
);

export default userStore;
