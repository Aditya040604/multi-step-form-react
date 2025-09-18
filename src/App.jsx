import { FormProvider } from "./Context/FormContext";
import Form from "./Components/Form";

function App() {
  return (
    <FormProvider>
      <Form />
    </FormProvider>
  );
}

export default App;
