import { memo, useState } from "react";
import style from "./styles.module.scss";
import { Header } from "./components/header/Header";
import classNames from "classnames";
import { Sidebar } from "shared/ui/sidebar";
import { SidebarContent } from "./components/sidebar/SidebarContent";
import { useWindowSize } from "@reactuses/core";

interface IProps {
  children: React.ReactNode;
}

export const LayoutApp: React.FC<IProps> = memo((props) => {
  const { children } = props;

  const [visible, setVisible] = useState<boolean>(false);
  const { width } = useWindowSize();

  return (
    <div className={classNames(style.layout)}>
      {width < 1140 && <Header burgerMenuClick={() => setVisible(true)} />}
      <Sidebar isVisible={visible} onClosed={() => setVisible(false)}>
        <SidebarContent className={style.sidebar}/>
      </Sidebar>
      <div className={style.content}>
        {width > 1140 && <SidebarContent />}
        {children}
      </div>
    </div>
  );
});
