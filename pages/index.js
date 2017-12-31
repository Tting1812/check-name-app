import Link from 'next/link'

export default () =>
  <div>
    <div className="header">
      <img src="/static/images/skp.png" className="logo" />
      <div className="btn">
        <Link href="/newuse">
          <button>
            สมัครชื่อผู้ใช้
          </button> 
        </Link>
        <button>
          ลงชื่อเข้าใช้
        </button> 
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
      .btn {
        text-align: right;
      }
    `}</style>
  </div>