# Alpha-Web-Project-12226
Respect work, respect time = respect yourself
import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password });
    // បន្ថែម Logic បាញ់ទៅកាន់ Backend នៅទីនេះ
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginBox}>
        <h1 style={styles.logo}>NOVEL TOON</h1>
        <p style={styles.subtitle}>សូមចូលប្រើប្រាស់ដើម្បីអានរឿងដែលអ្នកចូលចិត្ត</p>
        
        <form onSubmit={handleLogin}>
          <input 
            type="text" 
            placeholder="អ៊ីមែល ឬ លេខទូរសព្ទ" 
            style={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input 
            type="password" 
            placeholder="លេខសម្ងាត់" 
            style={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" style={styles.loginBtn}>ចូលប្រើប្រាស់</button>
        </form>

        <div style={styles.links}>
          <a href="#forgot" style={styles.link}>ភ្លេចលេខសម្ងាត់?</a>
        </div>

        <hr style={styles.hr} />

        <button style={styles.createBtn}>បង្កើតគណនីថ្មី</button>
      </div>
    </div>
  );
};

// ស្ទីលបែប Black & White
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#000000', // ខ្មៅងងឹត
    fontFamily: 'sans-serif',
  },
  loginBox: {
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '12px',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
    boxShadow: '0 10px 25px rgba(255, 255, 255, 0.1)',
  },
  logo: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#000000',
    margin: '0 0 10px 0',
    letterSpacing: '2px',
  },
  subtitle: {
    color: '#666',
    fontSize: '14px',
    marginBottom: '30px',
  },
  input: {
    width: '100%',
    padding: '12px 15px',
    marginBottom: '15px',
    border: '1px solid #000',
    borderRadius: '8px',
    fontSize: '16px',
    boxSizing: 'border-box',
  },
  loginBtn: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#000000',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '10px',
  },
  links: {
    marginTop: '15px',
  },
  link: {
    color: '#000',
    fontSize: '14px',
    textDecoration: 'none',
  },
  hr: {
    margin: '25px 0',
    border: '0',
    borderTop: '1px solid #eee',
  },
  createBtn: {
    backgroundColor: '#ffffff',
    color: '#000',
    border: '2px solid #000',
    padding: '10px 20px',
    borderRadius: '8px',
    fontWeight: 'bold',
    cursor: 'pointer',
  }
};

export default LoginPage;
