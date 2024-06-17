// events.ts
import mitt from 'mitt';


//from types package 
type Events = {
    updateEnable: {num: number};
};
  

// Create an event emitter instance
export const eventManager = mitt<Events>();
