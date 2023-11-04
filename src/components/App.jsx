import { ContactsList } from "./ContactsList/ContactsList";
import { InputForm } from "./InputForm/InputForm";
import { nanoid } from "nanoid";
import { Filter } from "./Filter/Filter";
import { sample } from "tempContacts";
import { useEffect, useState } from "react";

const currentStorage = JSON.parse(localStorage.getItem('contacts'))
const initial = currentStorage ? currentStorage : sample

export const App = () => {
  const [contacts, setContacts] = useState(initial);
  const [filter, setFilter] = useState('');


  useEffect(() => {
    console.log(contacts)
    const currentStorage = localStorage.getItem('contacts')
    console.log(JSON.parse(currentStorage))
      localStorage.setItem('contacts', JSON.stringify(contacts))
},[contacts])



  const addContact = ({ name, tel }) => {
    if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is alredy in contact list`)
      return
    }
    setContacts(prevState => [...prevState, { id: nanoid(), name: name, tel: tel }])
  }

  const delContact = ({ id }) => {
    setContacts(prevState => 
      prevState.filter(contact => contact.id!==id)
    )
  }

  const changeFilter = newFilter => {
    setFilter (newFilter)
  }
  const getFilteredContacts = () => {
    return (
      contacts.filter(contact => {
      return contact.name.toLowerCase()
        .includes(filter.toLowerCase())
    }))
  }
  
  const contactsList = getFilteredContacts()

    return (
      <div>
        <h2>PhoneBook</h2>
        <InputForm addContact={addContact} />
        <h2>Contacts</h2>
        <Filter findName={changeFilter} />
        <ContactsList contacts={contactsList} delContact={delContact} />
     </div>
    )
}