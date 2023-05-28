import {atom} from 'jotai';
import {Device, Devices} from '../types/types';

const paired = atom<Devices>(new Map());
const discovered = atom<Devices>(new Map());

export enum ACTIONS {
  ADD = 'add',
  REMOVE = 'remove',
  UPDATE = 'update',
}

export type Payload =
  | {
      action: ACTIONS.ADD | ACTIONS.UPDATE;
      device: Partial<Device> & {address: string};
    }
  | {
      action: ACTIONS.REMOVE;
      device: string;
    };

export const pairedDevices = atom(
  get => get(paired),
  (get, set, {action, device}) => {
    const devices = new Map(get(paired));

    switch (action) {
      case ACTIONS.ADD:
        if (devices.has(device.address)) return;
        devices.set(device.address, device);
        break;
      case ACTIONS.REMOVE:
        if (!devices.has(device)) return;
        console.log('remove', device);
        devices.delete(device.address);
        break;
      case ACTIONS.UPDATE:
        if (!devices.has(device.address)) return;
        devices.set(device.address, device);
        break;
      default:
        break;
    }

    console.log('pairedDevices', action, device);
    set(paired, devices);
  },
);

export const discoveredDevices = atom(
  get => get(discovered),
  (get, set, {action, device}) => {
    const previousDevices = get(discovered);

    if (previousDevices?.has(device.address)) {
      return;
    }

    if (action === 'remove') {
      previousDevices?.delete(device.address);
    } else if (action === 'add') {
      previousDevices?.set(device.address, device);
    }
    set(discovered, new Map(previousDevices));
  },
);

export default {
  pairedDevices,
  discoveredDevices,
};
