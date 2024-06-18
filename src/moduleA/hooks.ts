import { useModuleStore } from "./store"


export const useIsEnabled = (id: string)=>{
    const {isEnabled} = useModuleStore(id);

    return {isEnabled}
}


export const useReset = (id: string)=>{
    const {setValue, enable} = useModuleStore(id);

    const reset = ()=>{
        setValue('');
        enable()
    }
    return {reset}
}