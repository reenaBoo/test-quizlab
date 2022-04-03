import React from 'react';
import { StyledLogin, Form, Label, Input, Button, StyledImg } from './Login.styles';
import { ILogin } from './ILogin';
import Peppa from '../../assets/images/peppa-twiiter.png'

function Login({ value, setValue, onSubmit }: ILogin) {
  function handleChange(e: any) {
    setValue(e.target.value);
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    onSubmit();
  }

  return (
    <StyledLogin>
      <StyledImg src={Peppa} />
      <Form onSubmit={handleSubmit} noValidate>
        <Label htmlFor="name">Введите имя</Label>
        <Input
          minLength={3}
          maxLength={12}
          type="text"
          name="name"
          id="name"
          required
          onChange={handleChange}
          value={value}
        />
        <Button type="submit" disabled={!value}>
          Продолжить
        </Button>
      </Form>
    </StyledLogin>
  );
}

export default Login;
