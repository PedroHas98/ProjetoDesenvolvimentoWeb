import React from 'react'
import '../pages/home/Home.css'
import { Grid, GridItem} from '@chakra-ui/react'


import {
  BiEdit,
} from 'react-icons/bi';

import {
MdDeleteOutline,
} from 'react-icons/md';

import {
  AiOutlineCheckCircle,
  } from 'react-icons/ai';



const Grids = () => {
    return (

        <Grid templateColumns='repeat(5, 0.5fr)' gap={0.5}>
              <GridItem w='100%' h='5' bg='#FFFFFF'> <item> Tarefa </item></GridItem>
              <GridItem w='100%' h='5' bg='#FFFFFF'> Descrição da Atividade</GridItem>
              <GridItem w='100%' h='5' bg='#FFFFFF'>Ações</GridItem>
              <GridItem w='100%' h='5' bg='#FFFFFF'>Status</GridItem>
              <GridItem w='100%' h='5' bg='#FFFFFF'>Data</GridItem>
              
              <GridItem w='100%' h='5' bg='#ECE4D9'>Regar Plantas</GridItem>
              <GridItem w='100%' h='5' bg='#ECE4D9'>Regar as plantas do jardim</GridItem>
              <GridItem  className="GridItem-acoes"> <item> <a href=''><AiOutlineCheckCircle size='16'/>  </a>
                                                            <a href='http://'><BiEdit size='16'/>                            </a> 
                                                            <a href='http://'><MdDeleteOutline size='16'/>                   </a></item> </GridItem>
              <GridItem w='100%' h='5' bg='#ECE4D9'>Andamento </GridItem>
              <GridItem w='100%' h='5' bg='#ECE4D9'>30 de junho</GridItem>

              <GridItem w='100%' h='5' bg='#ECE4D9'>Regar Plantas</GridItem>
              <GridItem w='100%' h='5' bg='#ECE4D9'>Regar as plantas do jardim</GridItem>
              <GridItem w='100%' h='5' bg='#ECE4D9'>Ações</GridItem>
              <GridItem w='100%' h='5' bg='#ECE4D9'>Andamento </GridItem>
              <GridItem w='100%' h='5' bg='#ECE4D9'>30 de junho</GridItem>

              <GridItem w='100%' h='5' bg='#ECE4D9'>Regar Plantas</GridItem>
              <GridItem w='100%' h='5' bg='#ECE4D9'>Regar as plantas do jardim</GridItem>
              <GridItem w='100%' h='5' bg='#ECE4D9'>Ações</GridItem>
              <GridItem w='100%' h='5' bg='#ECE4D9'>Andamento </GridItem>
              <GridItem w='100%' h='5' bg='#ECE4D9'>30 de junho</GridItem>

              <GridItem w='100%' h='5' bg='#ECE4D9'>Regar Plantas</GridItem>
              <GridItem w='100%' h='5' bg='#ECE4D9'>Regar as plantas do jardim</GridItem>
              <GridItem w='100%' h='5' bg='#ECE4D9'>Ações</GridItem>
              <GridItem w='100%' h='5' bg='#ECE4D9'>Andamento </GridItem>
              <GridItem w='100%' h='5' bg='#ECE4D9'>30 de junho</GridItem>
            </Grid>
      
    )
  }

  
  export default Grids