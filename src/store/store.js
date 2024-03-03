// 상태 관리
import { create } from 'zustand';

export const globalState = create((set) => ({
  init: 'RIIZE',
  change: (data) => set(() => ({ init: data })),
}));
