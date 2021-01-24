import React from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={logoImg} alt="GoBarber" />

      <form>
        <h1>Faça seu cadastrro</h1>

        <Input name="name" type="text" icon={FiUser} placeholder="Nome" />
        <Input name="email" type="text" icon={FiMail} placeholder="E-mail" />

        <Input
          name="password"
          type="password"
          icon={FiLock}
          placeholder="Senha"
        />

        <Button type="submit">Cadastrar</Button>
      </form>

      <a href="signup">
        <FiArrowLeft />
        Voltar ao login
      </a>
    </Content>
  </Container>
);

export default SignUp;
