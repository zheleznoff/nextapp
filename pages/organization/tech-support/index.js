import React from 'react';
import { Navbar } from '../../../src/layout/Navbar';
import { TechSupportForm } from '../../../src/organizationSteps/techSupport/TechSupportForm'

const Index = () => {
    return (
        <Navbar title='Техническое обеспечение'>
            <TechSupportForm/>
        </Navbar>
    )
}

export default Index
