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

// 새 교환 글이 추가
export const usePhotoCardStore = create((set) => ({
  photoCardData: null,
  addExchangeToPhoca: (newExchange) =>
    set((state) => ({
      photoCardData: {
        ...state.photoCardData,
        expand: {
          ...state.photoCardData.expand,
          exchangeList: [
            ...(state.photoCardData.expand?.exchangeList || []),
            newExchange,
          ],
        },
      },
    })),
}));

// 찜한 포토카드 정보 전역으로 관리 + 로컬스토리지에 저장
export const likeStore = create(
  persist(
    (set) => ({
      likedCards: {},
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

// 정렬 기능
export const sorting = create((set) => ({
  init: '최신순',
  change: (data) => set(() => ({ init: data })),
}));
