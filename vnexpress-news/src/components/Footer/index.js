import { Divider, Menu, Button, Tooltip } from "antd";
import "../../assets/css/footer.css";
import { NAV_MENU, TOOLTIP_HEADER } from "../../constants/index";
import Container from "../Container";
import Logo from "../../assets/images/logo.svg";
import {
  DingdingOutlined,
  CodepenCircleOutlined,
  Html5Outlined,
  WeiboOutlined,
  SlackSquareOutlined,
  createFromIconfontCN,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

const Footer = () => {
  const IconFont = createFromIconfontCN({
    scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
  });
  return (
    <Container>
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-top--menu">
            <Menu className="menu-footer">
              {NAV_MENU.map((menuItem) => {
                return (
                  <Menu.Item key={menuItem.id}>
                    <a target="_blank" rel="noopener noreferrer" href="/">
                      {menuItem.title}
                    </a>
                  </Menu.Item>
                );
              })}
            </Menu>
          </div>
          <Divider type="vertical" style={{ height: "100%" }} />
          <div className="footer-top-advertisement">
            <h3>Tải ứng dụng</h3>
            <div className="area-advertisement-action">
              <Tooltip
                title={TOOLTIP_HEADER.RELATIVE_BUTTON}
                placement="bottom"
              >
                <Button
                  size="medium"
                  href="https://vnexpress.net/tin-tuc-24h"
                  icon={<DingdingOutlined />}
                >
                  <span className="text-gray">
                    {TOOLTIP_HEADER.RELATIVE_BUTTON}
                  </span>
                </Button>
              </Tooltip>

              <Tooltip
                title={TOOLTIP_HEADER.INTERNATIONAL_BUTTON}
                placement="bottom"
              >
                <Button
                  size="medium"
                  href="https://vnexpress.net/tin-tuc-24h"
                  icon={<CodepenCircleOutlined />}
                >
                  <span className="text-gray">
                    {TOOLTIP_HEADER.INTERNATIONAL_BUTTON}
                  </span>
                </Button>
              </Tooltip>
            </div>
            <div className="area-contact">
              <h3>Liên hệ</h3>
              <div className="area-contact--content">
                <Button type="link" icon={<Html5Outlined />}>
                  <span className="text-gray">Tòa soan</span>
                </Button>
                <Button type="link" icon={<WeiboOutlined />}>
                  <span className="text-gray">Quảng cáo</span>
                </Button>
                <Button type="link" icon={<SlackSquareOutlined />}>
                  <span className="text-gray">Hợp tác bản quyền</span>
                </Button>
              </div>
            </div>
            <Divider type="horizontal" className="divider-custom" />
            <div className="area-hotline">
              <h3>Đường dây nóng</h3>
              <div className="area-hotline--content__phone">
                <u>083.888.0123</u>
                <u>083.888.0123</u>
              </div>
              <div className="area-hotline--content__address">
                <i>Hà nội</i>
                <i>TP.HCM</i>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom--header">
            <div className="wrapper-logo">
              <img src={Logo} alt="" />
            </div>

            <div className="social-media">
              <a href="https://vnexpress.net">RSS</a>
              <Divider type="vertical" />
              <span>Theo dõi VnExpress trên</span>
              <Button
                type="secondary"
                shape="circle"
                icon={<IconFont type="icon-facebook" />}
              />
              <Button
                type="secondary"
                shape="circle"
                icon={<LinkedinOutlined />}
              />
              <Button
                type="secondary"
                shape="circle"
                icon={<TwitterOutlined />}
              />
            </div>
          </div>
          <div className="footer-bottom--info">
            <div className="footer-bottom--info__left">
              <h3>Báo tiếng Việt nhiều người xem nhất</h3>
              <p>
                Thuộc Bộ Khoa học Công nghệ Số giấy phép: 06/GP-BTTTT ngày
                03/01/2014
              </p>
            </div>
            <div className="footer-bottom--info__center">
              <h5>Tổng biên tập: Phạm Hiếu</h5>
              <h5>
                Địa chỉ: Tầng 5, Tòa nhà FPT, 17 phố Duy Tân, Cầu Giấy, Hà Nội
              </h5>
              <h5>Điện thoại: 024 7300 8899 - máy lẻ 4500</h5>
            </div>
            <div className="footer-bottom--info__right">
              <h5>© 1997-2021. Toàn bộ bản quyền thuộc VnExpress</h5>
            </div>
          </div>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
