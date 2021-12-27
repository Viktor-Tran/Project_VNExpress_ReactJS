import { Divider, Avatar } from "antd";
import { MessageOutlined } from "@ant-design/icons";
import "../../assets/css/ant.custom.divider.css";
import "../../assets/css/article-content.css";
import cls from "classnames";
import AvatarImage from "../../assets/images/latest-post.jfif";

const ArticleContent = ({
  title = "",
  description = "",
  isHover,
  isFooter = false,
}) => {
  return (
    <div
      className={cls("wrapper-content", {
        "ant-card ant-card-bordered ant-card-hoverable": isHover,
      })}
    >
      <h3 className="content-title">{title}</h3>
      <Divider className="divider-custom" />
      <p className="content">{description}</p>
      {isFooter && (
        <>
          <Divider className="divider-custom" />
          <div className="content-footer">
            <div className="content-footer--left">
              <i>Author</i>
              <span>
                <MessageOutlined /> 31
              </span>
            </div>
            <div className="content-footer--right">
              <Avatar src={AvatarImage} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ArticleContent;
