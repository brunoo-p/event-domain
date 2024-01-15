import IEvent from '../../interface/event';

export default interface IEventHandler<T extends IEvent<T> = IEvent<any>>{
  handle(event: T): void;
}
