import Link from "next/link";
import useSWR from "swr";

const fetcher = async () => {
  const res = await fetch("http://localhost:4000/dashboard");
  const data = res.json();
  return data;
};

function DashboardSER() {
  const { data, error } = useSWR("dashboard", fetcher);

  if (error) return "An error has occured";
  if (!data) return "Loading...";

  return (
    <div>
      <Link href="/">Home</Link>
      <h2>Dashboard</h2>
      <br />
      <h3>Likes - {data.likes}</h3>
      <h3>Followers - {data.followers}</h3>
      <h3>Following - {data.following}</h3>
      <h3>Posts - {data.posts}</h3>
    </div>
  );
}

export default DashboardSER;
