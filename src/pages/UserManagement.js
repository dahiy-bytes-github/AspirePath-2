import React, { useEffect, useState } from "react";
import "../styles/UserManagement.css"; // Importing the CSS file

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [filterRole, setFilterRole] = useState("");
  const [sortKey, setSortKey] = useState("");
  const [editingUserId, setEditingUserId] = useState(null);
  const [editedUser, setEditedUser] = useState(null);

  const apiUrl = "http://localhost:8001/users";

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await fetch(`${apiUrl}/${id}`, { method: "DELETE" });
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const saveUser = async (user) => {
    try {
      await fetch(`${apiUrl}/${user.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      setUsers(users.map((u) => (u.id === user.id ? user : u)));
      setEditingUserId(null);
      setEditedUser(null);
    } catch (error) {
      console.error("Error saving user:", error);
    }
  };

  const sortedUsers = [...users].sort((a, b) => {
    if (!sortKey) return 0;
    return a[sortKey].localeCompare(b[sortKey]);
  });

  const filteredUsers = filterRole
    ? sortedUsers.filter((user) => user.role === filterRole)
    : sortedUsers;

  const handleEdit = (user) => {
    setEditingUserId(user.id);
    setEditedUser({ ...user });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleCancelEdit = () => {
    setEditingUserId(null);
    setEditedUser(null);
  };

  return (
    <div className="UserManagement">
      <h1>User Management</h1>

      <div className="filters">
        <label>
          Filter by Role:
          <select
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}
          >
            <option value="">All</option>
            <option value="mentee">Mentee</option>
            <option value="mentor">Mentor</option>
          </select>
        </label>
        <label>
          Sort by:
          <select value={sortKey} onChange={(e) => setSortKey(e.target.value)}>
            <option value="">None</option>
            <option value="firstName">First Name</option>
            <option value="role">Role</option>
          </select>
        </label>
      </div>

      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Career Goals</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) =>
            editingUserId === user.id ? (
              <tr key={user.id}>
                <td>
                  <input
                    type="text"
                    name="firstName"
                    value={editedUser.firstName}
                    onChange={handleEditChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="lastName"
                    value={editedUser.lastName}
                    onChange={handleEditChange}
                  />
                </td>
                <td>
                  <input
                    type="email"
                    name="email"
                    value={editedUser.email}
                    onChange={handleEditChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="role"
                    value={editedUser.role}
                    onChange={handleEditChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="careerGoals"
                    value={editedUser.careerGoals}
                    onChange={handleEditChange}
                  />
                </td>
                <td>
                  <button className="save-button" onClick={() => saveUser(editedUser)}>Save</button>
                  <button className="cancel-button" onClick={handleCancelEdit}>Cancel</button>
                </td>
              </tr>
            ) : (
              <tr key={user.id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.careerGoals}</td>
                <td>
                  <button onClick={() => handleEdit(user)}>Edit</button>
                  <button onClick={() => deleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
