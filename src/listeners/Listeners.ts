import BleManager, {Peripheral} from 'react-native-ble-manager';
import {Device} from '../types/types';

const supportedDevices = [
  'UNIT1 FARO',
  'U1SMARTLIGHT',
  'NAVIGATION-REMOTE',
  'STROMER SMART H',
];

type DiscoveredCB = (device: Device) => void;
export function handleDiscoverPeripheral(discoverCB: DiscoveredCB) {
  return ({name, id}: Peripheral) => {
    if (name && supportedDevices.includes(name)) {
      discoverCB({
        name: name,
        address: id,
        isSaved: false,
        isConnected: false,
      });
    }
  };
}

type UpdatedCB = (deviceId: string, payload: Partial<Device>) => void;
export function handleConnectPeripheralconst(updatedCB: UpdatedCB) {
  return ({peripheral}: any) => {
    console.log('Connected to', peripheral);
    BleManager.retrieveServices(peripheral).then(() => {
      updatedCB(peripheral, {isConnected: true, isSaved: true});
    });
  };
}
