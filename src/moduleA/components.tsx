import React from 'react';
import { useModuleStore } from './store';


interface InputFieldProps {
    value: string;
    onChange: (value: string) => void;
}
  

export const ModuleComponent = ({value, onChange}:InputFieldProps)=>{
    const { isEnabled } = useModuleStore()
    return (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
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