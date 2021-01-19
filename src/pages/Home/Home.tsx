import React, { useState, useEffect } from 'react';
import InfiniteScroll from '../../components/InfiniteScroll/InfiniteScroll';
import SideBar from '../../components/SideBar/SideBar';

const HomePage: React.FC = () => {

    const [ categories, setCategories ] = useState([])

    const fetchCategories = async () => {}

    const fetchPopularVideosByCategory = async (category: string) => {}

    return (
        <>
            <SideBar />
            <InfiniteScroll>

            </InfiniteScroll>
        </>
    )
}

export default HomePage;