```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly using a callback function directly in setInterval
    setInterval(setCount(count + 1), 1000); 
  }, []);

  return <div>Count: {count}</div>;
}
```