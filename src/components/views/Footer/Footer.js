import React from 'react'
import { Icon } from 'antd';

function Footer() {
    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize: '1rem'
        }}>
            <p><Icon type="heart" /> <Icon type="smile" /> Movie App <Icon type="smile" /> <Icon type="heart" /></p>
        </div>
    )
}

export default Footer
