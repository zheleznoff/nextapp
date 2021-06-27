import React from 'react';
import { Navbar } from '../../../src/layout/Navbar';
import { Workspace } from '../../../src/postInstallationSteps/workspace/Workspace'

const Index = () => {
    return (
        <Navbar title="Программное обеспечение">
            <Workspace/>
        </Navbar>
    )
}

export default Index
