import React, { useState, useEffect } from "react";
import {
  doc,
  updateDoc,
  collection,
  onSnapshot,
  getFirestore,
} from "firebase/firestore";

const db = getFirestore();

const CushUsers = () => {
  const [users, setUsers] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);
  const [editedValues, setEditedValues] = useState({});

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "cushusers"), (snapshot) => {
      setUsers(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return () => unsubscribe();
  }, []);

  const handleEditClick = (userId) => {
    setEditingUserId(userId);
    const userToEdit = users.find((user) => user.id === userId);
    if (userToEdit) {
      setEditedValues({ ...userToEdit });
    }
  };

  const handleInputChange = (field, value) => {
    setEditedValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
  };

  const handleSaveClick = async (userId) => {
    const docRef = doc(db, "cushusers", userId);
    const updates = {};

    for (const field in editedValues) {
      if (
        editedValues[field] !== users.find((user) => user.id === userId)[field]
      ) {
        updates[field] = editedValues[field];
      }
    }

    if (Object.keys(updates).length > 0) {
      try {
        await updateDoc(docRef, updates);
        console.log("Document successfully updated!");
        setEditingUserId(null);

        setUsers(
          users.map((user) =>
            user.id === userId ? { ...user, ...updates } : user
          )
        );
      } catch (error) {
        console.error("Error updating document: ", error);
      }
    } else {
      console.log("No changes to save.");
      setEditingUserId(null);
    }
  };

  const handleCancelClick = () => {
    setEditingUserId(null);
    setEditedValues({});
  };

  return (
    <>
      <div className='text-2xl font-bold'>Cush Users</div>
      <div className='flex mt-10 rounded drop-shadow-md pr-10'>
        <div className='p-10 pr-20 bg-purple-50' style={{ width: "110%" }}>
          <table className='font-bold' style={{ width: "110%" }}>
            {" "}
            {/* Set table width */}
            <thead>
              <tr className=' border-t-0 border-l-0 border-r-0'>
                <th
                  className='pr-3 pl-1 text-left font-sm'
                  style={{ width: "120px" }}>
                  Sur Name
                </th>
                <th
                  className='pr-3 text-left font-sm'
                  style={{ width: "120px" }}>
                  First Name
                </th>
                <th
                  className='pr-3 text-left font-sm'
                  style={{ width: "150px" }}>
                  Email
                </th>
                <th
                  className='pr-3 text-left font-sm'
                  style={{ width: "80px" }}>
                  Bal
                </th>
                <th
                  className='pr-3 text-left font-sm'
                  style={{ width: "80px" }}>
                  MiBal
                </th>
                <th
                  className='pr-3 text-left font-sm'
                  style={{ width: "80px" }}>
                  Paid
                </th>
                <th
                  className='pr-3 text-left font-sm'
                  style={{ width: "80px" }}>
                  Remain
                </th>
                <th
                  className='pr-3 text-left font-sm'
                  style={{ width: "100px" }}>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td
                    className='pr-3 text-left font-sm'
                    style={{ width: "120px" }}>
                    {editingUserId === user.id ? (
                      <input
                        className='w-full px-1' // Use w-full to fill the cell
                        type='text'
                        value={editedValues.surname || ""}
                        onChange={(e) =>
                          handleInputChange("surname", e.target.value)
                        }
                      />
                    ) : (
                      user.surname
                    )}
                  </td>
                  <td
                    className='pr-3 text-left font-sm'
                    style={{ width: "120px" }}>
                    {editingUserId === user.id ? (
                      <input
                        className='w-full px-1'
                        type='text'
                        value={editedValues.fName || ""}
                        onChange={(e) =>
                          handleInputChange("fName", e.target.value)
                        }
                      />
                    ) : (
                      user.fName
                    )}
                  </td>
                  <td
                    className='pr-3 text-left font-sm'
                    style={{ width: "150px" }}>
                    {editingUserId === user.id ? (
                      <input
                        className='w-full'
                        type='email'
                        value={editedValues.email || ""}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                      />
                    ) : (
                      user.email
                    )}
                  </td>
                  <td
                    className='pr-3 text-left font-sm'
                    style={{ width: "80px" }}>
                    {editingUserId === user.id ? (
                      <input
                        className='w-full px-1 border outline-none border-red-400'
                        type='number'
                        value={editedValues.totalAssets || ""}
                        onChange={(e) =>
                          handleInputChange(
                            "totalAssets",
                            Number(e.target.value) || 0
                          )
                        }
                      />
                    ) : (
                      user.totalAssets
                    )}
                  </td>
                  <td
                    className='pr-3 text-left font-sm'
                    style={{ width: "80px" }}>
                    {editingUserId === user.id ? (
                      <input
                        className='w-full px-1 border outline-none border-red-400'
                        type='number'
                        value={editedValues.totalInvested || ""}
                        onChange={(e) =>
                          handleInputChange(
                            "totalInvested",
                            Number(e.target.value) || 0
                          )
                        }
                      />
                    ) : (
                      user.totalInvested
                    )}
                  </td>
                  <td
                    className='pr-3 text-left font-sm'
                    style={{ width: "80px" }}>
                    {editingUserId === user.id ? (
                      <input
                        className='w-full px-1 border outline-none border-red-400'
                        type='number'
                        value={editedValues.totalBonus || ""}
                        onChange={(e) =>
                          handleInputChange(
                            "totalBonus",
                            Number(e.target.value) || 0
                          )
                        }
                      />
                    ) : (
                      user.totalBonus
                    )}
                  </td>
                  <td
                    className='pr-3 text-left font-sm'
                    style={{ width: "80px" }}>
                    {editingUserId === user.id ? (
                      <input
                        className='w-full px-1 border outline-none border-red-400'
                        type='number'
                        value={editedValues.totalProfit || ""}
                        onChange={(e) =>
                          handleInputChange(
                            "totalProfit",
                            Number(e.target.value) || 0
                          )
                        }
                      />
                    ) : (
                      user.totalProfit
                    )}
                  </td>
                  <td className='' style={{ width: "100px" }}>
                    {editingUserId === user.id ? (
                      <>
                        <button
                          className='bg-green-300 text-left font-sm py-1 px-3 mb-1 block mt-1'
                          onClick={() => handleSaveClick(user.id)}>
                          Save
                        </button>
                        <button
                          className='bg-yellow-300 text-left font-sm py-1 px-3'
                          onClick={handleCancelClick}>
                          Cancel
                        </button>
                      </>
                    ) : (
                      <button
                        className='bg-blue-500 text-left font-sm py-1 px-3 mt-5'
                        onClick={() => handleEditClick(user.id)}>
                        Edit
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CushUsers;
