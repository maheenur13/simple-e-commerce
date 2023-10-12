import { CartItemType, IProduct } from "@/interfaces/common";
import { getCartState } from "@/redux/cart/cart.slice";
import { Col, Rate } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC, memo } from "react";
import { useSelector } from "react-redux";
import IncrementDecrement from "../Cart/IncrementDecrement";
import { handleAddToCart } from "@/redux/cart/cart.action";

type PropsType = {
  product: IProduct;
};

const ProductCard: FC<PropsType> = ({ product }) => {
  const router = useRouter();
  const { cartItems } = useSelector(getCartState);
  const currentItem = [...cartItems].find((item) => item.id === product.id);

  return (
    <Col xl={6} lg={8} sm={12} xs={24} className="my-2 cursor-pointer">
      <div
        onClick={() => router.push(`/product/${product.id}`)}
        className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-600"
      >
        <div style={{ height: "280px", position: "relative" }}>
          <Image
            style={{
              objectFit: "cover",
            }}
            className=" rounded-t-lg"
            src={product.image}
            fill
            // layout="responsive"
            alt="product image"
          />
        </div>

        <div
          style={{
            minHeight: "270px",
            maxHeight: "270px",
          }}
          className="p-4 flex flex-col justify-between align-top overflow-hidden"
        >
          <h5 className=" w-full  text-lg font-semibold tracking-tight text-gray-900 dark:text-white product-title ">
            {product.title}
          </h5>
          <p className="product-description text-xs font-thin tracking-tight text-gray-900 dark:text-white">
            {product.description}
          </p>

          <div className="flex items-center mt-2.5 mb-5">
            <Rate disabled defaultValue={product.rating.rate} />
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              {product.rating.count}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              {product.price} <small>USD</small>
            </span>
            {currentItem ? (
              <IncrementDecrement product={product} />
            ) : (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToCart(product as CartItemType);
                }}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </button>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
};

export default memo(ProductCard);
