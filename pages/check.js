import React, { Component } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import stylesheet from '../styles/index.css'

export default class Check extends Component {
  state = {
    name: '',
    rooms: []
  }
  
  onChangeTab = routeName => () => {
    Router.push(`/${routeName}`)
  }

  onChangeRoomName = e => {
    this.setState({ name: e.target.value })
  }

  gotoRoom= () => {
    Router.push('/room')
  }
  addRoom = () => {
    this.setState(prevState => {
      const rooms = [...prevState.rooms, this.state.name]
      return { rooms }
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
          <input className="input" value={this.state.name} onChange={this.onChangeRoomName} />
          <button className="button" onClick={this.addRoom}>
            +เพิ่มห้อง
          </button>
        </div>
        <div>
          {
            this.state.rooms.map((room, i) => 
              <div key={i} className="room"onClick={this.gotoRoom}>{room}</div>
            )
          }
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
          .room{
            font-size: 60px;
            margin-top: 40px;
          }
        `}</style>
      </div>
    )
  }
}