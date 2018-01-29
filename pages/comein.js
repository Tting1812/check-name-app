import React, { Component } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import stylesheet from '../styles/index.css'

const list = [
  {
    name: '3',
    come: 1,
    late: 1,
    absent: 1,
  },
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
    Router.push('/calendar')
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
          <table className="table">
            <tr>
              <th>จำนวนนักเรียนทั้งหมด</th>
              <th>จำนวนมาเรียน</th> 
              <th>จำนวนมาสาย</th>
              <th>จำนวนขาดเรียน</th>
            </tr>
            {
              this.state.list.map(l => (
                <tr>
                  <td>{l.name}</td>
                  <td>{l.come}</td> 
                  <td>{l.late}</td>
                  <td>{l.absent}</td>
                </tr>
              ))
            }
          </table>
         </div>
         <div className= "people">
           จำนวนนักเรียนทั้งหมด 100%
         </div>
         <div className= "people">
           จำนวนนักเรียนที่มาเรียน 33.33%
         </div>
         <div className= "people">
           จำนวนนักเรียนที่มาสาย 33.33%
         </div>
         <div className= "people">
           จำนวนนักเรียนที่ขาดเรียน 33.33%
         </div>
         <button className="button" onClick={this.goto}>
            บันทึกผล
          </button>
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
            text-align: center
          }
          .people {
            font-size: 50px;
            margin-top: 40px;
          }
        `}</style>
      </div>
    )
  }
}