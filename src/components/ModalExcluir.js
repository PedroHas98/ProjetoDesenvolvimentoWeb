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
  MdDeleteOutline,
  } from 'react-icons/md';
  


  function ModalExcluir() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
  
    return (
      <>
        <Button leftIcon={<MdDeleteOutline/>} colorScheme='none' onClick={onOpen} color='black'>
        </Button>
  
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                Excluir Tarera
              </AlertDialogHeader>
  
              <AlertDialogBody>
                 Realmente deseja Excluir a tarefa?
              </AlertDialogBody>
  
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose} borderRadius='full'>
                  Cancelar
                </Button>
                <Button colorScheme='red' onClick={onClose} ml={3} borderRadius='full'>
                  Excluir
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    )
  }

  export default ModalExcluir