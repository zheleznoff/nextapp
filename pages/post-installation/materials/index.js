import React from 'react';
import { Navbar } from '../../../src/layout/Navbar';
import { Materials } from '../../../src/postInstallationSteps/materials/Materials';

const Index = () => {
    return (
        <Navbar title="Сбор материалов">
            <Materials/>
        </Navbar>
    )
}

export default Index
