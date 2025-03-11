import React, { useState, useEffect } from "react";
import { HiUsers, HiDocumentText } from "react-icons/hi"; // Import new icon
import { db } from "../../Firebase";
import { collection, collectionGroup, getDocs } from "firebase/firestore"; // Use collection instead of collectionGroup
import { HiCurrencyDollar, HiArrowUp, HiArrowDown } from "react-icons/hi";

const CushStats = () => {
  const [userCount, setUserCount] = useState(0);
  const [applicationCount, setApplicationCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [userError, setUserError] = useState(null);
  const [applicationError, setApplicationError] = useState(null);

  useEffect(() => {
    const fetchUserCount = async () => {
      try {
        const usersCollection = collectionGroup(db, "cushusers");
        const userSnapshot = await getDocs(usersCollection);
        setUserCount(userSnapshot.size);
      } catch (err) {
        console.error("Error fetching user count:", err);
        setUserError("Failed to load user count. Please try again.");
      }
    };

    const fetchApplicationCount = async () => {
      try {
        const applicationsCollection = collection(db, "cushpcc"); // Use collection
        const applicationSnapshot = await getDocs(applicationsCollection);
        setApplicationCount(applicationSnapshot.size);
      } catch (err) {
        console.error("Error fetching application count:", err);
        setApplicationError(
          "Failed to load application count. Please try again."
        );
      }
    };

    Promise.all([fetchUserCount(), fetchApplicationCount()]).then(() =>
      setLoading(false)
    );
  }, []);

  const stats = [
    {
      name: "Total Users",
      value: loading ? "Loading..." : userCount.toLocaleString(),
      change: "+12%",
      icon: HiUsers,
      trend: "up",
    },
    {
      name: "Total Applications",
      value: loading ? "Loading..." : applicationCount.toLocaleString(),
      change: "+15%",
      icon: HiDocumentText,
      trend: "up",
    },
    {
      name: "Total Deposits",
      value: 0,
      change: "+23%",
      icon: HiArrowUp,
      trend: "up",
    },
    {
      name: "Total Withdrawals",
      value: 0,
      change: "-5%",
      icon: HiArrowDown,
      trend: "down",
    },
    {
      name: "Active Balance",
      value: 0,
      change: "+18%",
      icon: HiCurrencyDollar,
      trend: "up",
    },
  ];

  if (userError || applicationError) {
    return <div className='text-red-500'>{userError || applicationError}</div>;
  }

  return (
    <div>
      <h1 className='text-2xl font-bold mb-6'>Dashboard Overview</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {stats.map((stat) => (
          <div key={stat.name} className='bg-white rounded-lg p-6 shadow-sm'>
            <div className='flex items-center justify-between mb-4'>
              <stat.icon className='w-8 h-8 text-blue-500' />
              <span
                className={`text-sm font-medium ${
                  stat.trend === "up" ? "text-green-500" : "text-red-500"
                }`}>
                {stat.change}
              </span>
            </div>
            <h3 className='text-gray-500 text-sm'>{stat.name}</h3>
            <p className='text-2xl font-bold text-gray-900 mt-1'>
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CushStats;
