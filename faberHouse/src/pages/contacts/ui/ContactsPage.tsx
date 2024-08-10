import style from "./styles.module.scss";
import { ContactList } from "widgets/contacts";
import { Container } from "shared/ui/container";
import { Page } from "../../components/page";

const ContactsPage = () => {
  return (
    <Page isDefaultComponents name="Контакты">
      <div className={style.list_wrap}>
        <Container>
          <ContactList />
        </Container>
      </div>
    </Page>
  );
};

export default ContactsPage;
