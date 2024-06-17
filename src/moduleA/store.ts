import { create } from 'zustand'
import {produce} from 'immer';

export type ModuleStateFuncs = {
  reset: ()=> void;
  disable: () => void;
  enable: ()=> void;
}

export type ModuleStateProps = {
  isEnabled: boolean;
}

export type ModuleState = ModuleStateFuncs & ModuleStateProps


const INIT_STATE: ModuleStateProps = {
  isEnabled: true
}


export const useModuleStore = create<ModuleState>((set) => ({
    ...INIT_STATE,
    reset: () => set({ ...INIT_STATE }),
    disable: ()=>{
        set(
            produce<ModuleState>((state: ModuleState) => {
              state.isEnabled = false
            }),
          );
    },
    enable: ()=>{
        set(
            produce<ModuleState>((state: ModuleState) => {
              state.isEnabled = true
            }),
          );
    },
}));