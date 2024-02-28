import Link from "next/link";
import Step from "./Step";

export default function SignUpUserSteps() {
  return (
    <ol className="flex flex-col gap-6">
      <Step title="Sign up for an account">
        <p>
          Head over to the{" "}
          <Link
            href="/login"
            className="font-bold hover:underline text-foreground/80"
          >
            Login
          </Link>{" "}
          page and sign up your first user. It's okay if this is just you for
          now. This is an unprotected route that is visible to anyone.
        </p>
      </Step>
    </ol>
  );
}
