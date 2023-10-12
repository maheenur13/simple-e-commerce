import { IProduct } from "@/interfaces/common";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const PRODUCT_URL = "/products";
type IProductArg = {
  query?: Record<string, any>;
  extraUrl?: string | null;
};

export const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllProducts: build.query({
      query: (arg?: IProductArg) => {
        const URL =
          arg?.extraUrl == null
            ? PRODUCT_URL
            : `${PRODUCT_URL}/category/${arg?.extraUrl}`;
        return {
          url: URL,
          method: "GET",
          params: arg?.query && arg.query,
        };
      },
      transformResponse: (response: IProduct[]) => {
        return {
          products: response,
        };
      },
    }),
    getSingleProducts: build.query({
      query: (id?: string) => {
        return {
          url: `${PRODUCT_URL}/${id}`,
          method: "GET",
        };
      },
      transformResponse: (response: IProduct) => {
        return {
          product: response,
        };
      },
    }),
    getAllCategory: build.query({
      query: () => {
        return {
          url: `${PRODUCT_URL}/categories`,
          method: "GET",
        };
      },
      transformResponse: (response: string[]) => {
        return {
          category: response,
        };
      },
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetSingleProductsQuery,
  useGetAllCategoryQuery,
} = productApi;
