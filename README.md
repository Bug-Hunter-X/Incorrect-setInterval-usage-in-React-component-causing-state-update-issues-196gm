# Incorrect setInterval Usage in React Component

This example demonstrates a common mistake when using `setInterval` within a React component to update state. The issue lies in how the `setCount` function is used inside the `setInterval` callback.  The provided code immediately invokes `setCount` and passes its return value (which is `undefined`) into `setInterval`, rather than passing a function that `setInterval` can call every 1000ms.

## Solution
The solution involves passing an anonymous function as the callback to `setInterval`, ensuring that `setCount` is called correctly each time.
