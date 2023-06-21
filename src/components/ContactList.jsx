import { ContactItem } from './ContactItem';
import { List } from 'Styles/StyleForm.styled';
import { useSelector } from 'react-redux';
import {
  // getContacts,
  // getFilter,
  selectFilteredContacts,
} from 'redux/selectors';

export const ContactList = () => {
  // const contacts = useSelector(getContacts);
  // const filter = useSelector(getFilter);

  // const filterContact = contacts.filter(contact =>
  //   contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  // );

  const filterContact2 = useSelector(selectFilteredContacts);

  return (
    <List>
      {filterContact2.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </List>
  );
};
