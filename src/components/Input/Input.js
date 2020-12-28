import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { Container, FormControl, InputGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Input = forwardRef((props, ref,) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
  }));

  return (
  
    <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text ref={inputRef} {...props} id="inputGroup-sizing-default">{props.text}</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      aria-label={props.text}
      aria-describedby="inputGroup-sizing-default"
    />
  </InputGroup>
  
  
  );
});

export default Input;
