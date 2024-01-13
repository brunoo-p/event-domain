/* eslint-disable class-methods-use-this */
import IEventHandler from '../handler/interface';
import IEventDispatcher from '../interface/dispatcher';
import EventInterface from '../interface/event';

export default class EventDispatcher implements IEventDispatcher {

  private eventHandlers: { [eventName: string]: IEventHandler[] } = {};

  get getEventHandlers(): { [eventName: string]: IEventHandler[] } {

    return this.eventHandlers;

  }

  register(eventName: string, eventHandler: IEventHandler): void {
        
    if (!this.eventHandlers[eventName]) this.eventHandlers[eventName] = [];
  
    this.eventHandlers[eventName].push(eventHandler);

  }
  
  notify(event: EventInterface): void {
        
    const eventName = event.constructor.name;
    if (this.eventHandlers[eventName]) this.eventHandlers[eventName].forEach((handler) => handler.handle(event));
  
  }

}
