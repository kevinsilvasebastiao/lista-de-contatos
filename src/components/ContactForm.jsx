import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, editContact } from '../redux/contactsSlice';
import styled from 'styled-components';

const ContactForm = ({ currentContact, setCurrentContact }) => {
const [formData, setFormData] = useState({ fullName: '', email: '', phone: '' });
const dispatch = useDispatch();

useEffect(() => {
    if (currentContact) {
    setFormData(currentContact);
    }
}, [currentContact]);

const handleSubmit = (e) => {
    e.preventDefault();
    if (currentContact) {
    dispatch(editContact({ id: currentContact.id, updatedContact: formData }));
    setCurrentContact(null); 
    } else {
    dispatch(addContact({ ...formData, id: Date.now() }));
    }
    setFormData({ fullName: '', email: '', phone: '' });
};

return (
    <Form onSubmit={handleSubmit}>
    <Input
        type="text"
        placeholder="Nome Completo"
        value={formData.fullName}
        onChange={e => setFormData({ ...formData, fullName: e.target.value })}
        required
    />
    <Input
        type="email"
        placeholder="E-mail"
        value={formData.email}
        onChange={e => setFormData({ ...formData, email: e.target.value })}
        required
    />
    <Input
        type="tel"
        placeholder="Telefone"
        value={formData.phone}
        onChange={e => setFormData({ ...formData, phone: e.target.value })}
        required
    />
    <Button type="submit">{currentContact ? 'Salvar Alterações' : 'Adicionar Contato'}</Button>
    </Form>
);
};

export default ContactForm;

const Form = styled.form`
display: flex;
flex-direction: column;
gap: 10px;
`;

const Input = styled.input`
padding: 10px;
font-size: 16px;
border: 1px solid #ddd;
border-radius: 5px;
`;

const Button = styled.button`
padding: 10px;
background-color: #4CAF50;
color: white;
font-size: 16px;
border: none;
border-radius: 5px;
cursor: pointer;

&:hover {
    background-color: #45a049;
}
`;
