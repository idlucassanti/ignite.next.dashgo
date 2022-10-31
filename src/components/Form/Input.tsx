import { FormControl, FormLabel, Input as InputChakra, InputProps } from "@chakra-ui/react";

interface IInput extends InputProps {
  label?: string;
  name: string;
  type: string;
}

export function Input({name, label, type, ...rest}: IInput) {
  return(
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <InputChakra
        type={type} 
        id={name}
        name={name}
        size="lg"
        bgColor="gray.900"
        focusBorderColor="pink.500"
        variant="filled"
        _hover={{
          bg: "gray.900"
        }}
        {...rest}
      />
    </FormControl>
  );
}