import {atom, createStore} from 'jotai';
import {Devices} from '../types/types';

// const bleStore = createStore();

export const paired = atom<Devices>(new Map(), (get, set, update) => {
  set(paired, new Map(update));
});

export const discovered = atom<Devices>(
  [
    {
      name: 'Device 1',
      address: '00:00:00:00:00:01',
      isSaved: false,
    },
  ],
  (get, set, update) => {
    set(discovered, new Map(update));
  },
);

// myStore.set(countAtom, 1);
// const unsub = myStore.sub(countAtom, () => {
//   console.log('countAtom value is changed to', myStore.get(countAtom));
// });

export default {
  discovered,
  paired,
};
