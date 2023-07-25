/* eslint-disable curly */
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
      action: ACTIONS.ADD;
      device: Partial<Device> & {address: string};
    }
  | {
      action: ACTIONS.REMOVE;
      device: string;
    }
  | {
      action: ACTIONS.UPDATE;
      deviceId: string;
      payload: Partial<Device>;
    };

export const pairedDevices = atom(
  get => get(paired),
  (get, set, payload: Payload) => {
    const devices = new Map(get(paired));

    switch (payload.action) {
      case ACTIONS.ADD:
        if (devices.has(payload.device.address)) return;
        devices.set(payload.device.address, payload.device as Device);
        break;
      case ACTIONS.REMOVE:
        if (!devices.has(payload.device)) return;
        console.log('remove', payload.device);
        devices.delete(payload.device);
        break;
      case ACTIONS.UPDATE:
        if (!devices.has(payload.deviceId)) return;
        const uDevice = devices.get(payload.deviceId);

        devices.set(payload.deviceId, {
          ...uDevice,
          ...payload.payload,
        } as Device);

        break;
      default:
        break;
    }

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
