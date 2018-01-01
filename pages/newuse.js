import Link from 'next/link'
import Router from 'next/router'

const onSubmit = (event) => {
  event.preventDefault()
  Router.push('/calendar')
}

export default () =>
  <div>
    <div className="header">
      <img src="/static/images/skp.png" className="logo" />
    </div>
    <div>
      <form>
        ชื่อ:<br/>
        <input type="text" value="" />
        <br/>
        นามสกุล:<br/>
        <input type="text" value="" />
        <br/>
        อีเมล:<br/>
        <input type="text" value="" />
        <br/>
        รหัสผ่าน:<br/>
        <input type="text" value="" />
        <br/>
        รหัสผ่านยืนยัน:<br/>
        <input type="text" value="" />
        <br/><br/>
        <button onClick={onSubmit}>
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