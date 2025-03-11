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
    const docRef = doc(db, "myusers", userId);
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
      <div className='flex mt-10 rounded drop-shadow-md pr-30'>
        <div className='p-8 bg-purple-50'>
          <table className='font-bold'>
            <thead>
              <tr className='border-2 border-t-0 border-l-0 border-r-0'>
                <th className='pr-3 pl-1 text-left font-sm'>Sur Name</th>
                <th className='pr-3 text-left font-sm'>First Name</th>
                <th className='pr-3 text-left font-sm'>Email</th>
                <th className='pr-3 text-left font-sm'>Bal</th>
                <th className='pr-3 text-left font-sm'>Mi Bal</th>
                <th className='pr-3 text-left font-sm'>Paid</th>
                <th className='pr-3 text-left font-sm'>Remaining</th>
                <th className='pr-3 text-left font-sm'>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td className='pr-3 text-left font-sm'>
                    {editingUserId === user.id ? (
                      <input
                        className='w-30 px-1'
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
                  <td className='pr-3 text-left font-sm'>
                    {editingUserId === user.id ? (
                      <input
                        className='w-30 px-1'
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
                  <td className='pr-3 text-left font-sm'>
                    {editingUserId === user.id ? (
                      <input
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
                  <td className='pr-3 text-left font-sm '>
                    {editingUserId === user.id ? (
                      <input
                        className='w-23 px-1 border outline-none border-red-400'
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
                  <td className='pr-3 text-left font-sm'>
                    {editingUserId === user.id ? (
                      <input
                        className='w-23 px-1 border outline-none border-red-400'
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
                  <td className='pr-3 text-left font-sm '>
                    {editingUserId === user.id ? (
                      <input
                        className='w-23 px-1 border outline-none border-red-400'
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
                  <td className='pr-3 text-left font-sm '>
                    {editingUserId === user.id ? (
                      <input
                        className='w-23 px-1 border outline-none border-red-400'
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
                  <td className=''>
                    {editingUserId === user.id ? (
                      <>
                        <button
                          className='bg-green-300 text-left font-sm py-1 px-3'
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
                        className='bg-red-400 text-left font-sm py-1 px-3 mt-5'
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
