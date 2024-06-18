import React from 'react';
import { useModuleStore } from './store';


interface InputFieldProps {
  id: string;
  onChange?: (value: string)=>void
}
  

export const ModuleComponentInput = ({id, onChange}:InputFieldProps)=>{
  const { isEnabled, setValue, value } = useModuleStore(id);


  const handleValueChange = (val: string)=>{
    onChange?.(val)
    setValue(val)
  }
  return (
      <input
        type="text"
        value={value}
        onChange={(e) => handleValueChange(e.target.value)}
        disabled={!isEnabled}
        style={{
          padding: '10px',
          fontSize: '16px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          backgroundColor: isEnabled ? '#f0f0f0' : '#fff',
        }}
      />
    ); 
}


export const ModuleComponentDisplay= ({id}:{id: string})=>{
  const { value } = useModuleStore(id)
  return (
      <div>
        <span>{id} value is:</span>
        <span>{value}</span>
      </div>
    ); 
}