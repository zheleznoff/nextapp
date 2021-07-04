import React from 'react'
import { Navbar } from '../../../src/layout/Navbar';
import { ThreeDWork } from '../../../src/editing/3d-work/ThreeDWork'

const Index = () => {
    return (
        <Navbar title="Working with 3D visualization">
            <ThreeDWork/>
        </Navbar>
    )
}

export default Index