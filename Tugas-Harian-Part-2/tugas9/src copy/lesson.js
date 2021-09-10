import React, { useState, useEffect } from 'react';

const Lesson = () => {
  const [count, setCount] = useState(0);

  // Mirip dengan componentDidMount dan componentDidUpdate:
  useEffect(() => {

    // Memperbarui judul dokumen menggunakan API browser
    document.title = "You clicked " + count + " times";
  });

  const handleClick = () => setCount(count + 1)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>
        Click me
      </button>
    </div>
  );
}

export default Lesson