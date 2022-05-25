import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    FormControl,
    FormLabel,
    Input,
  } from '@chakra-ui/react'
  import {
    FiPlusSquare,

  } from 'react-icons/fi';

  function CreateGrup() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef()
    const finalRef = React.useRef()

    return (
      <>
        <Button leftIcon={<FiPlusSquare/>} color='black' colorScheme='none' onClick={onOpen}>
          Novo Grupo
        </Button>

  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Criar Novo Grupo</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Nome do Grupo</FormLabel>
                <Input ref={initialRef} placeholder='Insira o nome do Grupo' />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} borderRadius='full'>
                Salvar
              </Button>
              <Button onClick={onClose} borderRadius='full'>Cancelar</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default CreateGrup