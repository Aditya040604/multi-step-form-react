import { useForm } from "../Context/FormContext";

function PersonalInfo() {
  const { formData, setFormData } = useForm();

  return (
    <div className="personal-info-container">
      <input
        type="text"
        name="fname"
        id=""
        placeholder="First Name"
        value={formData.firstName}
        onChange={(e) =>
          setFormData((formData) => ({
            ...formData,
            firstName: e.target.value,
          }))
        }
        required
      />
      <input
        type="text"
        name="lname"
        id=""
        placeholder="Last Name"
        value={formData.lastName}
        onChange={(e) =>
          setFormData((formData) => ({
            ...formData,
            lastName: e.target.value,
          }))
        }
        required
      />
      <input
        type="text"
        name="username"
        id=""
        value={formData.userName}
        onChange={(e) =>
          setFormData((formData) => ({
            ...formData,
            userName: e.target.value,
          }))
        }
        placeholder="Username"
        required
      />
    </div>
  );
}

export default PersonalInfo;
