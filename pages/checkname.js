import React, { Component } from 'react'
import Link from 'next/link'

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
export default class CheckName extends Component {
  come = () => {

  }

  render () {
    return (
      <div>
        <div className="name">
          hhjgggh
        </div>
        <div>
          <button className="buttonc" onClick={this.come}>
            มา
          </button>
        </div>
        
        <div>
          <button className="buttonl" onClick={this.late}>
          สาย
          </button>
        </div>

        <div>
          <button className="buttona" onClick={this.absent}>
          ขาด
          </button>
        </div>

        <style jsx>{`
          .buttonc {
            font-size: 70px;
            margin-top: 30px;
            height: 100px;
            width: 200px;
            display: block;
            margin: 0 auto;
          }
          .buttonl {
            font-size: 70px;
            margin-top: 30px;
            height: 100px;
            width: 200px;
            display: block;
            margin: 0 auto;
          }
          .buttona {
            font-size: 70px;
            margin-top: 30px;
            height: 100px;
            width: 200px;
            display: block;
            margin: 0 auto;
          }
          .name {
            font-size: 100px;
            margin-top: 70px;
            height: 300px;
            width: 300px;
            display: block;
            margin: 0 auto;
        `}</style>
      </div>
    )
  }
};
