import Container from "./Container/Container";
import ContactForm from "./FormContacts/FormContacts";
import Filter from "./Filter/Filter";
import ContactList from "./ListContacts/ListContacts";

function App(){
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm/>
      <h2>Contacts</h2>
      <Filter/>
      <ContactList/>
    </Container>
  )
}

export default App;


/*export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        textTransform: 'uppercase',
        color: '#010101',
        backgroundColor: 'red'
      }}
    >
      React homework templates
    </div>
  );
};
*/