import NavOrNot from './NavOrNot'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import jsontext from '../jsons/TextApp.json'
import '../jsons/Design.css'
import { useNavigate } from 'react-router-dom';
const NotFound = () => {
 const navigate = useNavigate();
  return (<>
  <NavOrNot />
    <div id='rh00origin' style={{width: 'fit-content', margin: 'auto'
        ,marginTop:'5%', backgroundColor: 'black'}}>
        <Card sx={{ maxWidth: 345, borderRadius: 0 }}>
        <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={jsontext.Link.image2}
            />
        <CardContent>
            <Typography id='rh001' gutterBottom variant="h3" component="div">
             {jsontext.MainApp.noto_found}
            </Typography>
            <Typography id='rh002' variant="body2" color="text.secondary">
              {jsontext.MainApp.joebanezair}
            </Typography>
        </CardContent>
        <CardActions id='rh002'>
            <Button 
             size="small" onClick={()=>{navigate('/', { replace: true })}}>
                {jsontext.MainApp.back_home}</Button>
        </CardActions>
        </Card>
    </div>
  </>)
}

export default NotFound