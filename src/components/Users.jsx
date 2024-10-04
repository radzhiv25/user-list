import axios from "axios";
import { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({ id: null, first_name: '', last_name: '', username: '', age: '', isEmployed: false, position: '', maritalStatus: false });
  const [showForm, setShowForm] = useState(false); 

  
  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://mocki.io/v1/a6a0fb6b-a84a-4934-b3f2-5c92cc77c44e"
      );
      setUsers(res.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.first_name.toLowerCase().includes(search.toLowerCase()) ||
    user.last_name.toLowerCase().includes(search.toLowerCase()) ||
    user.username.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddUser = () => {
    const newUser = { ...currentUser, id: users.length + 1 };
    setUsers([...users, newUser]);
    resetForm();
  };

  const handleEditUser = (user) => {
    setIsEditing(true);
    setCurrentUser(user);
    setShowForm(true);  // Show the form when editing
  };

  const handleUpdateUser = () => {
    setUsers(users.map((user) => (user.id === currentUser.id ? currentUser : user)));
    resetForm();
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const resetForm = () => {
    setIsEditing(false);
    setCurrentUser({ id: null, first_name: '', last_name: '', username: '', age: '', isEmployed: false, position: '', maritalStatus: false });
    setShowForm(false);  // Hide the form after adding/updating a user
  };

  return (
    <div className="m-2">
      <span className="my-2 w-full flex items-center gap-2">
        <input
          type="text"
          placeholder="Search by name or username"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 w-full outline-none rounded border"
        />
      </span>

      {!showForm && (
        <div className="my-2">
          <button
            className="px-2 py-1 bg-gray-500 text-white rounded"
            onClick={() => setShowForm(true)}  
          >
            Add User
          </button>
        </div>
      )}

      {showForm && (
        <div className="my-2 md:w-1/4">
          <input
            type="text"
            placeholder="First Name"
            value={currentUser.first_name}
            onChange={(e) => setCurrentUser({ ...currentUser, first_name: e.target.value })}
            className="p-2 w-full outline-none rounded border mb-2"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={currentUser.last_name}
            onChange={(e) => setCurrentUser({ ...currentUser, last_name: e.target.value })}
            className="p-2 w-full outline-none rounded border mb-2"
          />
          <input
            type="text"
            placeholder="Username"
            value={currentUser.username}
            onChange={(e) => setCurrentUser({ ...currentUser, username: e.target.value })}
            className="p-2 w-full outline-none rounded border mb-2"
          />
          <input
            type="number"
            placeholder="Age"
            value={currentUser.age}
            onChange={(e) => setCurrentUser({ ...currentUser, age: e.target.value })}
            className="p-2 w-full outline-none rounded border mb-2"
          />
          <div className="flex items-center gap-4 mb-2">
            <label className="flex items-center gap-1">
              <input
                type="checkbox"
                checked={currentUser.isEmployed}
                onChange={(e) => setCurrentUser({ ...currentUser, isEmployed: e.target.checked })}
              />
              Employed
            </label>
            <label className="flex items-center gap-1">
              <input
                type="checkbox"
                checked={currentUser.maritalStatus}
                onChange={(e) => setCurrentUser({ ...currentUser, maritalStatus: e.target.checked })}
              />
              Married
            </label>
          </div>
          <span className="flex items-center gap-2">
          <button
            className="px-2 py-1 bg-gray-500 text-white rounded"
            onClick={isEditing ? handleUpdateUser : handleAddUser}
          >
            {isEditing ? 'Update User' : 'Add User'}
          </button>
          <button
            className="px-2 py-1 bg-black text-white rounded"
            onClick={resetForm} 
          >
            Cancel
          </button>
          </span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div key={user.id} className="p-2 border rounded">
              <div className="flex items-center gap-2 mb-2 border-b pb-2">
                <FaUserCircle className="size-8 text-gray-300" />
                <span>
                  <h3 className="font-bold text-lg leading-none">
                    {user.first_name} {user.last_name}
                  </h3>
                  <p className="text-xs text-gray-400">{user.username}</p>
                </span>
              </div>
              <span className="text-sm">
                <p>Age: {user.age}</p>
                <p>
                  Employee status: {user.isEmployed ? "Employed" : "Unemployed"}
                </p>
                <p>Position: {user.position ? "Founder" : "Not a founder"}</p>
                <p>
                  Marital status: {user.maritalStatus ? "Married" : "Not Married"}
                </p>
              </span>
              <span className="mt-2 text-sm flex items-center justify-between">
                <button
                  className="px-2 py-1 rounded bg-black text-white"
                  onClick={() => handleEditUser(user)}
                >
                  Edit
                </button>
                <button
                  className="px-2 py-1 rounded bg-gray-400 text-white"
                  onClick={() => handleDeleteUser(user.id)}
                >
                  Delete
                </button>
              </span>
            </div>
          ))
        ) : (
          <div className="col-span-4 text-center text-red-500">
            No users found
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;