"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
const UserInfo = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };
  return (
    <div className=" absolute right-4 top-4  flex items-center gap-3 text-sm ">
      {user ? (
        <div className="flex flex-col items-center gap-1">
          <Link href={'/profile'}>
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
              <img alt={user?.name} src={user?.image as string} />
            </div>
          </div></Link>
          <h1 className="font-semibold">{user?.name}</h1>
          <button
            onClick={handleSignOut}
            className="btn bg-red-700 text-white btn-xs"
          >
            সাইন আউট
          </button>
        </div>
      ) : (
        <div>
          <Link
            href={"/signIn"}
            className="btn btn-ghost btn-sm rounded px-4 font-medium text-gray-700 hover:bg-gray-100 sm:btn-md"
          >
            সাইন ইন
          </Link>
          <Link
            href={"/signUp"}
            className="btn btn-sm rounded border-none bg-[#C10007] px-5 font-medium text-white shadow-md shadow-red-200 transition hover:bg-red-800 sm:btn-md"
          >
            সাইন আপ
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
