import React from 'react'
import { useToast, Button, WrapItem, Wrap } from '@chakra-ui/react'

function NotificaErro() {
    const toast = useToast()
    const error ='error'
  
    return (
      <Wrap>
          <WrapItem key={error}>
            <Button
              onClick={() =>
                toast({
                  title: `Erro ao Criar o  Grupo`,
                  status: error,
                  isClosable: true,
                })
              }
            >
             error
            </Button>
          </WrapItem>
      </Wrap>
    )
  }

  export default NotificaErro