import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();
  const handlerDelete = () => dispatch(deleteContact(id));
  return (
    <div className={css.card}>
      <div className={css.contactData}>
        <p>
          <FaUser /> {name}
        </p>
        <p>
          <FaPhone /> {number}
        </p>
      </div>
      <button onClick={handlerDelete} className={css.btn}>
        Delete
      </button>
    </div>
  );
}
