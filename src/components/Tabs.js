import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const Grids = () => {
    return (
<Tabs>
  <TabList>
    <Tab>Padrão</Tab>
    <Tab>Prioridade</Tab>
    <Tab>Hoje</Tab>
    <Tab>Semana</Tab>
    <Tab>Concluídas</Tab>
    <Tab>Importante</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
      <p> </p>
    </TabPanel>
    <TabPanel>
      <p> </p>
    </TabPanel>
    <TabPanel>
      <p> </p>
    </TabPanel>
    <TabPanel>
      <p> </p>
    </TabPanel>
    <TabPanel>
      <p> </p>
    </TabPanel>
    <TabPanel>
      <p> </p>
    </TabPanel>
  </TabPanels>
</Tabs>

    )

}


  export default Grids