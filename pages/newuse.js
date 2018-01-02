import React, { Component } from 'react'
import Link from 'next/link'
import Router from 'next/router'

export default class NewUse extends Component {
  state = {
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    confirmPassword: '',
  }

  onChangeData = name => event => {
    const value = event.target.value
    this.setState({ [name]: value })
  }
  onSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
    Router.push('/calendar')
  }

  render () {
    return (
      <div>
        <div className="header">
          <img src="/static/images/skp.png" className="logo" />
        </div>
        <div>
          <form>
            ชื่อ:<br/>
            <input type="text" value={this.state.firstname} onChange={this.onChangeData('firstname')} />
            <br/>
            นามสกุล:<br/>
            <input type="text" value={this.state.lastname} onChange={this.onChangeData('lastname')} />
            <br/>
            อีเมล:<br/>
            <input type="text" value={this.state.email} onChange={this.onChangeData('email')} />
            <br/>
            รหัสผ่าน:<br/>
            <input type="text" value={this.state.password} onChange={this.onChangeData('password')} />
            <br/>
            รหัสผ่านยืนยัน:<br/>
            <input type="text" value={this.state.confirmPassword} onChange={this.onChangeData('confirmPassword')} />
            <br/><br/>
            <button onClick={this.onSubmit}>
              สมัคร
            </button>
          </form> 
        </div>
        <style jsx>{`
          .header {
            background: #FDB4BF;
          }
          .logo {
            height: 300px;
            width: 300px;
            display: block;
            margin: 0 auto;
          }
          .btn {
            text-align: right;
          }
          form {
            font-size: 45px;
          }
          input {
            font-size: 45px;
          }
          button {
            font-size: 45px;
          }
        `}</style>
      </div>
    )
  }
}