import { atom } from "recoil";

interface UserToken {
  token: string;
}

export interface UserState {
  id?: string;
  email?: string;
  createdAt?: string;
  profileImage?: string[];
}

export const userToken = atom<UserToken | null>({
  key: 'Token',
  default: null,
});

export const userState = atom<UserState | null>({
  key: 'User',
  default: null,
});