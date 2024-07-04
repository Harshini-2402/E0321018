
import React from 'react';
import ProductList from '../components/ProductList';

const AllProducts = () => {
    const companies = ['AWS', 'FLP', 'SNP', 'MYN', 'AZO'];
    const category = 'Computer';
    const topN = 50;

    return (
        <div>
            {companies.map(company => (
                <ProductList key={company} company={company} category={category} topN={topN} />
            ))}
        </div>
    );
};

export default AllProducts;
