import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { Paper } from "../../../components/Paper";
import { useRegisterController } from "../controller/RegisterController";

export function RegisterView() {
  const { register, handleSubmit, onSubmit, isSubmitting, formState } =
    useRegisterController();

  return (
    <div className="h-(--screen-minus-header) flex justify-center items-center">
      <Paper className="w-100 min-h-140 p-6">
        <h1 className="text-2xl font-bold mb-8 border-b-1 border-secondary">
          Cadastro
        </h1>
        <form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <Input
            name="name"
            label="Nome de usuário"
            register={register}
            error={formState.errors.name?.message}
          />
          <Input
            type="email"
            name="email"
            label="Email"
            register={register}
            error={formState.errors.email?.message}
          />
          <Input
            type="password"
            name="password"
            label="Senha"
            error={formState.errors.password?.message}
            register={register}
          />
          <Input
            type="password"
            name="confirmPassword"
            label="Confirmação de senha"
            error={formState.errors.confirmPassword?.message}
            register={register}
          />
          <div className="flex justify-end mt-6">
            <Button type="submit" loading={isSubmitting}>
              Cadastrar
            </Button>
          </div>
        </form>
      </Paper>
    </div>
  );
}
