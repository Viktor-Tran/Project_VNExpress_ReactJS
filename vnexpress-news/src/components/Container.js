import { Row, Col } from "antd";
import '../assets/css/ant.custom.row.css'

const Container = ({ children }) => {
  return (
    <Row>
      <Col xl={20} lg={24} md={24} sm={24} xs={24}>{children}</Col>
    </Row>
  );
};

export default Container;
