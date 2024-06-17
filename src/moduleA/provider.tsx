import { useEffect } from "react"
import { Emitter } from 'mitt'
import { useModuleStore } from "./store";
import {isOdd} from './utils'
import { instance } from './network'

//from types package 
type Events = {
    updateEnable: {num: number};
};
  
export const ModuleProvider = ({eventManager}: {eventManager: Emitter<Events>})=>{
    const {disable, enable} = useModuleStore()

    useEffect(()=>{
        eventManager.on('updateEnable', ({num}: {num: number}) => {
            // Handle events
            if(isOdd(num)){
                disable()
            }else{
                enable()
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