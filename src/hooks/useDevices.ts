import {useAtom} from 'jotai';
import {discovered, paired} from '../stores/BleStore';
import {Device} from '../types/types';

function useDevices() {
  const [discoveredDevices, updateDiscovered] = useAtom(discovered);
  const [pairedDevices, updatePaired] = useAtom(paired);

  const addDiscoveredDevice = (device: Device) => {
    const newDiscoveredDevices = new Map(discoveredDevices);
    newDiscoveredDevices.set(device.address, device);
    updateDiscovered(newDiscoveredDevices);
  };

  const addPairedDevice = (device: Device) => {
    const newPairedDevices = new Map(pairedDevices);
    device.isSaved = true;
    newPairedDevices.set(device.address, device);
    updatePaired(newPairedDevices);
  };

  const removePairedDevice = (device: Device) => {
    const newPairedDevices = new Map(pairedDevices);
    device.isSaved = false;
    newPairedDevices.delete(device.address);
    updatePaired(newPairedDevices);
  };
  const removeDiscoveredDevice = (device: Device) => {
    const newDiscoveredDevices = new Map(discoveredDevices);
    newDiscoveredDevices.delete(device.address);
    updateDiscovered(newDiscoveredDevices);
  };

  return {
    pairedDevices: Array.from(pairedDevices.values()),
    discoveredDevices: Array.from(discoveredDevices.values()),
    addDiscoveredDevice,
    addPairedDevice,
    removePairedDevice,
    removeDiscoveredDevice,
  };
}

export default useDevices;
