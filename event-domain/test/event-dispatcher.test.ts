import EventDispatcher from '../dispatcher';
import SubmitEvent from '../event/submit';
import SubmitHandler from '../handler/submit-handler';

/* eslint-disable dot-notation */
describe('Events Domain', () => {


  it('should be able to dispatch an event to submit data to backend', () => {

    const eventDispatcher = new EventDispatcher();
    const eventHandler = new SubmitHandler();

    eventDispatcher.register('SubmitEvent', eventHandler);

    expect(eventDispatcher.getEventHandlers['SubmitEvent']).toBeDefined();
    expect(eventDispatcher.getEventHandlers['SubmitEvent'].length).toEqual(1);
  
  });

  it('should notify when an event is dispatched', () => {

    const eventDispatcher = new EventDispatcher();
    const eventHandler = new SubmitHandler();
    const spyEventHandler = jest.spyOn(eventHandler, 'handle');
    eventDispatcher.register('SubmitEvent', eventHandler);
    const event = new SubmitEvent({
      name: 'John Doe',
      email: 'johndow@email.com'
    });

    eventDispatcher.notify(event);

    expect(spyEventHandler).toHaveBeenCalledTimes(1);
    expect(spyEventHandler).toHaveBeenCalledWith(event);

  });

});
