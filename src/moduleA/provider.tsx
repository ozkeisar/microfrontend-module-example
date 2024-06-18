import { useEffect } from "react"
import { Emitter } from 'mitt'
import { useModuleStore } from "./store";
import { instance } from './network'
import { Events } from "../types";


type ProviderProps = {
    eventManager: Emitter<Events>,
    id: string,
}
export const ModuleProvider = ({id, eventManager}: ProviderProps)=>{
    const { disable, enable } = useModuleStore(id);

    useEffect(()=>{
        eventManager.on('updateEnable', ({isEnabled}) => {
            // Handle events
            if(isEnabled){
                enable()
            }else{
                disable()
            }
          });
      
          return () => {
            eventManager.off('updateEnable');
          };
    },[]);

    useEffect(()=>{
        instance.get('fact').then((res)=>{
            console.log(res)
        })
    },[])


    return null;
}