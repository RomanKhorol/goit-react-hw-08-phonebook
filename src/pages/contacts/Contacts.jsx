import { AddForm } from '../../components/AddAbonentForm/AddAbonentForm';
import { ItemList } from '../../components/AbonentList/AbonentList';
import { Filter } from '../../components/Filtr/Filtr';

const Contacts = () => {
  return (
    <>
      <div
        style={{
          width: '300px',
          border: '1px solid black',
          borderRadius: '4px',
        }}
      >
        <h1
          style={{
            paddingLeft: '40px',
            fontSize: '30px',
            margin: '0px',
          }}
        >
          Add new contact
        </h1>
        <AddForm />
      </div>

      <h2
        style={{
          margin: '0',
          paddingLeft: '40px',
          padding: '40px',
          fontSize: 40,
        }}
      >
        Contacts
      </h2>
      <Filter />
      <ItemList />
    </>
  );
};
export default Contacts;
