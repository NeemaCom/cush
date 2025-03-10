import React from "react";
import { FiCheck, FiMessageSquare, FiFile, FiStar } from "react-icons/fi";
const UserActivities = () => {
  const activities = [
    {
      id: 1,
      type: "completion",
      icon: <FiCheck className='h-5 w-5 text-green-500' />,
      content: "Completed the Frontend Development task",
      timestamp: "2 hours ago",
      bgColor: "bg-green-100",
    },
    {
      id: 2,
      type: "comment",
      icon: <FiMessageSquare className='h-5 w-5 text-blue-500' />,
      content: "Commented on API Documentation",
      timestamp: "4 hours ago",
      bgColor: "bg-blue-100",
    },
    {
      id: 3,
      type: "file",
      icon: <FiFile className='h-5 w-5 text-purple-500' />,
      content: "Uploaded new design files",
      timestamp: "6 hours ago",
      bgColor: "bg-purple-100",
    },
    {
      id: 4,
      type: "achievement",
      icon: <FiStar className='h-5 w-5 text-yellow-500' />,
      content: 'Earned "Quick Learner" badge',
      timestamp: "1 day ago",
      bgColor: "bg-yellow-100",
    },
  ];
  return (
    <div className='bg-white shadow rounded-lg'>
      <div className='p-6'>
        <h2 className='text-lg font-medium text-gray-900'>Recent Activities</h2>
        <div className='mt-6 flow-root'>
          <ul className='-mb-8'>
            {activities.map((activity, activityIdx) => (
              <li key={activity.id}>
                <div className='relative pb-8'>
                  {activityIdx !== activities.length - 1 && (
                    <span
                      className='absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200'
                      aria-hidden='true'
                    />
                  )}
                  <div className='relative flex space-x-3'>
                    <div>
                      <span
                        className={`h-8 w-8 rounded-full ${activity.bgColor} flex items-center justify-center ring-8 ring-white`}>
                        {activity.icon}
                      </span>
                    </div>
                    <div className='flex min-w-0 flex-1 justify-between space-x-4 pt-1.5'>
                      <div>
                        <p className='text-sm text-gray-500'>
                          {activity.content}
                        </p>
                      </div>
                      <div className='whitespace-nowrap text-right text-sm text-gray-500'>
                        {activity.timestamp}
                      </div>
                    </div>
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
export default UserActivities;
