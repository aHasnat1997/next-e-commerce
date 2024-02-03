import ProductCard from "../ProductCard/ProductCard"

export default function TopProducts() {
  const productData = [
    {
      id: '01',
      title: 'White Eggplant',
      price: 6.99,
      productImg: 'https://quomodosoft.com/html/ecoshop/assets/images/homepage-one/product-img/p-img-5.webp'
    },
    {
      id: '02',
      title: 'Fresh Mushroom',
      price: 5.99,
      productImg: 'https://quomodosoft.com/html/ecoshop/assets/images/homepage-one/product-img/p-img-6.webp'
    },
    {
      id: '03',
      title: 'Hot Patties',
      price: 3.99,
      productImg: 'https://quomodosoft.com/html/ecoshop/assets/images/homepage-one/product-img/p-img-7.webp'
    },
    {
      id: '04',
      title: 'Fresh Bananas',
      price: 4.99,
      productImg: 'https://quomodosoft.com/html/ecoshop/assets/images/homepage-one/product-img/p-img-8.webp'
    },
    {
      id: '05',
      title: 'Terra organics',
      price: 6.99,
      productImg: 'https://quomodosoft.com/html/ecoshop/assets/images/homepage-one/product-img/p-img-9.webp'
    },
    {
      id: '06',
      title: 'Orange Fruit',
      price: 8.99,
      productImg: 'https://quomodosoft.com/html/ecoshop/assets/images/homepage-one/product-img/p-img-10.webp'
    },
    {
      id: '07',
      title: 'Terra organics',
      price: 6.99,
      productImg: 'https://quomodosoft.com/html/ecoshop/assets/images/homepage-one/product-img/p-img-9.webp'
    },
    {
      id: '08',
      title: 'Orange Fruit',
      price: 8.99,
      productImg: 'https://quomodosoft.com/html/ecoshop/assets/images/homepage-one/product-img/p-img-10.webp'
    },
  ]


  return (
    <section className="section-div">
      <h3 className="text-4xl font-semibold">Top Selling Products</h3>
      <div className="grid grid-cols-4 gap-8">
        {
          productData.map(item => <ProductCard
            key={item.id}
            imgSrc={item.productImg}
            title={item.title}
            currentPrice={item.price}
          />)
        }
      </div>
    </section>
  )
}
