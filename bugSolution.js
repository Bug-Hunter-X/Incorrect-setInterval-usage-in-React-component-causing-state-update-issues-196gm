```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1); // Correct usage
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup
  }, []);

  return <div>Count: {count}</div>;
}
```