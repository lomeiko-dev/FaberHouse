import style from "./styles.module.scss";
import { ContactList } from "widgets/contacts";
import { Container } from "shared/ui/container";
import { Guarantees } from "widgets/guarantees";
import { About } from "widgets/about";
import HouseIcon from "shared/assets/icons/house.svg?react";

const ContactsPage = () => {
  return (
    <div className={style.page}>
      <Container>
        <div className={style.header}>
          <HouseIcon className={style.icon} />
          <h2>Контакты</h2>
        </div>
      </Container>
      <div className={style.list_wrap}>
        <Container>
          <ContactList />
        </Container>
      </div>
      <Container>
        <Guarantees />
        <About />
      </Container>
    </div>
  );
};

export default ContactsPage;
