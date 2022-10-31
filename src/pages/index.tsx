import { Button, Flex, Stack, FormLabel, FormControl } from '@chakra-ui/react';
import React from 'react';
import { Input } from '../components/Form/Input';

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex as="form" 
        w="100%" 
        maxW={360} 
        bg="gray.800" 
        p={8} 
        flexDir="column" 
        borderRadius={8}
        >
          <Stack spacing={4}>
            <Input 
              id='email'
              type="email" 
              name="email"
              label="E-mail"
            />

            <Input 
              id='password'
              type="password" 
              name="password"
              label="Senha"
            />
          </Stack>

        <Button type="submit" mt={6} colorScheme="pink" size="lg">Entrar</Button>
      </Flex>
    </Flex>
  )
}
