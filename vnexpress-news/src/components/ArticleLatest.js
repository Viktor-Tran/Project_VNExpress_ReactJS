import Container from "./Container";
import ArticleItem from "./ArticleItem";
import { Row, Col } from "antd";

const ArticleLatest = () => {
  return (
    <Container>
      <Row>
        <Col xl={24} lg={24} sm={24}>
          <ArticleItem
            title="Lorem Ipsum is simply"
            isHorizontal
            isCardBody
            size="large"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ArticleLatest;
