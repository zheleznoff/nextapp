import React from 'react';
import {Navbar} from '../../src/layout/Navbar';
import { PostInstallationSteps } from '../../src/postInstallationSteps/PostInstallationSteps'

const Index = () => {
    return (
        <Navbar title="Пост-монтаж">
            <PostInstallationSteps/>
        </Navbar>
    )
}

export default Index
