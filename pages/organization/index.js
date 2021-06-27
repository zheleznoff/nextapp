import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Navbar} from '../../src/layout/Navbar';
import { OrganizationSteps } from '../../src/organizationSteps/organizationSteps'

const Organization = () => {
    return (
        <Navbar
            title='Обеспечение проекта'
            hint={['Данные шаги являются основными этапами организационного процесса съемки.']}
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


