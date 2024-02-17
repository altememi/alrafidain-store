export const revalidate = 0;

import Banner from "../com/ui/banners//banner";
import Container from "../com/shared/Container";
import ProductCard from "../com/ui/products/ProductCard";
import getProducts, { IProductParams } from "@/action/GetProducts";
import NullData from "../com/ui/NullSata";

interface ProductsProps {
  searchParams: IProductParams
}

export default async function Products({ searchParams }: ProductsProps) {

  const products = await getProducts(searchParams);

  if (products.toString().length === 0)
    return <NullData text={"Products are not found :("}/>;
  

  function Arria(arr: any) {
    for (let index = arr.length - 1; index > 0; index--) {
      const element = Math.floor(Math.random() * (index + 1));
      [arr[index], arr[element]] = [arr[element], arr[index]]
    }
    return arr;
  }

  const productsArria = Arria(products)

  return (
    <section className="p-5">
      <Container>
        <div>
          <Banner />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:sm:grid-cols-5 2xl:grid-cols-6 gap-8">
          {
            productsArria.map((product: any) => {
              return <ProductCard key={product.id} data={product} />
            })
          }
        </div>
      </Container>
    </section>
  )
}
