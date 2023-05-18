export type Device = {
  name: string;
  address: string;
  isSaved: boolean;
};

export type Devices = Map<string, Device>;
