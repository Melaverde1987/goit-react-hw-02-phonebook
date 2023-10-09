import { ContactListItem } from '../ContactListItem/ContactListItem';

export const ContactList = ({ contacts, onDelete }) => {
  if (contacts !== undefined) {
    return (
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <ContactListItem
              contactName={contact.name}
              contactNumber={contact.number}
            ></ContactListItem>
            <button
              type="button"
              id={contact.name}
              className="btn btn-primary"
              onClick={onDelete}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
};
