import React, { useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import styled from 'styled-components';

function App() {
  const [currentContact, setCurrentContact] = useState(null);

  const handleEdit = (contact) => {
    setCurrentContact(contact);
  };

  return (
    <Container>
      <h1>Lista de Contatos</h1>
      <ContactForm currentContact={currentContact} setCurrentContact={setCurrentContact} />
      <ContactList onEdit={handleEdit} />
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 50%;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;
