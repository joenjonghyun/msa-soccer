import Link from "next/link";
import style from "common/style/Nav.module.css";


export default function User(){
  return (
    <nav>
      <ul>
        <li className={style.li}> <Link href='/user/login'>로그인</Link> </li>
        <li className={style.li}> <Link href='/user/join'>회원가입</Link> </li>
        <li className={style.li}> <Link href='/user/user-list'>회원목록</Link> </li>
      </ul>
    </nav>
    );
};