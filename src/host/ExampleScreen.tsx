import { ModuleComponentInput, isOdd, useReset } from './../moduleA'
import { eventManager } from './eventManager';

function isNumber(value: string): boolean {
    return !isNaN(+value);
}

export const ExampleScreen = ({id}: {id: string})=>{
    const {reset} = useReset(id)
    const handleValueChange = (val: string)=>{
        if(!!val && isNumber(val)){
            eventManager.emit('updateEnable',{ isEnabled: !isOdd(parseInt(val))})
        }
    }


    return <div>
        <div>
            <span>insert odd number to disable both inputs</span>
            <ModuleComponentInput id={id}  onChange={handleValueChange}/>
        </div>
        <div>
           <button onClick={()=>{
                reset()
           }}>reset</button>
        </div>
    </div>
}