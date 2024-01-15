/* eslint-disable class-methods-use-this */
import SubmitEvent from '../event/submit';
import IEvent from '../interface/event';
import IEventHandler from './interface';

export default class SubmitHandler<T extends SubmitEvent<T>> implements IEventHandler<SubmitEvent<T>> {
  
  handle(event: SubmitEvent<T>): void {

    console.log('SubmitHandler.handle', event);
  
  }

}
