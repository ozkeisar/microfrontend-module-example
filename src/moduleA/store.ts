import { create } from 'zustand';
import { produce } from 'immer';

type ModuleStateFuncs = {
    reset: () => void;
    disable: () => void;
    enable: () => void;
    setValue: (value: string)=> void;
};

type ModuleStateProps = {
    isEnabled: boolean;
    value: string;
};

type ModuleState = ModuleStateFuncs & ModuleStateProps;

const createModuleStore = (id: string) => {
    const INIT_STATE: ModuleStateProps = {
        isEnabled: true,
        value: ''
    };

    return create<ModuleState>((set) => ({
        ...INIT_STATE,
        reset: () => set({ ...INIT_STATE }),
        disable: () => {
            set(
                produce<ModuleState>((state: ModuleState) => {
                    state.isEnabled = false;
                }),
            );
        },
        enable: () => {
            set(
                produce<ModuleState>((state: ModuleState) => {
                    state.isEnabled = true;
                }),
            );
        },
        setValue: (value) => {
            set(
                produce<ModuleState>((state: ModuleState) => {
                    state.value = value;
                }),
            );
        },
    }));
};

const stores: { [key: string]: ReturnType<typeof createModuleStore> } = {};

export const useModuleStore = (id: string) => {
    if (!stores[id]) {
        stores[id] = createModuleStore(id);
    }
    return stores[id]();
};