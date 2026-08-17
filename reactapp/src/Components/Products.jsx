import React, { useEffect, useState } from "react";
import ProductCard from "./Productcard";

function Products(){

    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => {
            setData(data);
            setLoading(false);
        }).catch((error) => {
            setError(error.message);
        });
    },[]);


    if (loading) return <p> Loading data...</p>;
    if(error) return <p> {error}</p>;

    return (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
            {data.products.map((prd) => (
                <ProductCard key={prd.id} thumbnail={prd.thumbnail} title={prd.title} price={prd.price}/>
            ))};
        </div>);
    
}

export default Products;