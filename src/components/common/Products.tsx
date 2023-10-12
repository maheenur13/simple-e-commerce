"use client";

import {
  useGetAllCategoryQuery,
  useGetAllProductsQuery,
} from "@/redux/api/productApi";
import { Col, Row, Select } from "antd";
import { FC, useState } from "react";
import ProductCard from "./ProductCard";
import ProductSkeleton from "../UI/ProductSkeleton";

const Products: FC = () => {
  const query: Record<string, any> = {};
  const [sortBy, setSortBy] = useState<"asc" | "desc">("desc");
  const [category, setCategory] = useState<string | null>(null);
  query["sort"] = sortBy;

  const { data, isLoading } = useGetAllProductsQuery({
    query: query,
    extraUrl: category,
  });
  const { data: categoryData, isLoading: isCategoryLoading } =
    useGetAllCategoryQuery(undefined);

  const handleChange = (value: "asc" | "desc") => {
    setSortBy(value);
  };
  const handleCategoryChange = (value: string) => {
    setCategory(value || null);
  };

  return (
    <div>
      <Row gutter={18}>
        {isLoading && !data && (
          <>
            <Col span={6}>
              <ProductSkeleton />
            </Col>
            <Col span={6}>
              <ProductSkeleton />
            </Col>
            <Col span={6}>
              <ProductSkeleton />
            </Col>
            <Col span={6}>
              <ProductSkeleton />
            </Col>
            <Col span={6}>
              <ProductSkeleton />
            </Col>
            <Col span={6}>
              <ProductSkeleton />
            </Col>
            <Col span={6}>
              <ProductSkeleton />
            </Col>
            <Col span={6}>
              <ProductSkeleton />
            </Col>
          </>
        )}
        <Col span={24} className="my-2">
          <div className="flex">
            <div>
              <h3 className="text-white mb-1">Sort By</h3>
              <Select
                defaultValue="desc"
                style={{ width: 140 }}
                onChange={handleChange}
                options={[
                  { value: "asc", label: "Ascending" },
                  { value: "desc", label: "Descending" },
                ]}
              />
            </div>
            <div className="mx-3">
              <h3 className="text-white mb-1">Category</h3>
              <Select
                allowClear
                loading={isCategoryLoading}
                placeholder="Select a category"
                style={{ width: 140 }}
                onChange={handleCategoryChange}
                options={categoryData?.category?.map((item) => {
                  return {
                    value: item,
                    label: item,
                  };
                })}
              />
            </div>
          </div>
        </Col>
        {data &&
          !isLoading &&
          data.products.map((product, idx) => (
            <ProductCard key={idx} product={product} />
          ))}
      </Row>
    </div>
  );
};

export default Products;
