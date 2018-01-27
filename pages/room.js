import React, { Component } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import stylesheet from '../styles/index.css'

const list = [
  {
    name: 'นายสมชาย แก้วบุญ',
    come: true,
    late: false,
    absent: false,
  },
  {
    name: 'นางสาวสมหญิง แก้วบุญ',
    come: false,
    late: false,
    absent: true,
  }
]

export default class Check extends Component {
  state = {
    name: '',
    list,
  }
  
  onChangeTab = routeName => () => {
    Router.push(`/${routeName}`)
  }

  goto = () => {
    Router.push('/checkname')
  }

  onChangeName = e => {
    this.setState({ name: e.target.value })
  }

  addName = () => {
    this.setState(prevState => {
      const data = {
        name: this.state.name,
        come: false,
        late: false,
        absent: false,
      }
      const list = [...prevState.list , data]
      return { list }
    })
  }

  render () {  
    return (
      <div>
        <style dangerouslySetInnerHTML={{__html: stylesheet}} />
        <div className="header">
          <img src="/static/images/skp.png" className="logo" />
        </div>
        <div className="tabs">
          <div className="tab" onClick={this.onChangeTab('calendar')}>
            ปฏิทิน
          </div>
          <div className="tab action" onClick={this.onChangeTab('check')}>
            เช็ครายชื่อ
          </div>
        </div>
        <div>
          <input className="input" value={this.state.name} onChange={this.onChangeName} />
          <button className="button" onClick={this.addName}>
            +เพิ่มชื่อ
          </button>
        </div>
        <div>
          <table className="table">
            <tr>
              <th>รายชื่อ</th>
              <th>มาเรียน</th> 
              <th>มาสาย</th>
              <th>ขาดเรียน</th>
            </tr>
            {
              this.state.list.map(l => (
                <tr>
                  <td>{l.name}</td>
                  <td style={l.come ? {backgroundColor: 'green'} : {}} /> 
                  <td style={l.late ? {backgroundColor: 'yellow'} : {}} />
                  <td style={l.absent ? {backgroundColor: 'red'} : {}} />
                </tr>
              ))
            }
          </table>
          <button className="button" onClick={this.goto}>
            เช็คชื่อ
          </button>
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
          .tabs{
            display: flex;
            flex-director: row;
          }
          .tab {
            width: 50%;
            text-align: center;
            background: #A4C8F0;
            margin-top: 3px;
            font-size: 50px;
          }
          .tab:nth-child(1) {
            margin-right: 3px;
          }
          .tab:nth-child(2) {
            margin-left: 3px;
          }
          .action {
            background: blue;
            color: white;
          }
          .button {
            font-size: 50px;
            margin-top: 70px;
          }
          .input{
            font-size: 50px;
          }
          .table {
            width: 100%;
            margin-top: 40px;
          }
          .table tr {
            font-size: 50px;
          }
          table, th, td {
            border: 1px solid black;
            border-collapse: collapse;
          }
          th, td {
              padding: 15px;
          }
        `}</style>
      </div>
    )
  }
}