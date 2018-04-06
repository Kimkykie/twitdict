import React, { Component } from 'react'
import './Navbar.css'
import { Menu, Icon } from 'antd'

const MenuItem = Menu.Item

class Navbar extends Component {
  render () {
    return (
      <header>
        <div className='header-row'>
          <div className='header-row-logo'>
            <a className='logo'>
              <span>Twit</span>
              <span className='logo-part'>Dict</span>
            </a>
          </div>
          <div className='header-row-components'>
            <Menu mode='horizontal'>
              <MenuItem key='user'>
                <Icon type='user' />Profile
              </MenuItem>
              <MenuItem key='star-o'>
                <Icon type='star-o' />Stars
              </MenuItem>
              <MenuItem key='logout'>
                <Icon type='logout' />Logout
              </MenuItem>
            </Menu>
          </div>
        </div>
      </header>
    )
  }
}

export default Navbar
