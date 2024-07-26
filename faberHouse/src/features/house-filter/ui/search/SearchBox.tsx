import { useState } from "react";
import style from "../styles.module.scss";
import SearchIcon from "shared/assets/icons/search.svg?react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { changeSearchString } from "features/house-filter/model";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "shared/config/route-path";

export const SearchBox = () => {
  const [value, setValue] = useState("");

  const dispatch = useAppDispatch()
  const navigator = useNavigate()

  const searcHandler = () => {
    dispatch(changeSearchString(`q=${value}`))
    navigator(RoutePath.PROJECTS.path)
  }

  return (
    <div className={style.wrapper}>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Поиск" />
      <button onClick={searcHandler}>
        <SearchIcon />
      </button>
    </div>
  );
};
