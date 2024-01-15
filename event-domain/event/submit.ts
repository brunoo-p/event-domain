import IEvent from '../interface/event';

export default class SubmitEvent<T> implements IEvent<T> {

  dateTimeOcurred: Date;

  eventData: T;

  constructor(eventData: T) {
  
    this.dateTimeOcurred = new Date();
    this.eventData = eventData;

  }

}
