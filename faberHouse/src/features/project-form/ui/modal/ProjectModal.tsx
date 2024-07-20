import { Dialog } from "primereact/dialog";
import { Header } from "../components/header/Header";
import style from "../styles.module.scss";
import { useState } from "react";
import { ProjectFrom } from "../form/ProjectForm";

interface IProps {
  onSubmit: (value: boolean) => void;
}

export const ProjectModal: React.FC<IProps> = (props) => {
  const { onSubmit } = props;
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div onClick={() => setShowModal(true)} className={style.wrap_mini}>
        <Header />
      </div>
      <Dialog visible={showModal} onHide={() => setShowModal(false)}>
        <ProjectFrom isMobile onSubmit={onSubmit} />
      </Dialog>
    </>
  );
};
