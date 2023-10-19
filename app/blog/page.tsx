import Link from "next/link";
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface Rating {
  rate: number;
  count: number;
}

//Можно таким образом прописывать в каждой странице мета и они автоматом будут считываться сервером
export const metadata = {
  title: "Blog | NextJS",
};
// По умолчанию данные кэшируются
// можно управлять кэширование в fetch используя  свойствво revialidate
async function getData() {
  const response = await fetch("https://fakestoreapi.com/products", {
    next: {
      revalidate: 3600, // говорим что данные будут сохраняться на 1 мин а дальше перезапрашиваться
    },
  });
  // Выведем на экран ошибку пользователю
  if (!response.ok) throw new Error("Unable to fetch products");

  return (await response.json()) as Product[];
}
//
export default async function Blog() {
  let products = await getData();

  return (
    <div>
      <Link href="/content/blog/1">Post 1</Link>
      <h3>Products</h3>
      <div>
        <ul>
          {products?.map((product) => (
            <li key={product.id}>
              <Link href={`/content/blog/${product.id}`}> {product.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
