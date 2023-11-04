import { Component } from "react";
import { ContactsList } from "./ContactsList/ContactsList";
import { InputForm } from "./InputForm/InputForm";
import { nanoid } from "nanoid";
import { Filter } from "./Filter/Filter";
import { sample } from "tempContacts";


export class App extends Component {

  state = {
    contacts: sample,
    filter: ''
  };
  componentDidMount() {
    const persistContacts = localStorage.getItem('contacts');
    if (persistContacts) {
      this.setState({ contacts: JSON.parse(persistContacts) })
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  addContact = ({ name, tel }) => {
    if (this.state.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is alredy in contact list`)
      return
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), name: name, tel: tel }]
    }))
  }

  delContact = ({ id }) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id!==id)
    }))
  }

  changeFilter = newFilter => {
    this.setState({
      filter: newFilter
    })
  }
  getFilteredContacts = () => {
    return (
    this.state.contacts.filter(contact => {
      return contact.name.toLowerCase()
        .includes(this.state.filter.toLowerCase())
    }))
  }

  render() {
    const contacts = this.getFilteredContacts()
    return (
      <div>
        <h2>PhoneBook</h2>
        <InputForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter findName={this.changeFilter} />
        <ContactsList contacts={contacts} delContact={this.delContact} />
     </div>
    )
  }
}