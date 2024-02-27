import * as React from 'react';
import Button from '@mui/joy/Button';
import jsontext from '../jsons/TextApp.json'
import animationData from '../jsons/jsonanimate.json';
import Lottie, { LottiePlayer } from 'lottie-react';
import '../jsons/Design.css'


const AppHandler = () => {
  const dateTime = new Date();
  const dayOfWeek = dateTime.toLocaleDateString('en-US', { weekday: 'long' });
  const time = dateTime.toLocaleTimeString('en-US');

  return (
    <>
      <div style={{ display: 'flex', paddingLeft: 20, paddingRight: 20, flexDirection: 'column', alignItems: 'center', marginTop: '2%' }}>
        <div>
          <Lottie style={{
            width: 300,
            height: 300,
          }} animationData={animationData} />
        </div>
        <div style={{ textAlign: 'center', marginTop: -30, }}>
          <h1>{jsontext.MainApp.success}!!🎊</h1>
        </div>
        <div style={{ textAlign: 'center' }}>{jsontext.MainApp.congrats} <br/> {dayOfWeek}, {time}</div>
        <div>
          <Button style={{
            marginTop: 20,
            borderRadius: 50,
            backgroundColor: 'black'
          }}>{jsontext.MainApp.login}</Button>

        </div>
      </div>

      {/* removable */}
      <div id='joebottom'>
       {jsontext.MainApp.joebanezair} <br/>
       <a style={{color: 'gold'}} href={jsontext.Link.githublink}>{jsontext.MainApp.clickthelink}</a>
     </div>
    </>
  );
}

export default AppHandler;
