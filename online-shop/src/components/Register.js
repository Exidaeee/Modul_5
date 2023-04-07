import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const user = { username, password };
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const existingUser = users.find((u) => u.username === username);
      if (existingUser) {
        setErrorMessage('Користувач з таким іменем вже існує');
      } else {
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        history.push('/login');
      }
    }
  };

  const validateForm = () => {
    if (!username.trim() || !password.trim() || !confirmPassword.trim()) {
      setErrorMessage('Будь ласка, заповніть всі поля');
      return false;
    }
    if (password !== confirmPassword) {
      setErrorMessage('Паролі не співпадають');
      return false;
    }
    return true;
  };

  return (
    <div>
      <h2>Реєстрація нового користувача</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Логін:</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Пароль:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <label htmlFor="confirmPassword">Підтвердіть пароль:</label>
          <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <button type="submit">Зареєструватись</button>
      </form>
      <p>Вже маєте аккаунт? <a href="/login">Увійти</a></p>
    </div>
  );
};

export default Register;
