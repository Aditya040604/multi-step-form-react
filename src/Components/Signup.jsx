function Signup() {
  return (
    <div className="signup-container">
      <input type="email" name="email" id="" placeholder="Email" required />
      <input
        type="password"
        name="password"
        id=""
        placeholder="Password"
        required
      />
      <input
        type="password"
        name="confirm-password"
        id=""
        placeholder="confirm password"
        required
      />
    </div>
  );
}

export default Signup;
