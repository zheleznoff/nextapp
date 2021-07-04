import React from 'react'
import { Navbar } from '../../../src/layout/Navbar';
import { ScenarioWork } from '../../../src/editing/scenario-work/ScenarioWork'

const Index = () => {
    return (
        <Navbar title="Working with a script">
            <ScenarioWork/>
        </Navbar>
    )
}

export default Index