import  React , { FC } from "react";
import { RxAvatar } from "react-icons/rx";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteContact } from "../features/contact/contactSlice";
import { Link } from "react-router-dom";

type ContactListProps = {
  id?: number;
  firstName: string;
  lastName: string;
  status: string;
  style?: React.CSSProperties;
};

const ContactList: FC<ContactListProps> = ({
  id,
  firstName,
  lastName,
  status,
}) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className="flex items-center justify-between w-full border-2 p-2 bg-gray-800 text-white">
      <div className="flex items-center space-x-2">
        <span className="text-3xl">
          <RxAvatar />
        </span>
        <h3 className="overflow-hidden w-20 text-sm">
          {firstName} {lastName}
        </h3>
      </div>
      <div className="flex space-x-2 items-center">
        <button
          type="button"
          className={`rounded-md px-3 py-2 text-sm font-semibold shadow-sm ${
            status === "active" ? "bg-green-600" : "bg-red-600"
          } focus:outline-none focus:ring focus:ring-opacity-50`}
        >
          {status.toUpperCase()}
        </button>
        <Link
          to={`/contact/edit/${id}`}
          state={{ data: { firstName, lastName, status, id } }}
          className="text-2xl"
        >
          <AiFillEdit />
        </Link>
        <button className="text-2xl" onClick={handleDelete}>
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
};

export default ContactList;
