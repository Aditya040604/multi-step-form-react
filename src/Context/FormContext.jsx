import { createContext, useContext, useState } from "react";

const FormContext = createContext();
const initialState = {
  email: "",
  password: "",
  confirmPassword: "",
  firstName: "",
  lastName: "",
  userName: "",
  nationality: "",
  nickName: "",
};

function FormProvider({ children }) {
  const [formData, setFormData] = useState(initialState);
  const [page, setPage] = useState(0);
  const nextPage = () => {
    setPage((curPage) => curPage + 1);
  };
  const prevPage = () => {
    setPage((curPage) => curPage - 1);
  };
  return (
    <FormContext.Provider
      value={{
        page,
        formData,
        nextPage,
        prevPage,
        setFormData,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

function useForm() {
  const context = useContext(FormContext);
  if (context === undefined)
    throw new Error("FormContext was used outside of FormProvider");
  return context;
}

export { FormProvider, useForm };
