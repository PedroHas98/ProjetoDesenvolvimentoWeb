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
    Radio, 
    RadioGroup, 
    Stack
  } from '@chakra-ui/react'
  import {
    BiEdit,
  } from 'react-icons/bi';

const Prioridade = () => {
    const [value, setValue] = React.useState('1')
    return (
      <RadioGroup onChange={setValue} value={value}>
        <Stack direction='row'>
          <Radio value='1'>Baixa</Radio>
          <Radio value='2'>Média</Radio>
          <Radio value='3'>Alta</Radio>
          <Radio value='4'>Não Definida</Radio>
        </Stack>
      </RadioGroup>
    )
  }
function EditTask() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef()
    const finalRef = React.useRef()
  
    return (
      <>
        <Button leftIcon={<BiEdit/>} colorScheme='none' onClick={onOpen} color='black'>
        </Button>
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Editar Tarefa</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl padding='2'>
                <Input ref={initialRef} placeholder='Nome da tarefa' />
              </FormControl>

              <FormControl padding='2'> 
                <Input ref={initialRef} placeholder='Descrição' />
              </FormControl>
              <FormLabel>Prioridade</FormLabel>
   <Prioridade/>
              <FormControl mt={4}>
                <Input padding='2' type="date" placeholder='Data' />
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

  export default EditTask