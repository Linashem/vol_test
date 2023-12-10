import Link from "next/link";
import React from "react";
import style from "./Header.module.scss";

export default function Header() {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <Link href={"/"}>
          <div className={style.logo}>Волонтеры</div>
        </Link>
        <ul className={style.list}>
          <li className={style.item}>
            <Link href={"/"}>Команда</Link>
          </li>
          <li className={style.item}>
            <Link href={"/workArea"}>Рабочая область</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
