import { useEffect, useRef, useState } from "react";
import style from "./styles.module.scss";
import ImportIcon from "shared/assets/icons/import.svg?react";
import classNames from "classnames";

interface IProps {
  className?: string;
  isError?: boolean;
  placeholder?: string;
  getFiles: (files: FileList | null) => void;
}

export const FileInput: React.FC<IProps> = (props) => {
  const { className, placeholder, getFiles, isError } = props;

  const [value, setValue] = useState("");
  const refInput = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (refInput.current) getFiles(refInput.current?.files);
  }, [value]);

  const onShowFileViewerHandler = () => {
    refInput.current?.showPicker();
  };

  const mods = {
    [style.error_border]: isError,
  };

  return (
    <div onClick={onShowFileViewerHandler} className={classNames(style.wrap, className, mods)}>
      <input
        ref={refInput}
        type="file"
        onChange={(e: any) => setValue(e.target.value)}
        value={value}
        className={style.hide}
      />
      <input type="text" value={value} className={style.input} placeholder={placeholder} />
      <button className={style.right_part}>
        <ImportIcon />
      </button>
    </div>
  );
};
