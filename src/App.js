import React, { useState } from "react";

const allItems = [
  { id: "beaming", value: "😄", isSmile: true },
  { id: "grinning", value: "😃", isSmile: true },
  { id: "squinting", value: "😆", isSmile: true },
  { id: "winking", value: "😉", isSmile: true },
  { id: "sad", value: "😢", isSmile: false },
];

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [items, setItems] = useState(allItems);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const removeItem = (itemId) => {
    setItems(items.filter((item) => item.id !== itemId));
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="container">
      <h1>Smileys</h1>
      <div className="loginControl">
        {isLoggedIn ? (
          <button onClick={handleLogout}>Log Out</button>
        ) : (
          <button onClick={handleLogin}>Log In</button>
        )}
      </div>
      <div>
        {isLoggedIn && (
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <button onClick={() => removeItem(item.id)}>remove</button>
                <label htmlFor={`${item.id}-input`}>
                  {item.value} {item.id}
                </label>
                <input
                  id={`${item.id}-input`}
                  type="text"
                  defaultValue={item.id}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
      {String(isLoggedIn)}
    </div>
  );
}

export default App;
