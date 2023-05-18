import {useAtom} from 'jotai';
import {discovered, paired} from '../stores/BleStore';
import {Device} from '../types/types';

function useDevices() {
  const [discoveredDevices, updateDiscovered] = useAtom(discovered);
  const [pairedDevices, updatePaired] = useAtom(paired);

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
    pairedDevices: Array.from(pairedDevices.values()),
    discoveredDevices: Array.from(discoveredDevices.values()),
    addDiscoveredDevice,
    addPairedDevice,
    removePairedDevice,
  };
}

export default useDevices;
