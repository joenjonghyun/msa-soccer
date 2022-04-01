
import Link from "next/link";
import style from "common/style/Nav.module.css";


export default function Basic(){
  return (
    <nav>
      <ul>
        <li className={style.li}> <Link href='/basic/calc'>Calc</Link> </li>
        <li className={style.li}> <Link href='/basic/counter'>Counter</Link> </li>
        <li className={style.li}> <Link href='/basic/bmi'>BMI</Link> </li>
      </ul>
    </nav>
    );
};