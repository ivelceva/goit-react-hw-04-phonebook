
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

const ContactForm = ({ namesContact, addContact }) => {
const [name, setName] = useState('');
const [number, setNumber] = useState('');

const handleChange = (event) => {
const { name, value } = event.target;
if (name === 'name') {
setName(value);
} else if (name === 'number') {
setNumber(value);
}
};

const handleSubmit = (event) => {
event.preventDefault();
let result = namesContact.includes(name);
if (result) {
alert(`${name} is already in contacts`);
setName('');
} else {
addContact({ name, number });
setName('');
setNumber('');
}
};

return (
<form className={css.form} onSubmit={handleSubmit}>
<label className={css.label}>
<p>Name</p>
<input
       name="name"
       type="text"
       placeholder="your name..."
       value={name}
       onChange={handleChange}
       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
       title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
       required
     />
</label>
<label className={css.label}>
<p>Number</p>
<input
       name="number"
       type="tel"
       placeholder="add valid number..."
       value={number}
       onChange={handleChange}
       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
       title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
       required
     />
</label>
<button className={css.btn} type="submit">
Add contact
</button>
</form>
);
};

ContactForm.propTypes = {
namesContact: PropTypes.arrayOf(PropTypes.string.isRequired),
addContact: PropTypes.func.isRequired,
};

export default ContactForm;

// import { Component } from 'react';
// import PropTypes from 'prop-types';
// import css from './ContactForm.module.css';


// export class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({
//       [name]: value,
//     });
//   };

//   handlSubmit = event => {
//     event.preventDefault();
//     let result = this.props.namesContact.includes(this.state.name);
//     if (result) {
//       alert(`${this.state.name} is already in contacts`);
//       this.setState({
//         name: '',
//       });
//     } else {
//       this.props.addContact({ ...this.state });
//       this.setState({
//         name: '',
//         number: '',
//       });
//     }
//   };

//   render() {
//     const { name, number } = this.state;

//     return (
//       <form className={css.form} onSubmit={this.handlSubmit}>
//         <label className={css.label}>
//           <p>Name</p>
//           <input
//             name="name"
//             type="text"
//             placeholder="your name..."
//             value={name}
//             onChange={this.handleChange}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//         </label>
//         <label className={css.label}>
//           <p>Number</p>
//           <input
//             name="number"
//             type="tel"
//             placeholder="add valid number..."
//             value={number}
//             onChange={this.handleChange}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//         </label>
//         <button className={css.btn} type="submit">
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }

// ContactForm.propTypes = {
//   namesContact: PropTypes.arrayOf(PropTypes.string.isRequired),
//   addContact: PropTypes.func.isRequired,
// };