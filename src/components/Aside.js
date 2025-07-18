import React, { useEffect, useState } from 'react'
import Client from "../components/Client"
import toast from 'react-hot-toast';
import Badge from '@mui/material/Badge';

const Aside = ({clients,leaveRoom,copyRoomId}) => {
  return (
    <div className="aside">
        <div className='asideInner'>
          <div className='connected'>
            <h4>Connected&nbsp;&nbsp;&nbsp;</h4>
            <Badge color="primary" badgeContent={clients.length} showZero/>
          </div>
          <div className='clientsList'>
            {
              clients.map((client)=>(
                <Client
                  key={client.socketId} 
                  username={client.username}
                />
              ))
            }
          </div>
        </div>
        <button className='btn copyBtn' onClick={copyRoomId}>Copy Room ID</button>
        <button className='btn leaveBtn' onClick={leaveRoom}>Leave</button>
    </div>
  )
}

export default Aside