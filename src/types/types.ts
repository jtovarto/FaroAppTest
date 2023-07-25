export type Device = {
  name: string;
  address: string;
  isSaved: boolean;
  isConnected: boolean;
};

export type Devices = Map<string, Device>;
