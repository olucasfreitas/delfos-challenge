import { create } from "zustand";

interface DrawerStore {
  isMiniDrawerOpen: boolean;
  isMiniDrawerFixed: boolean;
  isMobileDrawerOpen: boolean;
  handleOpenAndCloseMiniDrawer: (state: boolean) => void;
  handleOpenAndCloseMobileDrawer: (state: boolean) => void;
  changeMiniDrawerState: (state: boolean) => void;
}

const useDrawerStore = create<DrawerStore>((set) => ({
  isMiniDrawerOpen: false,
  isMiniDrawerFixed: false,
  isMobileDrawerOpen: false,
  handleOpenAndCloseMiniDrawer: (state) =>
    set(() => ({ isMiniDrawerOpen: state })),
  handleOpenAndCloseMobileDrawer: (state) =>
    set(() => ({ isMobileDrawerOpen: state })),
  changeMiniDrawerState: (state) => set(() => ({ isMiniDrawerFixed: state })),
}));

export default useDrawerStore;
