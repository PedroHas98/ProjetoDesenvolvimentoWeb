import React from 'react'
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    useDisclosure,
    Button
  } from '@chakra-ui/react'
  
  import {
    FiCheckSquare
  } from 'react-icons/fi';

  function ModalConcluir() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
  
    return (
      <>
        <Button leftIcon={<FiCheckSquare/>} colorScheme='none' onClick={onOpen} color='black'/>
  
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                Concluir Tarera
              </AlertDialogHeader>
  
              <AlertDialogBody>
                 Realmente deseja Concluir a tarefa?
              </AlertDialogBody>
  
              <AlertDialogFooter>
               <Button ref={cancelRef} onClick={onClose} borderRadius='full'>
                  Cancelar
                </Button>
                
                <Button colorScheme='blue' onClick={onClose} ml={3} borderRadius='full'>
                  Concluir
                </Button> 
                
                
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    )
  }

  export default ModalConcluir