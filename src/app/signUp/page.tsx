"use client";

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      image: string;
      password: string;
    };

    const { data, error } = await authClient.signUp.email({
      ...user,
      callbackURL: "/",
    });
    if (data) {
      toast.success("successfully sign up");
      console.log(data);
      redirect("/");
    }
    if (error) {
      toast.error(error.message || "Something went wrong");
      console.log(error);
    }
  };
  const handleGoogleSignUp = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };
  const handleGithubSignIn = async () => {
    await authClient.signIn.social({
      provider: "github",
    });
  };

  return (
    <div>
      <h2 className="text-red-700 font-bold flex justify-center text-xl mt-4">
        সাইন আপ
      </h2>
      <div className="flex justify-center mt-2">
        <form onSubmit={onSubmit}>
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

            <label className="label">ইমেইল</label>
            <input
              name="email"
              type="email"
              className="input  w-md"
              placeholder="Email"
            />
            <label className="label">পাসওয়ার্ড</label>
            <input
              name="password"
              type="password"
              className="input  w-md"
              placeholder="Password"
            />

            <button type="submit" className="btn bg-red-700 text-white mt-4 ">
              সাইন আপ করুন
            </button>
          </fieldset>
        </form>
      </div>
      <div className="flex justify-center mt-2">
        <button
          onClick={handleGoogleSignUp}
          className="bg-red-700 text-white btn "
        >
          Sign In With Google
        </button>
      </div>
      <div className="flex justify-center mt-2">
        <button
          onClick={handleGithubSignIn}
          className="bg-red-700 text-white btn "
        >
          Sign In With Github
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;
