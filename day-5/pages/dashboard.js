import Link from "next/link";
import { useEffect, useState } from "react";

function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    async function fetchDashboardData() {
      const res = await fetch("http://localhost:4000/dashboard");
      const data = await res.json();
      setDashboardData(data);
      setIsLoading(false);
    }
    fetchDashboardData();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <Link href="/">Home</Link>
      <h2>Dashboard</h2>
      <br />
      <h3>Likes - {dashboardData.likes}</h3>
      <br />
      <h3>Followers - {dashboardData.followers}</h3>
      <br />
      <h3>Following - {dashboardData.following}</h3>
      <br />
      <h3>Posts - {dashboardData.posts}</h3>
      <br />
    </div>
  );
}

export default Dashboard;
