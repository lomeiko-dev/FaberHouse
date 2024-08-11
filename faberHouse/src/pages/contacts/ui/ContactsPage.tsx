
import { ContactList } from "widgets/contacts";
import { Page } from "../../components/page";
import { BlockSection } from "shared/ui/block-section";

const ContactsPage = () => {
  return (
    <Page isDefaultComponents name="Контакты">
      <BlockSection>
          <ContactList />
      </BlockSection>
    </Page>
  );
};

export default ContactsPage;
