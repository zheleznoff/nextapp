import React from 'react';
import { Navbar } from '../../../src/layout/Navbar';
import { Workspace } from '../../../src/postInstallationSteps/workspace/Workspace'

const Index = () => {
    return (
        <Navbar title="Рабочая среда">
            <Workspace/>
        </Navbar>
    )
}

export default Index
