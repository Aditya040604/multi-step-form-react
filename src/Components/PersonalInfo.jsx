function PersonalInfo() {
  return (
    <div className="personal-info-container">
      <input type="text" name="fname" id="" placeholder="First Name" required />
      <input type="text" name="lname" id="" placeholder="Last Name" required />
      <input
        type="text"
        name="username"
        id=""
        placeholder="Username"
        required
      />
    </div>
  );
}

export default PersonalInfo;
