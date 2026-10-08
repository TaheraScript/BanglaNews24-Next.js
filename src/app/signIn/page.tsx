"use client";

import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const SignInPage = () => {
  const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };

    const { data, error } = await authClient.signIn.email({
      ...user,
      callbackURL: "/",
    });
    if (data) {
      toast.success("successfully sign in");
      console.log(data);
    }
    if (error) {
      toast.error(error.message || "Something went wrong");
      console.log(error);
    }
  };
  const handleGoogleSignIn = async () => {
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
        সাইন ইন
      </h2>
      <div className="flex justify-center mt-2">
        <form onSubmit={onSubmit}>
          <fieldset className="fieldset  rounded-box w-md  p-4">
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
              সাইন ইন করুন
            </button>
          </fieldset>
        </form>
      </div>
      <div className="flex justify-center mt-2">
        <button
          onClick={handleGoogleSignIn}
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

export default SignInPage;
