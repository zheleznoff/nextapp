import React from 'react'
import { Navbar } from '../../../src/layout/Navbar';
import { TotalWork } from '../../../src/editing/total-work/TotalWork'

const Index = () => {
    return (
        <Navbar title="Итоговый монтаж">
            <TotalWork/>
        </Navbar>
    )
}

export default Index
