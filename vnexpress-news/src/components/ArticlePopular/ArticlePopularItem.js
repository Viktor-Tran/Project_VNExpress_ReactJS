import { Menu } from "antd";
import ArticleItem from "../ArticleItem";

const ArticlePopularItem = ({ menu }) => {
  return (
    <>
      <Menu mode="horizontal" className="menu">
        {menu.map((menuItem) => {
          return (
            <Menu.Item key={menuItem.id}>
              <a target="_blank" rel="noopener noreferrer" href="/">
                {menuItem.title}
              </a>
            </Menu.Item>
          );
        })}
      </Menu>
      <div className="area-post-menu">
        <ArticleItem title="Lorem Ipsum is simply" isHorizontal size="small" />
        <ArticleItem title="Lorem Ipsum is simply" isHorizontal size="small" />
      </div>
    </>
  );
};

export default ArticlePopularItem;
