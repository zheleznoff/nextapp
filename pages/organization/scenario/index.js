import React from 'react';
import { Navbar } from '../../../src/layout/Navbar';
import { ScenarioForm } from '../../../src/organizationSteps/scenario/ScenarioForm'

const Index = () => {
    return (
        <Navbar title='Организация сценария'>
            <ScenarioForm/>
        </Navbar>
    )
}

export default Index
