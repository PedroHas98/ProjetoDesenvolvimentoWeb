import React from 'react'
import './Home.css'


import Sidebar from '../../components/Sidebar'
import Tabs from '../../components/Tabs'
import Grids from '../../components/Grids'
import Tabela from '../../components/Tabela'

const Home = ( ) => {

  return (
    <> 
    <main nomeClass="main"> 
      <div nomeClass="bar"> 
        <Sidebar/>
      </div>
        <div className="grid-externa"> 
          <div className="grid"> 
           <Tabs/>
            <Tabela/>
          </div> 
        </div>
       
    </main>
    </>
  )

}

export default Home