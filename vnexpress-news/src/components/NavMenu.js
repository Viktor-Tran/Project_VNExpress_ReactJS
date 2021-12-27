import { Affix, Menu, Dropdown, Divider, Row, Col } from "antd";
import { NAV_MENU } from "../constants";
import "../assets/css/nav-menu.css";
import '../assets/css/ant.custom.divider.css'

const NavMenu = () => {
  const mappingMenu = (menuItem) => {
    const data = {
      id: menuItem.id,
      title: menuItem.title,
      childItem: menuItem.childItem || [],
    };

    data.childItem = data.childItem.map(mappingMenu);

    return data;
  };

  const mainMenus = NAV_MENU.map(mappingMenu);

  return (
    <>
      <Affix offsetTop={0}>
        <section className="section-menu">
          <Divider className="divider-custom"/>
          <Row>
            <Col className="gutter-row" xl={22} lg={24}>
              {mainMenus.map((dropdown) => {
                return (
                  <Dropdown
                    key={dropdown.id}
                    overlay={
                      <Menu key={dropdown.id}>
                        {dropdown.childItem.length > 0 &&
                          dropdown.childItem.map((menuItem) => {
                            return (
                              <Menu.Item key={menuItem.id}>
                                <a
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  href="/"
                                >
                                  {menuItem.title}
                                </a>
                              </Menu.Item>
                            );
                          })}
                      </Menu>
                    }
                    placement="bottomCenter"
                  >
                    <a
                      href="/"
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      {dropdown.title}
                    </a>
                  </Dropdown>
                );
              })}
            </Col>
          </Row>
          <Divider className="divider-custom divider-custom--bottom"/>
        </section>
      </Affix>
    </>
  );
};

export default NavMenu;
