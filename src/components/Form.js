import { useState, useContext } from "react";
import { AppContext } from "../Context";
const Form = () => {
  const { insertUser } = useContext(AppContext);
  const [newUser, setNewUser] = useState({});

  // Storing the Insert User Form Data.
  const addNewUser = (e, field) => {
    setNewUser({
      ...newUser,
      [field]: e.target.value,
    });
  };

  // Inserting a new user into the Database.
  const submitUser = (e) => {
    e.preventDefault();
    insertUser(newUser);
    e.target.reset();
  };

  return (
    <form className="insertForm" onSubmit={submitUser}>
      <h2>Insert User</h2>
      <input
        type="text"
        id="_name"
        onChange={(e) => addNewUser(e, "codbarra")}
        placeholder="Codigo de barra"
        autoComplete="off"
        required
      />
      <input
        type="text"
        id="_name"
        onChange={(e) => addNewUser(e, "articulo")}
        placeholder="Articulo"
        autoComplete="off"
        required
      />
      <input
        type="text"
        id="_name"
        onChange={(e) => addNewUser(e, "descripcion")}
        placeholder="Descripción"
        autoComplete="off"
        required
      />
      <input
        type="text"
        id="_name"
        onChange={(e) => addNewUser(e, "marca")}
        placeholder="Marca"
        autoComplete="off"
        required
      />
      <input type="submit" value="Insert" />
    </form>
  );
};

export default Form;