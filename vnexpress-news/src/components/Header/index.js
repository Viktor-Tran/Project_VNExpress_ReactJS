import "../../assets/css/page-header.css";

import Container from "../Container";
import Logo from "../../assets/images/logo.svg";
import { DATE_TEMPLATE, TOOLTIP_HEADER } from "../../constants";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import localeVi from "dayjs/locale/vi";

import { Row, Col, Tooltip, Button, Space, Input, Divider } from "antd";
import {
  ClockCircleOutlined,
  GithubOutlined,
  SearchOutlined,
  UserOutlined,
  MenuOutlined,
} from "@ant-design/icons";

const Header = () => {
  dayjs.extend(utc, localeVi);

  const dateFormatted = dayjs.utc().locale("vi").format(DATE_TEMPLATE);

  const { Search } = Input;

  return (
    <Container>
      <Row>
        <Tooltip title={TOOLTIP_HEADER.LOGO}>
          <Col xl={3} lg={2} md={2} sm={2} xs={24}>
            <div className="wrapper-logo">
              <button className="toggle-menu">
                <MenuOutlined />
              </button>
              <a className="logo" href="https://vnexpress.net">
                <img src={Logo} className="p-14" alt="" />
              </a>
            </div>
          </Col>
        </Tooltip>

        <Col>
          <Divider type="vertical" orientation="right"/>
        </Col>

        <Col xl={12} lg={13} md={17} sm={17}>
          <div className="header-middle">
            <h3 className="header-middle--date text-gray">{dateFormatted}</h3>
            <div className="header-middle--action">
              <Space size={8}>
                <Tooltip title={TOOLTIP_HEADER.RELATIVE_BUTTON}>
                  <Button
                    size="small"
                    href="https://vnexpress.net/tin-tuc-24h"
                    icon={<ClockCircleOutlined />}
                  >
                    <span className="text-gray">
                      {TOOLTIP_HEADER.RELATIVE_BUTTON}
                    </span>
                  </Button>
                </Tooltip>

                <Tooltip title={TOOLTIP_HEADER.INTERNATIONAL_BUTTON}>
                  <Button
                    size="small"
                    href="https://e.vnexpress.net"
                    icon={<GithubOutlined />}
                  >
                    <span className="text-gray">
                      {TOOLTIP_HEADER.INTERNATIONAL_BUTTON}
                    </span>
                  </Button>
                </Tooltip>
              </Space>
            </div>
          </div>
        </Col>

        <Col>
          <Divider type="vertical" className="divider-right"/>
        </Col>

        <Col span={8} lg={7} md={3} sm={3} >
          <div className="header-last">
            <Space size={8}>
              <Search
                placeholder="Tìm kiếm"
                enterButton={
                  <Tooltip title={TOOLTIP_HEADER.FIND}>
                    <SearchOutlined />
                  </Tooltip>
                }
                size="small"
              />
              <Tooltip title={TOOLTIP_HEADER.LOGIN}>
                <Button
                  type="link"
                  href="/login"
                  icon={<UserOutlined />}
                  size="small"
                >
                  {TOOLTIP_HEADER.LOGIN}
                </Button>
              </Tooltip>
            </Space>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
