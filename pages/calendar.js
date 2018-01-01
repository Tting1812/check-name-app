import React, { Component } from 'react'
import Link from 'next/link'
import Calendar from 'react-calendar'
import moment from 'moment'
import stylesheet from '../styles/index.css'

export default class CalendarPage extends Component {
  state = {
    date: moment().format()
  }
  
  onChange = date => this.setState({ date })

  render () {  
    return (
      <div>
        <style dangerouslySetInnerHTML={{__html: stylesheet}} />
        <div className="header">
          <img src="/static/images/skp.png" className="logo" />
        </div>
        <div className="tabs">
          <div className="tab action">
            ปฏิทิน
          </div>
          <div className="tab">
            เช็ครายชื่อ
          </div>
        </div>
        <div>
          <Calendar
            onChange={this.onChange}
            value={this.state.date}
            className="calendar"
          />
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
        `}</style>
      </div>
    )
  }
}