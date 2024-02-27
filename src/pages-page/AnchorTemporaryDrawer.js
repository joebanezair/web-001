import { SiGnuprivacyguard } from "react-icons/si";
import { MdLogin } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import jsontext from '../jsons/TextApp.json'
import '../jsons/Design.css'
import { CiHome } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

export default function AnchorTemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const navigate = useNavigate();
  const openDrawer = () => {
    setState({ ...state, left: true });
  };

  const closeDrawer = () => {
    setState({ ...state, left: false });
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={closeDrawer}
      onKeyDown={closeDrawer}
    >
      <List>
        <ListItem onClick={
            ()=>{
                navigate('/', {replace:true})
            }
        } disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <CiHome />
            </ListItemIcon>
            <ListItemText id="jsonText" primary={jsontext.MainApp.change_password} />
          </ListItemButton>
        </ListItem>
        <ListItem onClick={ ()=>{
                navigate('/', {replace:true})
            }} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MdLogin />
            </ListItemIcon>
            <ListItemText id="jsonText" primary={jsontext.MainApp.login} />
          </ListItemButton>
        </ListItem>
        <ListItem onClick={ ()=>{
                navigate('/', {replace:true})
            }} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SiGnuprivacyguard />
            </ListItemIcon>
            <ListItemText id="jsonText" primary={jsontext.MainApp.sign_up} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton id="jsonText">
            <ListItemText  primary={jsontext.MainApp.joebanezair} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={openDrawer}><RxHamburgerMenu style={{color: 'black', fontSize: 20, color: 'white'}} /></Button>
      <Drawer
        anchor="left"
        open={state.left}
        onClose={closeDrawer}>
        {list()}
      </Drawer>
    </div>
  );
}
