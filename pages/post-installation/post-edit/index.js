import React from 'react';
import { Navbar } from '../../../src/layout/Navbar';
import { PostEdit } from '../../../src/postInstallationSteps/post-edit/PostEdit'


const Index = () => {
    return (
        <Navbar title="Пост-монтаж">
            <PostEdit/>
        </Navbar>
    )
}


export default Index