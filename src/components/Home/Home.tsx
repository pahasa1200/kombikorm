import React from 'react'
import {Button, Grid} from "@material-ui/core";
import {Dashboard, Image} from "@material-ui/icons";
import photoPig from "./../../asserts/img/pig.jpg"
import classes from "./Home.module.css"
import {Link} from 'react-router-dom'

type PropsType = {

}

const Home: React.FC<PropsType> = (props) => {
    return(
        <>
            <Grid container className={classes.startPageContainer}>
                <Grid item md={12} sm={12}>
                    <h1>Комбикорма</h1>
                </Grid>
            </Grid>
            <Grid container className={classes.kombikormInfoContainer}>
                <Grid className={classes.kombikormInfo} alignItems="center" justify="center" md={6}  direction="column">
                        <h4>На нашем сайте вы можете найти большой ассортимент комбикормов по небольшой цене,
                        ознакомится можете в нашем каталоге</h4>
                    <Link to='/catalog' className={classes.catalogLink}><Button className={classes.catalogButton} variant="contained" color="primary">Каталог</Button></Link>
                </Grid>
                <Grid alignItems="center" md={6}>
                    <img className={classes.photoPig} src={photoPig} alt='Pig'/>
                </Grid>
            </Grid>
        </>
    )
}

export default Home