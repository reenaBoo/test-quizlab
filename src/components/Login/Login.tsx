import React from 'react';
import { StyledLogin, Form, Label, Input, Button } from './Login.styles';
import { ILogin } from './ILogin';

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
