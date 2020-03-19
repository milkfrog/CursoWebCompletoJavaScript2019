import React from 'react'

export default props =>
    <a href={props.href}>
        <i className={props.itemIcon}></i> {props.itemTitle}
    </a>