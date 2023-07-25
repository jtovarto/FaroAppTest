import {useAtom} from 'jotai';
import {pairedDevices, discoveredDevices, ACTIONS} from '../stores/BleStore';
import {Device} from '../types/types';

function useDevices() {
  const [discovered, updateDiscovered] = useAtom(discoveredDevices);
  const [paired, updatePaired] = useAtom(pairedDevices);

  const addDiscoveredDevice = (device: Device) => {
    device.isSaved = false;
    updateDiscovered({
      action: 'add',
      device,
    });
  };

  const addPairedDevice = (device: Device) => {
    device.isSaved = true;
    updatePaired({
      action: ACTIONS.ADD,
      device,
    });
  };

  const removePairedDevice = (device: Device) => {
    device.isSaved = false;
    updatePaired({
      action: ACTIONS.REMOVE,
      device: device.address,
    });
  };

  const updatePairedDevice = (deviceId: string, payload: Partial<Device>) => {
    updatePaired({
      action: ACTIONS.UPDATE,
      deviceId,
      payload,
    });
  };

  return {
    pairedDevices: Array.from(paired.values()),
    discoveredDevices: Array.from(discovered.values()),
    addDiscoveredDevice,
    addPairedDevice,
    removePairedDevice,
    updatePairedDevice,
  };
}

export default useDevices;
