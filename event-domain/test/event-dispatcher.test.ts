import EventDispatcher from '../dispatcher';
import { EventName } from '../event/enum/eventName';
import SubmitEvent from '../event/submit';
import SubmitHandler from '../handler/submit-handler';
import { ISubmitDataEvent } from '../interface/submitDataEvent';

/* eslint-disable dot-notation */
describe('Events Domain', () => {


  it('should be able to dispatch an event to submit data to backend', () => {

    const eventDispatcher = new EventDispatcher();
    const eventHandler = new SubmitHandler();

    eventDispatcher.register(EventName.SubmitEvent, eventHandler);

    expect(eventDispatcher.getEventHandlers[EventName.SubmitEvent]).toBeDefined();
    expect(eventDispatcher.getEventHandlers[EventName.SubmitEvent].length).toEqual(1);
  
  });

  it('should notify when an event is dispatched', () => {

    const eventDispatcher = new EventDispatcher();
    const eventHandler = new SubmitHandler();
    const spyEventHandler = jest.spyOn(eventHandler, "handle");
    eventDispatcher.register(EventName.SubmitEvent, eventHandler);
    const event = new SubmitEvent<ISubmitDataEvent>({
      name: 'John Doe',
      email: 'johndoe@email.com'
    });

    eventDispatcher.notify(event);

    expect(spyEventHandler).toHaveBeenCalledTimes(1);
    expect(spyEventHandler).toHaveBeenCalledWith(event);

  });

});
