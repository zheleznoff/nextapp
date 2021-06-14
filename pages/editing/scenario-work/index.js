import React from 'react'
import { Navbar } from '../../../src/layout/Navbar';
import { ScenarioWork } from '../../../src/editing/scenario-work/ScenarioWork'

const Index = () => {
    return (
        <Navbar title="Работа со сценарием">
            <ScenarioWork/>
        </Navbar>
    )
}

export default Index