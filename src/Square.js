import React from 'react' 
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const styles = makeStyles(theme => ({
    btn: {
        background: "#fff",
        border: "1px solid #999",
        cssFloat: "left",
        fontSize: "24px",
        fontWeight: "bold",
        lineHeight: "34px",
        height: "34px",
        marginRight: "-1px",
        marginTop: "-1px",
        padding: "0",
        textAlign: "center",
        width: "34px"
    }
}))

export function Square(props) {
    let classes = styles() 
    return <Button className={classes.btn} onClick={props.onClick}>{props.value}</Button>
}