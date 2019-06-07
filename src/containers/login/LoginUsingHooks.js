import React, {useState} from 'react';

function Login() {
  const [username, setName] = useState('username');
  const [password, setPassword] = useState('password');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password)
  }
  return (<form onSubmit={(e) => handleSubmit(e)} className="form-grid">
  <div >
    <input type='text'  onChange={(e) => setName(e.target.value)}/>
  </div>

  <div>
    <input type="password" onChange={(e) => setPassword(e.target.value)}/>
  </div>
  <button type="submit">Submit</button>
</form>)
}

export default Login;