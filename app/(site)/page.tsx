import Image from "next/image";
import AuthForm from "./components/AuthForm";
export default function Home() {
  return (
    <main className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100 align-center">
      <div className="sm:max-auto sm:w-full sm:max-w-md sm:mx-auto">
        <Image
          alt="logo"
          height={48}
          width={48}
          className="mx-auto "
          src="/images/logo.svg"
        />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Sign in to you account
        </h2>
      </div>
      <AuthForm/>
    </main>
  );
}
