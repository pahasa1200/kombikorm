import React, {ReactElement} from 'react'
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";
import classes from './Contacts.module.css'
import {Container, Grid} from "@material-ui/core";

class Contacts extends React.Component {
    render() {
        const MapWithAMarker = withScriptjs(withGoogleMap((props: PropsType) =>
            <GoogleMap
                defaultZoom={17}
                defaultCenter={{lat: 53.130070, lng: 26.075281}}
            >
                <Marker
                    position={{lat: 53.130070, lng: 26.075281}}
                />
            </GoogleMap>
        ));

        return (
            <>
                <Container>
                    <Grid container>
                        <Grid item xs={12} justify='center' alignItems="center">
                            <h1 className={classes.contacts_h1}>Контакты</h1>
                            <Grid container className={classes.informationContainer}>
                                <Grid item md={3} xs={6} justify='flex-start' alignItems="center" spacing={0}>
                                    <h4 className={classes.contacts_h4}>Мы работаем:</h4>
                                    <h4 className={classes.contacts_h4}>Адрес:</h4>
                                    <h4 className={classes.contacts_h4}>Электронная почта:</h4>
                                    <h4 className={classes.contacts_h4}>Контактный телефон:</h4>
                                </Grid>
                                <Grid item md={3} xs={6} justify='center' alignItems="center" spacing={0}>
                                    <h4 className={classes.contacts_h4}>ПН-ВС: 9:00-15:00 </h4>
                                    <h4 className={classes.contacts_h4}>Рынок </h4>
                                    <h4 className={classes.contacts_h4}>mail@mail.ru </h4>
                                    <h4 className={classes.contacts_h4}>+375(29)XXX-XX-XX</h4>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
                <MapWithAMarker
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAbQpDIP__dOesXs92xTTLulDTUxhPQcno&v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{height: `100%`}}/>}
                    containerElement={<div style={{height: `400px`}}/>}
                    mapElement={<div style={{height: `100%`}}/>}
                />
            </>
        )
    }
}

type PropsType = {
    googleMapURL: String
    loadingElement: ReactElement
}
export default Contacts