import { Emitter } from 'mitt'
import { useState } from 'react'
import { ModuleComponent } from './../moduleA'

//from types package 
type Events = {
    updateEnable: {num: number};
};

function isNumber(value: string): boolean {
    return !isNaN(+value);
}

export const ExampleScreen = ({eventManager}: {eventManager: Emitter<Events>})=>{
    const [value, setValue] = useState('')
    const [value2, setValue2] = useState('')

    const handleValueChange = (val: string)=>{
        setValue(val)
        if(!!val && isNumber(val)){
            eventManager.emit('updateEnable',{num: parseInt(val)})
        }
    }


    return <div>
        <div>
            <span>insert odd number to disable both inputs</span>
            <ModuleComponent value={value} onChange={handleValueChange}/>
        </div>
        <div>
            <span>insert anything</span>
           <ModuleComponent value={value2} onChange={setValue2}/>
        </div>
    </div>
}