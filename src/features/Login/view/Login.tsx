import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { Paper } from "../../../components/Paper";
import { useForm } from "../../../hooks/useForm";

interface LoginForm {
  email: string;
  password: string;
}

export function LoginView() {
  const { control } = useForm<LoginForm>();

  return (
    <div className="h-(--screen-minus-header) flex justify-center items-center">
      <Paper className="w-100 h-90 p-6">
        <h1 className="text-2xl font-bold mb-8 border-b-1 border-secondary">
          Login
        </h1>
        <form className="flex flex-col gap-4">
          <Input type="email" name="email" label="Email" control={control} />
          <Input
            type="password"
            name="password"
            label="Senha"
            required
            control={control}
          />
        </form>
        <div className="flex justify-end mt-8">
          <Button type="submit">Entrar</Button>
        </div>
      </Paper>
    </div>
  );
}
