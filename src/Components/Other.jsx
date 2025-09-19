import { useForm } from "../Context/FormContext";

function Other() {
  const { formData, setFormData } = useForm();
  return (
    <>
      <input
        type="text"
        name="nationality"
        id=""
        value={formData.nationality}
        onChange={(e) =>
          setFormData((formData) => ({
            ...formData,
            nationality: e.target.value,
          }))
        }
        placeholder="Nationality"
      />
      <input
        type="text"
        name="nickname"
        id=""
        value={formData.nickName}
        onChange={(e) =>
          setFormData((formData) => ({
            ...formData,
            nickName: e.target.value,
          }))
        }
        placeholder="Nick name"
      />
    </>
  );
}

export default Other;
