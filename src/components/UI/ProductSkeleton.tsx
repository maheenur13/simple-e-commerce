import { Skeleton } from "antd";

const ProductSkeleton: React.FC = () => {
  return (
    <div className="product-skeleton my-2 flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-600 dark:border-gray-700">
      <Skeleton.Button
        style={{
          height: "320px",
        }}
        block={true}
        active={true}
      />

      <Skeleton.Button className="mt-2" active={true} block={true} />

      <Skeleton.Input className="my-2" active={true} block={true} />
      <Skeleton.Input active={true} block={true} />
    </div>
  );
};

export default ProductSkeleton;
