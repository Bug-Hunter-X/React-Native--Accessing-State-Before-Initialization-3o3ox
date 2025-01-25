import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  useEffect(() => {
    console.log('Component mounted!', count);
  }, [count]);

  return (
    <View>
      <Text>{count}</Text>
      <Button title="Increment" onPress={incrementCount} />
    </View>
  );
};

export default MyComponent;