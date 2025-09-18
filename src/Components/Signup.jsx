import { useForm } from "../Context/FormContext";

function Signup() {
  const { formData, setFormData } = useForm();
  return (
    <>
      <input
        type="email"
        name="email"
        id=""
        placeholder="Email"
        value={formData.email}
        onChange={(e) =>
          setFormData((formData) => ({ ...formData, email: e.target.value }))
        }
        required
      />
      <input
        type="password"
        name="password"
        id=""
        value={formData.password}
        onChange={(e) =>
          setFormData((formData) => ({ ...formData, password: e.target.value }))
        }
        placeholder="Password"
        required
      />
      <input
        type="password"
        name="confirm-password"
        id=""
        value={formData.confirmPassword}
        onChange={(e) =>
          setFormData((formData) => ({
            ...formData,
            confirmPassword: e.target.value,
          }))
        }
        placeholder="confirm password"
        required
      />
    </>
  );
}

export default Signup;
