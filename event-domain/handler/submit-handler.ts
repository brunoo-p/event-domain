/* eslint-disable class-methods-use-this */
import SubmitEvent from '../event/submit';
import IEvent from '../interface/event';
import IEventHandler from './interface';

export default class SubmitHandler implements IEventHandler<IEvent> {
  
  handle(event: SubmitEvent): void {

    console.log('SubmitHandler.handle', event);
  
  }

}
