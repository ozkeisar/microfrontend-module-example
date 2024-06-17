import { useModuleStore } from "./store"


export const useIsEnabled = ()=>{
    const {isEnabled} = useModuleStore();

    return {isEnabled}
}