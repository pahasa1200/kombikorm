import React from 'react'
import {graphql} from "react-apollo";

import {productsQuery} from "./queries";
import {compose} from "recompose";

const CatalogHoc = () => {
    return (
        <>
        </>
    )
}

export default compose(graphql(productsQuery))