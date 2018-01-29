import React, { Component } from 'react'
import Link from 'next/link'
import Router from 'next/router'

const list = [
  {
    name: 'นายสมชาย แก้วบุญ',
    come: true,
    late: false,
    absent: false,
  },
  {
    name: 'นางสาวสมหญิง เสกสรรค์',
    come: false,
    late: false,
    absent: true,
  },
  {
    name: 'นางสาวสายใย อุ่นรักษ์',
    come: false,
    late: true,
    absent: false,
  },
]
export default class CheckName extends Component {
  state = {
    index: 0
  }
  come = () => {
    this.setState(prevState => {
      if (prevState.index + 1 < list.length) {
        return { index: prevState.index + 1 }
      } else {
        Router.push('/comein')
      }
    })
  }

  render () {
    return (
      <div>
        <div className="name">
          {list[this.state.index].name}
        </div>
        <div className="bbtt">
          <button className="buttonc" onClick={this.come}>
            มา
          </button>
        </div>
      
        <div className="bbtt">
          <button className="buttonl" onClick={this.late}>
          สาย
          </button>
        </div>

        <div className="bbtt">
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
            font-size: 50px;
            margin-top: 100px;
            height: 100px;
            width: 400px;
            margin: 0 auto;
          }

          .bbtt {
            margin-top: 40px;
          }
        `}</style>
      </div>
    )
  }
};
