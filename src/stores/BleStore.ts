import {atom} from 'jotai';
import {Devices} from '../types/types';

// const bleStore = createStore();

const devicesHandler = (devices: any) => {
  return;
};

export const paired = atom<Devices>(
  new Map(),
  (get: any, set: any, {action, device}: any) => {
    const previousDevices = get(paired);
    if (action === 'remove') {
      previousDevices.delete(device.address);
    } else if (action === 'add') {
      previousDevices.set(device.address, device);
    }
    set(paired, new Map(previousDevices));
  },
);

export const discovered = atom<Devices>(
  new Map(),
  (get: any, set: any, {action, device}: any) => {
    const previousDevices = get(discovered);
    if (action === 'remove') {
      previousDevices.delete(device.address);
    } else if (action === 'add') {
      previousDevices.set(device.address, device);
    }
    set(discovered, new Map(previousDevices));
  },
);

export default {
  paired,
  discovered,
};
