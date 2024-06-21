import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const DashboardPage = () => {
  const { data: session } = useSession();

  if (!session) {
    redirect('/auth/signin')
  }
  return <h2>Dashboard</h2>
}

export default DashboardPage