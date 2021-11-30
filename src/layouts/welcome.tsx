import React from "react"
import styles from './welcome.less'

const Welcome :React.FC=(props:any)=>{   
return(
    <div className={styles.welcome}>
        {props.children}
    </div>
)
}

export default Welcome