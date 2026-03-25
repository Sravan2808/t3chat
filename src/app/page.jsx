import { Button } from "@/components/ui/button";
import { currentUser } from "@/modules/authenication/actions";
import UserButton from "@/modules/authenication/components/user-button";
import Image from "next/image";

export default async function Home() {
  const user = await currentUser();
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <UserButton user={user} />
    </div>
  );
}
