import { memo, useState } from "react";
import style from "./styles.module.scss";
import { Header } from "./components/header/Header";
import classNames from "classnames";
import { Sidebar } from "primereact/sidebar";
import { SidebarContent } from "./components/sidebar/SidebarContent";

interface IProps {
  children: React.ReactNode;
}

export const LayoutApp: React.FC<IProps> = memo((props) => {
  const { children } = props;

  const [visible, setVisible] = useState<boolean>(false)

  return (
    <div className={classNames(style.layout)}>
      <Header burgerMenuClick={() => setVisible(true)}/>
      <Sidebar visible={visible} onHide={() => setVisible(false)}>
        <SidebarContent/>
      </Sidebar>
      {children}
    </div>
  );
});
