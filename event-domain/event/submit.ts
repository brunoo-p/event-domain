import EventInterface from '../interface/event';

export default class SubmitEvent implements EventInterface {

  dateTimeOcurred: Date;

  eventData: any;

  constructor(eventData: any) {
  
    this.dateTimeOcurred = new Date();
    this.eventData = eventData;

  }

}
