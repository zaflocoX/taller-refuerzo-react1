import React, { useState, useEffect } from 'react'
import { getProducts } from '../../services/productServices';
import './styles.scss'
import { useNavigate } from 'react-router-dom';
import { replaceSpacesWithHypen } from '../utils/stringsUtils';

const MyProducts = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getProducts().then((response) => {
            setProducts(response);
            //console.log(response);
            const categoriesLis = getCategories(response);
            setCategories(categoriesLis);


        })
    }, []);

    const getCategories = (productList) => {
        const categoryList = productList.map((item) => item.category)
        const categoryItems = new Set(categoryList);
        return [...categoryItems];
    }

    const goToProductsDetails = (productsTitle) => {
        const dinamicParam = replaceSpacesWithHypen(productsTitle)
        navigate(`details/:${productsTitle}`)
    }
    return (
        <main className='main-container'>

            <div className='main-title'>
                <h1>Lista de productos</h1>
            </div>
            <section className='section-filters'>
                <div className='filter-container'>
                    <div className="filter-container-brand">
                        <label>Filtrar por rating </label>
                        <input type="range" min={0} max={5} step={1} />
                    </div>
                    <div className="filter-container-categories">
                        <label>Filtrar por catergories</label>
                        <select name="">
                            <option value={''}>Todas</option>
                            {
                                categories.length ? categories.map((item, index) => <option key={index} value={item}>{item}</option>) : <></>
                            }
                        </select>
                    </div>
                </div>
            </section>

            <div className="container-products" >
                {products?.map((products) => (
                    <div className="container-products-card" key={products.id}>
                        <figure onClick={() => navigate(products.title)} className="products-card-img">
                            <img src={products.thumbnail} alt={products.title} />
                        </figure>
                        <div className="products-info">
                            <h3>{products.title}</h3>
                        </div>

                    </div>
                ))}
            </div>

        </main>

    )
}

export default MyProducts