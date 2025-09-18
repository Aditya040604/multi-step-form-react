import PersonalInfo from "./PersonalInfo";
import Signup from "./Signup";
import Other from "./Other";
import { useForm } from "../Context/FormContext";

const formTitles = ["Sign Up", "Personal Info", "Other"];

function Form() {
  const { page, nextPage, prevPage } = useForm();
  const displayPage = () => {
    switch (page) {
      case 0:
        return <Signup />;
      case 1:
        return <PersonalInfo />;
      case 2:
        return <Other />;
      default:
        return <p>Page Not Found</p>;
    }
  };

  return (
    <section className="form">
      <div className="progessbar"></div>
      <div className="form-container">
        <div className="header">
          <h1>{formTitles[page]}</h1>
        </div>
        <div className="body">{displayPage()}</div>
        <div className="footer">
          <button disabled={page === 0} onClick={prevPage}>
            Prev
          </button>
          <button disabled={page === formTitles.length - 1} onClick={nextPage}>
            Next
          </button>
        </div>
      </div>
    </section>
  );
}

export default Form;
