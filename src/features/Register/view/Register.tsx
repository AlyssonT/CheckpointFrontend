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
      <Paper className="w-120 h-150 p-6">
        <form className="flex flex-col gap-4">
          <Input
            type="text"
            name="name"
            label="Nome de usuário"
            control={control}
          />
          <Input type="email" name="email" label="Email" control={control} />
          <Input
            type="password"
            name="password"
            label="Senha"
            control={control}
          />
          <Input
            type="password"
            name="confirmPassword"
            label="Confirmação de senha"
            control={control}
          />
        </form>
      </Paper>
    </div>
  );
}
