import IEventHandler from '../handler/interface';
import IEvent from './event';

export default interface IEventDispatcher {
  
  register(eventName: string, eventHandler: IEventHandler): void;
  notify(event: IEvent): void;

};
