import React from 'react';
import { Navbar } from '../../src/layout/Navbar'
import { Result } from '../../src/product/Result'

const Index = () => {
    return (
        <Navbar title={'Продукт'}>
            <Result/>
        </Navbar>
    )
}

export default Index
