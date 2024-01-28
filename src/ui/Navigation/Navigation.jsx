import React from "react";
import "./Navigation.scss";
import { Avatar, ConfigProvider, Select, theme } from "antd";
import { UserOutlined } from "@ant-design/icons";
function Navigation() {
  return (
    <nav className="nav">
      <div className="logo">
        AiPro <img src="src/assets/logo-icon.svg" alt="" />
      </div>
      <div className="user">
      <ConfigProvider
    theme={{
      algorithm: theme.darkAlgorithm,
    }}
  >
    <Select
          defaultValue="Ua"
          className="change-lang"
          options={[
            {
              value: "Ua",
              label: "Ua",
            },
            {
              value: "En",
              label: "En",
            },
          ]}
        />
  </ConfigProvider>
        <Avatar
          size="large"
          src={"https://i.mydramalist.com/66L5p_5c.jpg" || <UserOutlined />}
        />
      </div>
    </nav>
  );
}

export default Navigation;