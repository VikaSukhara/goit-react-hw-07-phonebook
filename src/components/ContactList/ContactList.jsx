import React from 'react';
import { List, Item, Paragraph, Button } from './ContactList.styled';
import {
  //  useDispatch, 
  useSelector } from 'react-redux';
// import { deleteContact } from '../redux/contactsSlice';

export const ContactList = () => {
  // const dispatch = useDispatch();
  // const filter = useSelector(state => state.filterStore);

//чому андеайнд???
//  const contactsInfo = useSelector(state => state.contacts.items);
//  const loadingInfo = useSelector(state => state.contacts.isLoading);
// const errorInfo = useSelector(state => state.contacts.error);

// console.log(contactsInfo)
// console.log(loadingInfo)
// console.log(errorInfo)



// console.log("contacts", contacts)
  // const filteredUsers = contacts.filter(contact => {
  //   return contact.name
  //     .toLocaleLowerCase()
  //     .includes(filter.toLocaleLowerCase());
  // });

  // return (
  //   <List>
  //     {contacts.map(contact => {
  //       return (
  //         <Item key={contact.id}>
  //           <Paragraph>
  //             {contact.name} : {contact.number}
  //           </Paragraph>
  //           <Button
  //             type="button"
  //             onClick={() => console.log("uraaa")
  //              }
  //               // dispatch(deleteContact(contact.id))
              
  //           >
  //             Delete
  //           </Button>
  //         </Item>
  //       );
  //     })}
  //   </List>
  // );
};
