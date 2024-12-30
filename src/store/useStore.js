import create from 'zustand';

const useStore = create((set) => ({
  clickCount: 0,
  incrementCount: () => set((state) => ({ clickCount: state.clickCount + 1 })),
  user: null,
  setUser: (user) => set({ user }),
}));

export default useStore;