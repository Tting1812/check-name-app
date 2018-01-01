import Link from 'next/link'

export default () =>
  <div>
    <div className="header">
      <img src="/static/images/skp.png" className="logo" />
      <div className="btns">
        <Link href="/newuse">
          <button className="btn">
            สมัครชื่อผู้ใช้
          </button> 
        </Link>
        <Link href="/login">
          <button className="btn">
            ลงชื่อเข้าใช้
          </button> 
        </Link>
      </div>
    </div>
    <div>
    <img src="/static/images/cat.png" className="cat" />
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
      .btns {
        text-align: right;
      }
      .btn {
        font-size: 45px;
      }
      .cat {
        height: 800px;
        display: block;
        margin: 0 auto;
      }
    `}</style>
  </div>