import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
      <h5 className="text-white">Sign In</h5>
      <SignIn />
    </>
  );
}
