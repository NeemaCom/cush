import React from "react";
import { FiClock, FiCheckCircle } from "react-icons/fi";
const UserTask = () => {
  const tasks = [
    {
      id: 1,
      title: "Review Pull Request #123",
      priority: "High",
      dueDate: "Today",
      status: "In Progress",
    },
    {
      id: 2,
      title: "Update User Documentation",
      priority: "Medium",
      dueDate: "Tomorrow",
      status: "Pending",
    },
    {
      id: 3,
      title: "Fix Navigation Bug",
      priority: "High",
      dueDate: "Today",
      status: "In Progress",
    },
    {
      id: 4,
      title: "Team Weekly Meeting",
      priority: "Medium",
      dueDate: "2 days",
      status: "Upcoming",
    },
  ];
  return (
    <div className='bg-white shadow rounded-lg'>
      <div className='p-6'>
        <div className='flex items-center justify-between mb-6'>
          <h2 className='text-lg font-medium text-gray-900'>Current Tasks</h2>
          <button className='px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700'>
            Add Task
          </button>
        </div>
        <div className='overflow-hidden'>
          <ul className='divide-y divide-gray-200'>
            {tasks.map((task) => (
              <li key={task.id} className='py-4'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center'>
                    <input
                      type='checkbox'
                      className='h-4 w-4 text-indigo-600 border-gray-300 rounded'
                    />
                    <div className='ml-3'>
                      <p className='text-sm font-medium text-gray-900'>
                        {task.title}
                      </p>
                      <div className='flex items-center mt-1'>
                        <FiClock className='h-4 w-4 text-gray-400' />
                        <span className='ml-1 text-xs text-gray-500'>
                          Due {task.dueDate}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center'>
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${
                          task.priority === "High"
                            ? "bg-red-100 text-red-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}>
                      {task.priority}
                    </span>
                    <span
                      className={`ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${
                          task.status === "In Progress"
                            ? "bg-blue-100 text-blue-800"
                            : task.status === "Completed"
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                        }`}>
                      {task.status}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default UserTask;
