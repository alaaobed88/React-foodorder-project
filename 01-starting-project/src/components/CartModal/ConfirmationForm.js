import { useState, useContext } from "react";
import styles from "./ConfirmationForm.module.css";
import Button from "../UI/Button";
import { CartContext } from "../../storage/CartContext";

const ConfirmationForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [postal, setPostal] = useState("");
  const [address, setAddress] = useState("");
  const ctx = useContext(CartContext);

  const checkValidity = (value) => {
    return value.trim() === "";
  };
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const phoneChangeHandler = (event) => {
    setPhone(event.target.value);
  };
  const postalChangeHandler = (event) => {
    setPostal(event.target.value);
  };
  const addressChangeHandler = (event) => {
    setAddress(event.target.value);
  };
  const formIsValid =
    checkValidity(name) ||
    checkValidity(phone) ||
    checkValidity(postal) ||
    checkValidity(address)
      ? false
      : true;

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      setName("");
      setPhone("");
      setAddress("");
      setPostal("");
      return;
    }
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={styles["form-control"]}>
        <label htmlFor="name">Name</label>
        <input
          value={name}
          onChange={nameChangeHandler}
          type="text"
          id="name"
        ></input>
      </div>
      <div className={styles["form-control"]}>
        <label htmlFor="phone number">Phone Number</label>
        <input
          value={phone}
          onChange={phoneChangeHandler}
          type="text"
          id="phone number"
        ></input>
      </div>
      <div className={styles["form-control"]}>
        <label htmlFor="postal">Postal Code</label>
        <input
          value={postal}
          onChange={postalChangeHandler}
          type="text"
          id="postal"
        ></input>
      </div>
      <div className={styles["form-control"]}>
        <label htmlFor="location">Address</label>
        <input
          value={address}
          onChange={addressChangeHandler}
          type="text"
          id="location"
        ></input>
      </div>
      <Button onClick={ctx.cartExpandHandler}>Cancel</Button>
      <Button type="submit" disabled={!formIsValid} onClick={formSubmitHandler}>
        Confirm
      </Button>
    </form>
  );
};

export default ConfirmationForm;
