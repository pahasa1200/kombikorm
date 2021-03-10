import React from 'react'
import {Button, Container, Grid} from "@material-ui/core";
import {Dashboard, Image} from "@material-ui/icons";
import photoPig from "./../../asserts/img/pig.jpg"
import classes from "./Home.module.css"
import {Link} from 'react-router-dom'
import bread from "./../../asserts/img/40-4.jpg"

type PropsType = {}

const Home: React.FC<PropsType> = (props) => {
    return (
        <>
            <Container maxWidth="xl">
                <Grid container className={classes.startPageContainer}>
                    <Grid item md={12} sm={12}>
                        <div>
                            <div className={classes.overflow_black}></div>
                            <h1 className={classes.home_h1_1}>Комбикорма</h1>
                            <h1 className={classes.home_h1_2}>Остров-Торг</h1>
                        </div>
                    </Grid>
                </Grid>
                <Grid container className={classes.kombikormInfoContainer}>
                    <Grid item className={classes.kombikormInfo} alignItems="center" justify="center" md={6} xs={12}
                          direction="column">
                        <h4>На нашем сайте вы можете найти большой ассортимент комбикормов по небольшой цене,
                            ознакомится можете в нашем каталоге</h4>
                        <Link to='/catalog' className={classes.catalogLink}><Button className={classes.catalogButton}
                                                                                    variant="contained"
                                                                                    color='primary'>Каталог</Button></Link>
                    </Grid>
                    <Grid item alignItems="center" justify='center' md={6} xs={12}>
                        <img className={classes.photoPig} src={photoPig} alt='Pig'/>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item md={12} alignItems='center' justify='center'>
                        <h3>Популярный товар</h3>
                    </Grid>
                </Grid>
                <Grid container className={classes.caterers_container}>
                    <Grid item md={6} xs={12} alignItems='center' justify='center'>
                        {/*<h1 className={classes.caterers_h1}>Поставщики</h1>*/}
                        <img className={classes.caterers_image} src={bread} alt='Завод'/>
                    </Grid>
                    <Grid item md={6} xs={12} alignItems='center' justify='center'
                          className={classes.caterers_aboutBlock}>
                        <h4 className={classes.caterers_h3}>Комбикорм производится на "барановичхлебопродукт".</h4>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Home