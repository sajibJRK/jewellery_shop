import React, { use } from 'react'
import Hero from '../components/Hero'
import CategoryShowcase from '../components/CategoryShowcase'
import TrendingProduct from '../components/TrendingProduct'
import CategoryNav from '../components/CategoryNav'
import { ProductsContext } from '../contaxt/ProductsContext'
import ProductsCard from '../components/ProductsCard'

export default function Home() {
    const {products, SelectCategory,visibleProduct, filterdByCategory, filterdByMaterial, setSelectCategory, SelectMaterial, setSelectMaterial, showAll, setshowAll, searchTerm, setSearchTerm, searchResults, setSearchResults, category, material,} =use(ProductsContext)
  return (
    <>
    <Hero></Hero>
    <TrendingProduct products={products} />
      <CategoryNav
                         category={category}
                         SelectCategory={SelectCategory}
                         setSelectCategory={setSelectCategory}
                         material={material}
                         SelectMaterial={SelectMaterial}
                         setSelectMaterial={setSelectMaterial}
                      />
                     
        <ProductsCard visibleProduct={visibleProduct} />
    <CategoryShowcase/>
    </>
  )
}
