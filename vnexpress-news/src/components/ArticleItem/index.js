import { Card, Typography } from "antd";
import PostImage from "../../assets/images/post-01.jfif";
import "../../assets/css/article-latest.css";
import ArticleContent from "./ArticleContent";
import cls from 'classnames'

const ArticleItem = ({
  isAvatar = false,
  isHorizontal = false,
  isCardBody = false,
  isHover = false,
  isVertical = false,
  size,
  title,
  ...restProp
}) => {
  const { Link } = Typography;

  let localSize = 0;

  if (size === "large") {
    localSize = 750;
  } else if (size === "medium") {
    localSize = 500;
  }
  else {
    localSize = 300
  }

  return (
    <Card
      {...restProp}
      hoverable={isHover}
      style={{ maxWidth: localSize }}
      cover={
        isHorizontal ? (
          <>
            {isAvatar && <img alt="" src={PostImage} />}
            {isHorizontal && (
              <Link href="https://vnexpress.net">
                <div className={cls("card-horizontal", {
                  "card-horizontal--medium": size === "medium",
                  "card-horizontal--small" : size === "small"
                })}>
                  <div className="wrapper-image">
                    <img alt="" src={PostImage} />
                  </div>
                  <ArticleContent
                    isHover={isHover}
                    title={title}
                    description="Lorem simply dummy text of the printing and typesetting
              industry. It was popularised in the 1960s with the release"
                  />
                </div>
              </Link>
            )}
          </>
        ) : null
      }
      
    >
      {isCardBody ? (
        <div className="card-body">
          <div className="card-body--left">
            <ArticleContent
              isHover
              title={title}
              description="Lorem simply dummy text of the printing and typesetting
                industry. It was popularised in the 1960s with the release"
            />
          </div>
          <div className="card-body--center">
            <ArticleContent
              isHover
              title={title}
              description="Lorem simply dummy text of the printing and typesetting
                industry. It was popularised in the 1960s with the release"
            />
          </div>
          <div className="card-body--right">
            <ArticleContent
              isHover
              isFooter
              title={title}
              description="Lorem simply dummy text of the printing and "
            />
          </div>
        </div>
      ) : null}
    </Card>
  );
};

export default ArticleItem;
