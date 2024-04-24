import React, { useState } from "react";

const DashboardContentDefault = ({ users }) => {
  const [usersTest, setUsersTest] = useState(users);
  const [editingUser, setEditingUser] = useState(null);

  function editUser(username) {
    // Set the user to be edited
    setEditingUser(usersTest.find((user) => user.username === username));
  }

  function deleteUser(username) {
    const updatedUsers = usersTest.filter((user) => user.username !== username);
    setUsersTest(updatedUsers);
  }

  function handleCloseModal() {
    // Close the modal by resetting editingUser state
    setEditingUser(null);
  }

  const editBtn = (username) => (
    <button
      className="btn btn-primary m-0 me-3"
      onClick={() => editUser(username)}
    >
      Edit
    </button>
  );

  const deleteBtn = (username) => (
    <button className="btn btn-danger m-0" onClick={() => deleteUser(username)}>
      Delete
    </button>
  );

  return (
    <div className="d-flex justify-content-center">
      <div className="under-nav-container">
        <h2 className="d-inline-block">Users</h2>
        <button className="float-end">Add User</button>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Username</th>
              <th scope="col">Firstname</th>
              <th scope="col">Lastname</th>
              <th scope="col">Roles</th>
              <th scope="col" style={{ width: "20%" }}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {usersTest.map((user, index) => (
              <tr key={index}>
                <td
                  data-tooltip={user.username}
                  onMouseEnter={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    e.currentTarget.style.setProperty(
                      "--top",
                      `${e.clientY - rect.height}px`
                    );
                    e.currentTarget.style.setProperty(
                      "--left",
                      `${e.clientX}px`
                    );
                  }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    e.currentTarget.style.setProperty(
                      "--top",
                      `${e.clientY - rect.height}px`
                    );
                    e.currentTarget.style.setProperty(
                      "--left",
                      `${e.clientX}px`
                    );
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.setProperty("--top", "auto");
                    e.currentTarget.style.setProperty("--left", "auto");
                  }}
                >
                  {user.username}
                </td>
                <td
                  data-tooltip={user.firstname}
                  onMouseEnter={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    e.currentTarget.style.setProperty(
                      "--top",
                      `${e.clientY - rect.height}px`
                    );
                    e.currentTarget.style.setProperty(
                      "--left",
                      `${e.clientX}px`
                    );
                  }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    e.currentTarget.style.setProperty(
                      "--top",
                      `${e.clientY - rect.height}px`
                    );
                    e.currentTarget.style.setProperty(
                      "--left",
                      `${e.clientX}px`
                    );
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.setProperty("--top", "auto");
                    e.currentTarget.style.setProperty("--left", "auto");
                  }}
                >
                  {user.firstname}
                </td>
                <td
                  data-tooltip={user.lastname}
                  onMouseEnter={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    e.currentTarget.style.setProperty(
                      "--top",
                      `${e.clientY - rect.height}px`
                    );
                    e.currentTarget.style.setProperty(
                      "--left",
                      `${e.clientX}px`
                    );
                  }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    e.currentTarget.style.setProperty(
                      "--top",
                      `${e.clientY - rect.height}px`
                    );
                    e.currentTarget.style.setProperty(
                      "--left",
                      `${e.clientX}px`
                    );
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.setProperty("--top", "auto");
                    e.currentTarget.style.setProperty("--left", "auto");
                  }}
                >
                  {user.lastname}
                </td>
                <td
                  data-tooltip={user.Roles.join(", ")}
                  onMouseEnter={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    e.currentTarget.style.setProperty(
                      "--top",
                      `${e.clientY - rect.height}px`
                    );
                    e.currentTarget.style.setProperty(
                      "--left",
                      `${e.clientX}px`
                    );
                  }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    e.currentTarget.style.setProperty(
                      "--top",
                      `${e.clientY - rect.height}px`
                    );
                    e.currentTarget.style.setProperty(
                      "--left",
                      `${e.clientX}px`
                    );
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.setProperty("--top", "auto");
                    e.currentTarget.style.setProperty("--left", "auto");
                  }}
                >
                  {user.Roles.join(", ")}
                </td>
                <td>
                  {editBtn(user.username)} {deleteBtn(user.username)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {editingUser && (
        <div className="popup" onClick={handleCloseModal}>
          <div
            class="popup-inner overflow-scroll scrollable-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h3>Edit Profile</h3>
            <form>
              <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  defaultValue={editingUser.firstname}
                  // Handle input change and update editingUser state
                  // Example: onChange={(e) => setEditingUser({ ...editingUser, firstname: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  defaultValue={editingUser.lastname}
                  // Handle input change and update editingUser state
                  // Example: onChange={(e) => setEditingUser({ ...editingUser, lastname: e.target.value })}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardContentDefault;
