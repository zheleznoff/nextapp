import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Navbar} from '../../src/layout/Navbar';
import { OrganizationSteps } from '../../src/organizationSteps/organizationSteps'

const Organization = () => {
    return (
        <Navbar
            title='Project support'
            hint={['These steps are the main steps in the organizational survey process.']}
        >
            <Grid
                item
            >
                <OrganizationSteps/>
            </Grid>
        </Navbar>
    )
}

export default Organization


