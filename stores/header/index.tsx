import { createEvent, createStore } from 'effector';

export const toggleHeader = createEvent();
export const closeHeader = createEvent();

export const headerOpened = createStore(false)
  .on(toggleHeader, (state, _) => !state)
  .on(closeHeader, (state, _) => (state = false));
