import React from 'react';
import { Menu } from 'antd';


function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="favorite">
        <a href="/favorite">Danh sách phim ưa thích</a>
      </Menu.Item>
    </Menu>
  )
}

export default LeftMenu