import React from 'react';
import styles from './hello.css';

export default class Hello extends React.Component {
    render (){
        return (
            <p className={styles.hello}>Hello, world.</p>
        )
    }
}