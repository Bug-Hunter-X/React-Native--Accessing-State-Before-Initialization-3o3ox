# React Native: Accessing State Before Initialization

This repository demonstrates a common error in React Native: accessing state variables before they've been initialized. This can lead to unexpected behavior or app crashes.

## Problem

The `bug.js` file contains a component that attempts to access the `count` state variable inside the `incrementCount` function before it's been initialized. This results in `count` potentially being `undefined`, leading to errors.

## Solution

The `bugSolution.js` file shows the corrected code.  The solution ensures the `count` state variable is only accessed after the component has mounted and the state has been properly initialized.  This is achieved by using the `useEffect` hook to ensure state access only after initial render.

## How to reproduce

1. Clone this repository.
2. Run `npx react-native run-android` or `npx react-native run-ios`.
3. Observe the console logs and the behavior of the increment button in `bug.js`.  You will see the error. Then compare with the `bugSolution.js`