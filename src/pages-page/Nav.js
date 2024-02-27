import React from 'react'
import jsontext from '../jsons/TextApp.json'
import '../jsons/Design.css'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

export const Nav = () => {
  const navigate = useNavigate();
  return (<>
    <nav id='navigation-container'>
      <div>
        <Button onClick={()=>{ navigate('/')}} variant="outlined" size="small">
          {jsontext.MainApp.header}
        </Button>
      </div>
      <div>
        <Button variant="outlined" size="small">
          {jsontext.MainApp.login}
        </Button>
        <Button variant="outlined" size="small">
          {jsontext.MainApp.sign_up}
        </Button>
      </div>
    </nav>
  </>)
}
