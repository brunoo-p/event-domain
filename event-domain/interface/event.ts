export default interface IEvent<T=any> {

  dateTimeOcurred: Date;
  eventData: T;

};
