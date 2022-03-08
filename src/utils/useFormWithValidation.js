import React, { useState } from 'react';

export function useFormWithValidation() {
  const [values, setValues] = useState({ name: '' });
  const [errors, setErrors] = useState({ name: '' });
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest('form').checkValidity());
  };

  return { values, handleChange, errors, isValid };
}
