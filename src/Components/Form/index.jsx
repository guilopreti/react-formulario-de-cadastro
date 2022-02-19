import { FormCad } from "./styled";
import Button from "../Button/index.jsx";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Form = () => {
  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Nome Obrigatório")
      .matches(/^[a-zA-Z ]{2,30}$/gm, "Apenas letras"),
    email: yup.string().email("Email invalido").required("Email Obrigatório"),
    password: yup
      .string()
      .required("Senha Obrigatória")
      .matches(
        /(?=.*\d)(?=.*[a-z])(?=.*[$*&@#])[\w $*&@#]{8,}/gm,
        "Deve ter letras, números e ao menos um símbolo e 8 caracteres"
      ),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas Diferentes")
      .required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const [noName, setNoName] = useState(false);
  const [noEmail, setNoEmail] = useState(false);
  const [noPassword, setNoPassword] = useState(false);
  const [noConfirmation, setNoConfirmation] = useState(false);

  const firstNothing = () => {
    const myForm = document.querySelector("form");
    const inputs = [];
    for (let i = 0; i < myForm.length; i++) {
      const { name } = myForm[i];
      if (name) {
        inputs.push(myForm[i]);
        myForm[i].oninvalid = function (evt) {
          evt.preventDefault();
        };
      }
    }
    if (!inputs[0].validity.valid && !errors.name?.message) {
      setNoName(true);
    } else {
      setNoName(false);
    }
    if (!inputs[1].validity.valid && !errors.email?.message) {
      setNoEmail(true);
    } else {
      setNoEmail(false);
    }
    if (!inputs[2].validity.valid && !errors.password?.message) {
      setNoPassword(true);
    } else {
      setNoPassword(false);
    }
    if (!inputs[3].validity.valid && !errors.confirm_password?.message) {
      setNoConfirmation(true);
    } else {
      setNoConfirmation(false);
    }
  };

  const history = useHistory();

  const onSubmit = (data) => {
    history.push(`/home/${data.name}`);
  };

  return (
    <FormCad
      onSubmit={handleSubmit(onSubmit)}
      color1={noName || errors.name?.message ? "#FF4500" : "aliceblue"}
      color2={noEmail || errors.email?.message ? "#FF4500" : "aliceblue"}
      color3={noPassword || errors.password?.message ? "#FF4500" : "aliceblue"}
      color4={
        noConfirmation || errors.confirm_password?.message
          ? "#FF4500"
          : "aliceblue"
      }
    >
      <div className={"input-name"}>
        <input {...register("name")} required />
        <label>Nome</label>
        {noName && <span>Nome Obrigatório</span>}
        <span>{errors.name?.message}</span>
      </div>
      <div className={"input-email"}>
        <input {...register("email")} required />
        <label>E-mail</label>
        {noEmail && <span>Email Obrigatório</span>}
        <span>{errors.email?.message}</span>
      </div>
      <div className={"input-senha"}>
        <input {...register("password")} type={"password"} required />
        <label>Senha</label>
        {noPassword && <span>Senha Obrigatória</span>}
        <span>{errors.password?.message}</span>
      </div>
      <div className={"input-conf-senha"}>
        <input {...register("confirm_password")} type={"password"} required />
        <label>Confirmar Senha</label>
        {noConfirmation && <span>Campo Obrigatório</span>}
        <span>{errors.confirm_password?.message}</span>
      </div>

      <Button onClick={firstNothing}>CADASTRAR</Button>
    </FormCad>
  );
};

export default Form;
