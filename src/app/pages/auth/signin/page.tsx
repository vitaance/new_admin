"use client"
import { loginFetch } from "@/app/lib/api"
import { FormEvent, useEffect, useState } from "react"

const SignInPage = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  })
  
  const [basicURL, setBasicURL] = useState('')

  useEffect(() => {
    setBasicURL(process.env.NEXT_PUBLIC_ADMIN_SERVER_URL || '');
  }, []);

  const handleCredentials = (e: any) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = async(event: FormEvent) => {
    event.preventDefault();
     await loginFetch({basicURL, credentials})
  }

  return (
    <div className="mt-5">
      <form
        onSubmit={onSubmit}
        className="max-w-sm mx-auto"
      >
        <div className="mb-5">
          <input
            type="email"
            name="email"
            placeholder="email"
            value={credentials.email}
            onChange={handleCredentials}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required 
          />
        </div>
        <div className="mb-5">
          <input
            type="password"
            placeholder="password"
            name="password"
            value={credentials.password}
            onChange={handleCredentials}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required 
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Sign-in
        </button>
      </form>
    </div>
  )
}

export default SignInPage