"use client";

import { ReactNode } from "react";
import { Badge, Layout } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { cartOpenHandler } from "@/redux/cart/cart.action";
import { getCartState } from "@/redux/cart/cart.slice";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const { Header, Content, Footer } = Layout;

type PropsType = {
  children: ReactNode | JSX.Element;
};

export const AppLayout: React.FC<PropsType> = ({ children }) => {
  const router = useRouter();
  const { cartItems } = useSelector(getCartState);
  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          zIndex: 999,
          top: "0",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#374151",
        }}
      >
        {/* <div className="demo-logo" /> */}
        <div className="w-full flex  justify-end ">
          {/* <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["shop"]}
            items={navItems}
          /> */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              router.push("/");
            }}
            className="text-white mx-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Shopping Page
          </button>
          <Badge count={cartItems.length} showZero>
            <button
              onClick={(e) => {
                cartOpenHandler(true);
              }}
              className="text-white mx-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <ShoppingCartOutlined style={{ fontSize: "16px" }} /> Cart
            </button>
          </Badge>
        </div>
      </Header>
      <div style={{ background: "#111827" }}>
        <Content>
          <div className=" py-2 px-16  site-layout-content ">{children}</div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
            backgroundColor: "#374151",
            color: "#ffffff",
          }}
        >
          Simple E-commerce
        </Footer>
      </div>
    </Layout>
  );
};
