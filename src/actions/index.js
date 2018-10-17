export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RANDOM_NUMBER = 'RANDOM_NUMBER';

export function increment() {
  return {
    type: INCREMENT
  };
}

export function decrement() {
  return {
    type: DECREMENT
  };
}

export function random_number() {
  return {
    type: RANDOM_NUMBER
  };
}