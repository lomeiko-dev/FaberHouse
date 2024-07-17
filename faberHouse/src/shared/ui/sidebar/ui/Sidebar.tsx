import { Suspense, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import style from "./styles.module.scss";
import classNames from "classnames";

interface IProps {
  isVisible: boolean;
  onClosed: () => void;
  children: React.ReactNode;
  lazy?: boolean;
  fallback?: React.ReactNode;
}

export const Sidebar: React.FC<IProps> = (props) => {
  const { isVisible, onClosed, children, lazy, fallback } = props;

  const [isMounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    if (isVisible) {
      setMounted(true);
    }
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      window.addEventListener("keydown", onKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isVisible]);

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClosed();
    }
  };

  if (lazy && !isMounted) {
    return;
  }

  const mods = {
    [style.overlay_show]: isVisible,
  };

  return (
    <>
      {createPortal(
        <Suspense fallback={fallback === undefined ? "loading..." : fallback}>
          <div className={classNames(style.overlay, mods)}>
            <div className={style.side}>
              <button onClick={onClosed} className={style.cross}>
                <div>
                  <span className={style.line}></span>
                  <span className={style.line}></span>
                </div>
              </button>
              {children}
            </div>
          </div>
        </Suspense>,
        document.body
      )}
    </>
  );
};
