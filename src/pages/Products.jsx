import React, {useState} from 'react';
import AllProd from '../components/product/AllProd';
import Filter from '../components/product/Filter';
import carrot from '../img/home/carrots.jpg';
import corn from '../img/home/corn.jpg';
import melon from '../img/home/melon.jpg';
import plantain from '../img/home/plantain.jpg';
import tomato from '../img/home/tomato.jpg';

const data = [
  {
    id: 1,
    name: 'Carrots',
    img: carrot,
    category: "Vegetables"
  },
  {
    id: 2,
    name: 'Fresh corns',
    img: corn,
    category: "Grains",
  },
  {
    id: 3,
    name: 'Melon seeds',
    img: melon,
    category: "Grains"
  },
  {
    id: 4,
    name: 'Plantain',
    img: plantain,
    category: "Fruits"
  },
  {
    id: 5,
    name: 'Fresh tomatoes',
    img: tomato,
    category: "Vegetables"
  },
  {
    id: 6,
    name: 'Carrots',
    img: carrot,
    category: "Vegetables"
  },
  {
    id: 7,
    name: 'Fresh corns',
    img: corn,
    category: "Grains",
  },
  {
    id: 8,
    name: 'Melon seeds',
    img: melon,
    category: "Grains"
  },
  {
    id: 9,
    name: 'Plantain',
    img: plantain,
    category: "Fruits"
  },
  {
    id: 10,
    name: 'Fresh tomatoes',
    img: tomato,
    category: "Vegetables"
  },
]

const allCategories = ['All Categories', ...new Set(data.map((items) => items.category))];

const Products = () => {
  const [products, setProducts] = useState(data);

  const filterItems = (category) =>{
    if (category === 'All Categories'){
      setProducts(data)
      return;
    }
    const newItems = data.filter((item) => item.category === category)
    setProducts(newItems);
  }

  return (
    <main>
      <Filter categories={allCategories} filterItems={filterItems}/>
      <AllProd products={products}/>
    </main>
  )
}

export default Products