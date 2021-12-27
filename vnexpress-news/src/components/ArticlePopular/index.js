import React from "react";
import Container from "../../components/Container";
import ArticleItem from "../ArticleItem";
import "../../assets/css/article-popular.css";
import {  Divider } from "antd";
import { NAV_MENU } from "../../constants";
import ArticlePopularItem from "./ArticlePopularItem";

const ArticlePopular = () => {
  const start = 0;
  const end = 8;

  const sliceMenu1 = NAV_MENU.slice(start, end);
  const sliceMenu2 = NAV_MENU.slice(start + 8, end + 8);

  return (
    <Container lg={24}>
      <article className="article">
        <div className="article-left">
          <ArticleItem
            title="Lorem Ipsum is simply"
            isHorizontal
            size="medium"
          />
          <ArticleItem
            title="Lorem Ipsum is simply"
            isHorizontal
            size="medium"
          />
          <ArticleItem
            title="Lorem Ipsum is simply"
            isHorizontal
            size="medium"
          />
        </div>
        <div className="article-right">
          <ArticlePopularItem menu={sliceMenu1} />

          <Divider className="divider-custom" />

          <ArticlePopularItem menu={sliceMenu2} />
        </div>
      </article>
    </Container>
  );
};

export default ArticlePopular;
