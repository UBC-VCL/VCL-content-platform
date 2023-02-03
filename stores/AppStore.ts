import { create } from 'zustand'
import { CONSTANTS } from "@/statics";

export interface ModalState {
  visible: boolean;
  data?: Object;
}

export type ValidModalKey =
  typeof CONSTANTS.MODALS[keyof typeof CONSTANTS.MODALS];

type AppStore = {
  isReady: boolean;
  modals: {login: ModalState};
  alert: string | null;
  setIsReady: (isReady: boolean) => void;
  openModal: (param: {
    key: ValidModalKey;
    data?: Object;
  }) => void;
  closeModal: (param: {
    key: ValidModalKey;
    data?: Object;
  }) => void;
  setAlert: (alert: string | null) => void;
};

export const useAppStore = create<AppStore>(
  (set): AppStore => ({
    isReady: false,
    modals: {login: { visible: false }},
    alert: null,
    setIsReady: (isReady) => 
      set((state) => ({
        ...state,
        isReady,
      })),
    openModal: ({key, data}) =>
      set((state) => ({
        ...state,
        modals: {
          ...state.modals,
          [key]: {visible: true, data}
        }
      })),
    closeModal: ({key, data}) =>
      set((state) => ({
        ...state,
        modals: {
          ...state.modals,
          [key]: {visible: false, data}
        }
      })),
    setAlert: (alert) =>
      set((state) => ({
        ...state,
        alert
      }))
  })
);