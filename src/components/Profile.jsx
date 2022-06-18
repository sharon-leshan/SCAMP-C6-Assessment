import React from 'react'
import {Avatar, IconButton} from '@material-ui/core'
import {ShoppingCartOutlined} from '@material-ui/icons'
import './profile.css'

const Profile = () => {
  return (
    <div>
        <IconButton>
            <ShoppingCartOutlined/>
        </IconButton>
        <Avatar src="" alt="profile avatar" id="avatar" />
    </div>
  )
}

export default Profile