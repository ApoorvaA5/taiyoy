import  {  useState , FC } from "react";
import { useNavigate } from "react-router-dom";
import ContactList from "../components/ContactList";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

type ContactProps = {};

const Contact: FC<ContactProps> = ({}) => {
  const { contacts } = useSelector((state: RootState) => state.contacts);
  const navigate = useNavigate();

  return (
    <div className="container-sm flex flex-col items-center justify-center p-4 sm:p-20 gap-10">
      <button
        onClick={() => navigate("/contact/add")}
        type="button"
        className="rounded-md text-2xl bg-black px-3 py-2 font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        style={{ backgroundColor: "#009688" }} // Change chat header color
      >
        Create Contact
      </button>
      {!!contacts.length ? (
        contacts.map((contact) => (
          <ContactList
            firstName={contact.firstName}
            lastName={contact.lastName}
            status={contact.status}
            id={contact.id}
            key={contact.id}
            style={{
              backgroundColor: contact.status === "user" ? "#CFE9BA" : "#FFFFFF",
              borderRadius: "10px", // Rounded rectangle style
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Slight box-shadow
              padding: "10px",
              marginBottom: "10px",
            }}
          />
        ))
      ) : (
        <div className="border-2 border-black p-4" style={{ backgroundColor: "#E5DDD5" }}>
          <p>
            No Contact Found <br />
            Please add contact from create contact button
          </p>
        </div>
      )}
    </div>
  );
};

export default Contact;
