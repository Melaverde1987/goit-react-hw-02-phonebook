import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  static defaultProps = {
    arr: [],
  };

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...newContact, id: nanoid() }],
    }));
  };

  onFilter = evt => {
    //let name = evt.target.value.toLowerCase();
    let name = evt.target.value;
    this.setState({ filter: name });
    this.onFind();
  };

  onFind = () => {
    let arr = [];

    this.state.contacts.filter(item => {
      if (
        item.name.toUpperCase().indexOf(this.state.filter.toUpperCase()) > -1 &&
        this.state.filter !== ''
      ) {
        const { arr } = this.props;
        console.log('arr', arr);
        arr.push(item);
        return arr;
      }
    });
  };

  render() {
    //console.log(this.state.filter);
    //this.onFind();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAdd={this.addContact} />

        <h2>Contacts</h2>
        <Filter inputValue={this.state.filter} handleChange={this.onFilter} />
        {/*<ContactList contacts={this.state.contacts} />*/}
        <ContactList contacts={this.props.arr} />
      </div>
    );
  }
}
