import { v4 as uuidv4, validate } from 'uuid';

export type UUID = string;

export const isUUID = (value: unknown): value is UUID => {
  return typeof value === 'string'
    && validate(value);
}

export const generateUUID = (): UUID => {
  return uuidv4();
};
