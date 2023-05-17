import React,{useState} from 'react'
import {AppBar,Toolbar,Tabs,Tab, Typography} from '@mui/material'
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [value,setValue] = useState()
  return (
    <div>
        <AppBar sx={{background:"#e67709"}} position="sticky">

             <Toolbar>
                <Typography>
                    

                </Typography>

                <h2>Mareeswaran</h2>

                <Tabs sx={{ml:"auto"}}

                      textColor='inherit' 

                      indicatorColor='primary'

                      value={value} onChange={(e,val)=>setValue(val)}  >

                        

                  <Tab LinkComponent={NavLink} to="/about" label="About Us" />

                    
                  <Tab LinkComponent={NavLink} to="/add" label="Add product" />


                   <Tab LinkComponent={NavLink} to="/mobiles" label="Mobiles" /> 

                </Tabs>

            </Toolbar>

        </AppBar>

    </div>
  )
  }

export default Header