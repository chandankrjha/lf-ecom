import React from 'react'
 
class Login extends React.Component {
  handleChange = (e, key) => {
    this.setState({
      [key]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.username.value, this.password.value)
    console.log(this.state);
  }

  render() {
    const { handleSubmit, handleChange } = this;
    return (<form onSubmit={(e) => handleSubmit(e)} className="form-grid">
      <div >
        <input type='text' ref={(node) => this.username = node}/>
      </div>

      <div>
        <input type="password" ref={(node) => this.password = node}/>
      </div>
      <button type="submit">Submit</button>
    </form>)
  }
}

export default Login;