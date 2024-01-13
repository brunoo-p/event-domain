import IEvent from '../../interface/event';

export default interface IEventHandler<
  T extends IEvent = IEvent
>{

  handle(event: T): void;
  
}
