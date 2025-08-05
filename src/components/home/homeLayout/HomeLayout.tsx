import React from 'react';
// import { Navbar } from './navbar';
import { Hero } from './hero';
// import { Category } from './category';
import { HomeProducts } from './homeProducts';
import { Services } from './services';

export const HomeLayout = () => {
    return (
        <div>
            <Hero />
            {/* <Category /> */}
            <HomeProducts />
            <Services />
        </div>
    );
};

