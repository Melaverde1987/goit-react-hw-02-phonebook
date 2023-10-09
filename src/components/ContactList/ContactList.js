import { ContactListItem } from '../ContactListItem/ContactListItem';

export const ContactList = ({ contacts }) => {
  console.log('contacts', contacts);

  if (contacts !== undefined) {
    return (
      <ul>
        {contacts.map(contact => (
          <ContactListItem
            key={contact.id}
            contactName={contact.name}
            contactNumber={contact.number}
          ></ContactListItem>
        ))}
      </ul>
    );
  }
};
