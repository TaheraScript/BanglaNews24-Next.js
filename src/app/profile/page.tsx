"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
const ProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
const [show,setShow] = useState(false)
  
  const handleUpdateProfile = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    const newUserData =Object.fromEntries(formData.entries()) as{name:string,image:string}
    console.log(newUserData )
    await authClient.updateUser({
        ...newUserData
    })
  };
  const handleShowForm =()=>{
    setShow(!show)
  }
  return (
    <div className="mt-5">
      <div className="flex flex-col items-center gap-1">
        <Link href={"/profile"}>
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
              <img alt={user?.name} src={user?.image as string} />
            </div>
          </div>
        </Link>
        <h1 className="font-semibold">{user?.name}</h1>
        <p className="font-semibold">{user?.email}</p>
        <p className="font-semibold">{user?.id}</p>
        <p className="font-semibold">{user?.createdAt.toLocaleString()}</p>
        <p className="font-semibold">{user?.emailVerified}</p>
        <p className="font-semibold">{user?.updatedAt.toLocaleString()}</p>
         <button onClick={handleShowForm} className="btn bg-red-700 text-white" >এডিট প্রোফাইল</button>
      </div>
     
      {
        show && <form onSubmit={handleUpdateProfile}>
        <fieldset className="fieldset  rounded-box w-md  p-4">
          <label className="label">নাম</label>
          <input
            name="name"
            type="text"
            className="input  w-md"
            placeholder="Name"
          />
          <label className="label">Image</label>
          <input
            name="image"
            type="url"
            className="input  w-md"
            placeholder="ImageUrl"
          />
          <button type="submit" className="btn bg-red-700 text-white mt-4 ">
            প্রোফাইল আপডেট করুন
          </button>
        </fieldset>
      </form>
      }
    </div>
  );
};

export default ProfilePage;
