// import React from 'react';
import { List, Item, Paragraph, Button } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'components/redux/operations';


export const ContactList = () => {
  const dispatch = useDispatch();


  const filter = useSelector(state => state.filterStore);
  const contactsData = useSelector(state => state.contactsStore.items);
  console.log(contactsData);


  const filteredUsers = contactsData.filter(contact => {
    return contact.name
      .toLocaleLowerCase()
      .includes(filter.toLocaleLowerCase());
  });



  return (
    <List>
      {filteredUsers.map(contact => {
        return (
          <Item key={contact.id}>
            <Paragraph>
              {contact.name} : {contact.phone}
            </Paragraph>
            <Button
              type="button"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </Button>
          </Item>
        );
      })}
    </List>
  );
};
