import React from 'react'
import { useToast, Button, WrapItem, Wrap } from '@chakra-ui/react'

function NotificaErro() {
    const toast = useToast()
    const success ='success'
  
    return (
      <Wrap>
          <WrapItem key={success}>
            <Button
              onClick={() =>
                toast({
                  title: `Grupo Criado com Sucesso!`,
                  status: success,
                  isClosable: true,
                })
              }
            >
             Sucesso
            </Button>
          </WrapItem>
      </Wrap>
    )
  }

  export default NotificaErro