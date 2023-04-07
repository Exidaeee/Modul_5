import React, { useState } from 'react';

const Login = ({ handleLogin, handleRedirectToRegisterPage }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const isLoggedIn = handleLoginRequest(username, password);
    if (isLoggedIn) {
      handleLogin();
    } else {
      alert('Неправильний логін або пароль');
    }
  };

  const handleLoginRequest = (username, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((user) => user.username === username && user.password === password);
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    }
    return false;
  };
  

  return (
    <div>
      <h2>Увійти до системи</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Логін:</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Пароль:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Увійти</button>
      </form>
      <p>Не маєте аккаунту? <a href="#" onClick={handleRedirectToRegisterPage}>Зареєструватись</a></p>
    </div>
  );
};

export default Login;