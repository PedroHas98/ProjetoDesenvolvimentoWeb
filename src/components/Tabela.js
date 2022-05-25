import React from 'react'

import ModalExcluir from '../components/ModalExcluir'
import ModalConcluir from '../components/ModalConcluir'
import ModalEditTask from '../components/ModalEditarTask'
import ModalCreateTask from '../components/ModalCreateTask'


import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

  const Tabela = () => {
    return (
<TableContainer>
  <Table variant='simple'>
    <TableCaption>Imperial to metric conversion factors</TableCaption>
    <Thead>
      <Tr>
        <Th>Tarefas</Th>
        <Th>Descrição</Th>
        <Th>Ações</Th>
        <Th>Status</Th>
        <Th>Data</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Comprar Flores</Td>
        <Td>Flores Vermelhas</Td>
        <Td><ModalConcluir/><ModalEditTask/><ModalExcluir/></Td>
        <Td>Andamento</Td>
        <Td>30 de Junho</Td>
      </Tr>
      <Tr>
      <Td>Comprar Flores</Td>
        <Td>Flores Vermelhas</Td>
        <Td><ModalConcluir/><ModalEditTask/><ModalExcluir/></Td>
        <Td>Andamento</Td>
        <Td>30 de Junho</Td>
      </Tr>
      <Tr>
      <Td>Comprar Flores</Td>
        <Td>Flores Vermelhas</Td>
        <Td><ModalConcluir/><ModalEditTask/><ModalExcluir/></Td>
        <Td>Andamento</Td>
        <Td>30 de Junho</Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
        <Th><ModalCreateTask/></Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
    )

}

export default Tabela

  