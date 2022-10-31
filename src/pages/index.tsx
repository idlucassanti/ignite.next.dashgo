import { Button, Flex, Input, Stack, FormLabel, FormControl } from '@chakra-ui/react';
import React from 'react';

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

            <FormControl>
              <FormLabel htmlFor='email'>E-mail</FormLabel>
              <Input 
                id='email'
                type="email" 
                name="email" 
                focusBorderColor='pink.500' 
                bgColor="gray.900"
                variant="filled"
                size="lg"
                _hover={{
                  bg: "gray.900"
                }}
              />
            </FormControl>
            
            <FormControl>
              <FormLabel htmlFor='password'>Senha</FormLabel>
              <Input 
                id='password'
                type="password" 
                name="password" 
                focusBorderColor='pink.500' 
                bgColor="gray.900"
                variant="filled"
                size="lg"
                _hover={{
                  bg: "gray.900"
                }}
              />
            </FormControl>
          </Stack>

        <Button type="submit" mt={6} colorScheme="pink" size="lg">Entrar</Button>
      </Flex>
    </Flex>
  )
}
