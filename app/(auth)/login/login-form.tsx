"use client"

import Form from "next/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useActionState } from "react"
import loginAction from "./loginAction"
import { FaSpinner } from "react-icons/fa"

const LoginForm = () => {
  const [state, formAction, isPending] = useActionState(loginAction, null)

  return (
    <>
      {state?.success === false && (
        <div
          className="flex flex-col mb-6 text-xs bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Erro!</strong>
          <span className="block sm:inline">{state.message}</span>
        </div>
      )}
      <Form action={formAction}>
        <div>
          <Label>Email</Label>
          <Input type="email" name="email" placeholder="eu@exemplo.com" />
        </div>
        <div>
          <Label>Senha</Label>
          <Input type="password" name="password" placeholder="********" />
        </div>
        <div>
          <Button disabled={isPending} className="w-full mt-6" type="submit">
            {isPending ? <FaSpinner className="animate-spin" /> : "Login"}
          </Button>
        </div>
      </Form>
    </>
  )
}

export default LoginForm
