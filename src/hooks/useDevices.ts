import {useAtom} from 'jotai';
import {pairedDevices, discoveredDevices} from '../stores/BleStore';
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
      action: 'add',
      device,
    });
  };

  const removePairedDevice = (device: Device) => {
    device.isSaved = false;
    updatePaired({
      action: 'remove',
      device,
    });
  };

  return {
    pairedDevices: Array.from(paired.values()),
    discoveredDevices: Array.from(discovered.values()),
    addDiscoveredDevice,
    addPairedDevice,
    removePairedDevice,
  };
}

export default useDevices;
