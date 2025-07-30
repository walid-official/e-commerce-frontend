import React from 'react';
import { Navbar } from './navbar';
import { Hero } from './hero';
import { Category } from './category';
import { HomeProducts } from './homeProducts';

export const HomeLayout = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            {/* <Category /> */}
            <HomeProducts />
        </div>
    );
};

