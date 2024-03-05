// 상태 관리
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// 내 최애 정보 전역으로 관리 + 로컬스토리지에 저장
export const globalState = create(
  persist(
    (set) => ({
      init: 'RIIZE',
      change: (data) => set(() => ({ init: data })),
    }),
    { name: 'bias' }
  )
);

export const searchStore = create((set) => ({
  search: '',
  setSearch: (text) => set({ search: text }),
}));
