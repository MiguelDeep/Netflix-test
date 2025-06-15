"use client";

import Image from "next/image";
import bg from "@/images/bg.png";
import Button from "@/components/Button";
import Netflix from "@/images/netflix (1).svg";
import FooterPageLogin from "@/components/FooterPageLogin";
import InputForms from "@/components/InputForms";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      router.push("/browse");
    }
  }, []);

  const fakeUser = {
    email: "admin@gmail.com",
    password: "123456",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === fakeUser.email && password === fakeUser.password) {
      localStorage.setItem("isLoggedIn", "true");
      router.push("/browse");
    } else {
      setError("Email ou senha incorretos.");
    }
  };

  return (
    <div>
      <div className="bg-transparent"></div>
      <div className="relative h-screen w-full bg-black">
        <div className="absolute top-6 left-6 z-30">
          <Link href={"/"}>
            <Image
              src={Netflix}
              alt="Logo da Netflix"
              className="md:ml-50 ml-auto md:w-40 h-auto w-25"
              priority
            />
          </Link>
        </div>

        <Image
          src={bg}
          alt="Background"
          fill
          className="object-cover opacity-50"
        />

        <div className="absolute inset-0 gap-20 md:bg-black/30 bg-black bg-opacity-60 z-10" />

        <div className="absolute z-20 inset-0 flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="md:bg-black/50 bg-black bg-opacity-75 text-white px-10 py-8 pt-20 pb-20 rounded-md w-full max-w-md mx-auto"
          >
            <div className="flex flex-col space-y-4">
              <h1 className="text-4xl font-bold">Sign In</h1>

              {error && (
                <p className="text-red-500 bg-red-900 p-2 rounded text-center text-sm">
                  {error}
                </p>
              )}

              <div className="flex flex-col space-y-4">
                <InputForms
                  type="email"
                  placeholder="Email or mobile number"
                  name="email"
                  required
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                />

                <InputForms
                  type="password"
                  placeholder="Password"
                  name="password"
                  required
                  value={password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPassword(e.target.value)
                  }
                />

                <Button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 transition-colors duration-300 py-3 rounded text-white font-semibold"
                title=" Sign In"
                />

                <h1 className="text-center">OR</h1>
                <Button
                  type="button"
                  className="bg-zinc-800 hover:bg-zinc-900 transition-colors duration-300 py-3 rounded text-white font-semibold"
                  title="Use a Sign-in Code"
                />

                <h1 className="text-center">
                  <a href="#" className="underline">
                    Forget password
                  </a>
                </h1>
              </div>

              <div className="flex justify-between text-sm text-zinc-400">
                <label className="text-xl">
                  <input type="checkbox" className="mr-1" />
                  Remember me
                </label>
              </div>

              <p className="text-sm text-zinc-400">
                New to Netflix?
                <a href="#" className="text-white hover:underline">
                  {" "}
                  Sign up now
                </a>
              </p>

              <p className="text-sm text-zinc-400">
                This page is protected by Google reCAPTCHA to ensure you are not
                a bot.
                <a href="#" className="text-blue-600 underline ml-1">
                  Learn more.
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
      <FooterPageLogin />
    </div>
  );
}
