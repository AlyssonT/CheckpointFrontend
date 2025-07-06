import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { Paper } from "../../../components/Paper";
import { useForm } from "../../../hooks/useForm";

interface RegisterForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export function RegisterView() {
  const { control } = useForm<RegisterForm>();

  return (
    <div className="h-(--screen-minus-header) flex justify-center items-center">
      <Paper className="w-100 h-140 p-6">
        <h1 className="text-2xl font-bold mb-8 border-b-1 border-secondary">
          Cadastro
        </h1>
        <form className="flex flex-col gap-4">
          <Input
            type="text"
            name="name"
            label="Nome de usuário"
            required
            control={control}
          />
          <Input type="email" name="email" label="Email" control={control} />
          <Input
            type="password"
            name="password"
            label="Senha"
            required
            control={control}
          />
          <Input
            type="password"
            name="confirmPassword"
            label="Confirmação de senha"
            required
            control={control}
          />
        </form>
        <div className="flex justify-end mt-8">
          <Button type="submit">Cadastrar</Button>
        </div>
      </Paper>
    </div>
  );
}
