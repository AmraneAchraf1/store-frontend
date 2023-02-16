import React, { forwardRef } from 'react'
import { Container } from 'react-bootstrap'
import styles from "./headline.module.css"
import Logo from './Logo'

const HeadLine = ({children}, ref) => {
  return (
    <Container>
        <div className={styles.parent} ref={ref}>

            <div className={styles.logo}>
                <Logo />
            </div>

            <div className={styles.line}></div>

            <h1 className={styles.text}>
                {children}
            </h1>
        </div>
    </Container>
  )
}

export default forwardRef(HeadLine)