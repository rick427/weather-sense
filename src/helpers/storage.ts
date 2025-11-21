import { MMKVLoader } from "react-native-mmkv-storage";
import { StateStorage } from 'zustand/middleware';

const MMKV = new MMKVLoader()
    .withInstanceID("weathrSense")
    .withEncryption()
    .initialize();

export const zustandStorage:StateStorage = {
    setItem: (name, value) => {
        MMKV.setString(name, value);
        return Promise.resolve();
    },
    getItem: async (name) => {
        const value = MMKV.getString(name);
        return Promise.resolve(value ?? null);
    },
    removeItem: (name) => {
        MMKV.removeItem(name);
        return Promise.resolve();
    },
};