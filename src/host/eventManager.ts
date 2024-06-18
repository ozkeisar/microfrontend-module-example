// events.ts
import mitt from 'mitt';
import { Events } from '../types';


// Create an event emitter instance
export const eventManager = mitt<Events>();
