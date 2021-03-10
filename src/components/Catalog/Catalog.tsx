import React from 'react'
import classes from './CatalogModul.module.css'
import pig from './../../asserts/img/BigPig.jpg'
import cow from './../../asserts/img/Cow.jpg'
import chicken from './../../asserts/img/Chiken.jpg'

import withHocs from './CatalogHoc'
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Container, Grid,
    Typography
} from "@material-ui/core";

const Catalog = (props: any) => {
    const products = props.data.products
    const imagePeaker = (imageName: string) => {
        switch (imageName){
            case 'ЭКС':
                return pig;
                break;
            case 'ЭКП':
                return chicken;
                break;
            case 'ЭКК':
                return cow;
                break;
            default:
                return 'none'
        }
    }
    return (
        <>
            <h1 className={classes.catalog_h1}>Каталог</h1>
            <Container>
                <Grid container spacing={4}>
                    {products && products.map((n: any) => {
                            return (
                                <>
                                    <Grid item md={4}>
                                        <Card className={classes.root}>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    alt="Животное"
                                                    height="300"
                                                    image={imagePeaker(n.name)}
                                                    title="Животное"
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h4" component="h2">
                                                        {n.name}
                                                    </Typography>
                                                    <Typography gutterBottom variant="h6" component="h2">
                                                        {n.cost} p
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                        {n.description}
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                            <CardActions>
                                                <Button size="small" color="primary">
                                                    Купить
                                                </Button>
                                                <Button size="small" color="primary">
                                                    Состав
                                                </Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                </>
                            )
                        }
                    )}

                </Grid>
            </Container>
        </>
    )
}

export default withHocs(Catalog)