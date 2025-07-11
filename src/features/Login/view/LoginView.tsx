import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { Paper } from "../../../components/Paper";
import { useLoginController } from "../controller/LoginController";

export function LoginView() {
  const { register, formState, handleSubmit, onSubmit, isSubmitting } =
    useLoginController();

  return (
    <div className="h-(--screen-minus-header) flex justify-center items-center">
      <Paper className="w-100 min-h-90 p-6">
        <h1 className="text-2xl font-bold mb-8 border-b-1 border-secondary">
          Login
        </h1>
        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <Input
            name="email"
            label="Email"
            register={register}
            error={formState.errors.email?.message}
          />
          <Input
            type="password"
            name="password"
            label="Senha"
            register={register}
            error={formState.errors.password?.message}
          />
          <div className="flex justify-end mt-8">
            <Button type="submit" loading={isSubmitting}>
              Entrar
            </Button>
          </div>
        </form>
      </Paper>
    </div>
  );
}
