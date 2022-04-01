import Link from "next/link";
import style from "common/style/Nav.module.css";


export default function Game(){
  return (
    <nav>
      <ul>
        <li className={style.li}> <Link href='/game/game-list'>GameList</Link> </li>
        <li className={style.li}> <Link href='/game/team-list'>TeamList</Link> </li>
      </ul>
    </nav>
    );
};