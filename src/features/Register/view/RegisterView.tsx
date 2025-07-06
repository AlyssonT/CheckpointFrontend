import { useActionData, useSubmit } from "react-router";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { Paper } from "../../../components/Paper";
import { useForm } from "react-hook-form";
import { registerSchema, type RegisterForm } from "../models/registerModels";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

export function RegisterView() {
  const { register, handleSubmit } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
  });

  const submit = useSubmit();
  const onSubmit = (data: RegisterForm) => {
    submit(data, {
      method: "post",
      action: "/register",
    });
  };

  const actionData = useActionData();
  useEffect(() => {
    console.log(actionData);
  }, [actionData]);

  return (
    <div className="h-(--screen-minus-header) flex justify-center items-center">
      <Paper className="w-100 h-140 p-6">
        <h1 className="text-2xl font-bold mb-8 border-b-1 border-secondary">
          Cadastro
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          method="post"
          action="/register"
          className="flex flex-col gap-4"
        >
          <Input name="name" label="Nome de usuário" register={register} />
          <Input type="email" name="email" label="Email" register={register} />
          <Input
            type="password"
            name="password"
            label="Senha"
            register={register}
          />
          <Input
            type="password"
            name="confirmPassword"
            label="Confirmação de senha"
            register={register}
          />
          <div className="flex justify-end mt-6">
            <Button type="submit">Cadastrar</Button>
          </div>
        </form>
      </Paper>
    </div>
  );
}
