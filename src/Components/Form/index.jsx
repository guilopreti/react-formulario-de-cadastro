import { FormCad } from "./styled";
import Button from "../Button/index.jsx";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Form = () => {
  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Nome Obrigatório")
      .matches(/^[a-zA-Z ]{2,30}$/gm),
    email: yup.string().email("Email invalido").required("Email Obrigatório"),
  });

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <FormCad onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Nome" {...register("name")} />
      <input placeholder="E-mail" {...register("email")} />
      <input placeholder="Senha" {...register("password")} />
      <input placeholder="Confirmar Senha" {...register("confirm_password")} />
      <Button>CADASTRAR</Button>
    </FormCad>
  );
};

export default Form;
