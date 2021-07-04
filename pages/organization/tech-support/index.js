import React from 'react';
import { Navbar } from '../../../src/layout/Navbar';
import { TechSupportForm } from '../../../src/organizationSteps/techSupport/TechSupportForm'

const Index = () => {
    return (
        <Navbar title='Technical support'>
            <TechSupportForm/>
        </Navbar>
    )
}

export default Index
