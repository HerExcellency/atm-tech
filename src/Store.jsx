// import React from 'react';

import create from 'zustand';

export const useMediaStore = create((set) => ({
  showBefore: true,
  toggleBefore: () => set((state) => ({ showBefore: !state.showBefore })),
}));
