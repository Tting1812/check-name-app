import Link from 'next/link'

export default () =>
  <div>
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
    </div>
    <style jsx>{`
      .header {
        background: #FDB4BF;
      }
      .logo {
        height: 100px;
        width: 100px;
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