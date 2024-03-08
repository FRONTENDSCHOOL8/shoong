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

// 찜한 포토카드 정보 전역으로 관리 + 로컬스토리지에 저장
export const likeStore = create(
  persist(
    (set) => ({
      likedCards: {}, // 카드 ID를 키로 하고, 찜된 상태(boolean)를 값으로 하는 객체
      toggleLike: (id) =>
        set((state) => ({
          likedCards: {
            ...state.likedCards,
            [id]: !state.likedCards[id],
          },
        })),
    }),
    {
      name: 'likeList',
    }
  )
);
