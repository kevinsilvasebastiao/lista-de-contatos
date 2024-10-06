import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from '../redux/contactsSlice';
import styled from 'styled-components';

const ContactList = ({ onEdit }) => {
const contacts = useSelector(state => state.contacts);
const dispatch = useDispatch();

return (
    <List>
    {contacts.map(contact => (
        <ListItem key={contact.id}>
        <p>{contact.fullName}</p>
        <p>{contact.email}</p>
        <p>{contact.phone}</p>
        <Button onClick={() => onEdit(contact)}>Editar</Button>
        <Button onClick={() => dispatch(removeContact(contact.id))}>Remover</Button>
        </ListItem>
    ))}
    </List>
);
};

export default ContactList;

const List = styled.ul`
list-style-type: none;
padding: 0;
`;

const ListItem = styled.li`
display: flex;
justify-content: space-between;
margin-bottom: 10px;
border: 1px solid #ddd;
padding: 10px;
`;

const Button = styled.button`
    margin-left: 10px;
`;
