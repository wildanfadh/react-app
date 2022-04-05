import React, { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Heart } from "iconsax-react";

// style
// import "../styles/Sidebar.css";
// import "../styles/Dashboard.css";

const DashboardComp = (props) => {
  const [sidebarState, setSidebarState] = useState("closed");
  const [selectedItem, setSelectedItem] = useState("");

  const handleClick = (e) => {
    setSelectedItem(e.target.innerText);
    // console.log(e.currentTarget.id);

    handleSidebarState(e.currentTarget.id);
  };

  const handleSidebarState = (e) => {
    setSidebarState(sidebarState === "closed" ? "open" : "closed");
    let currentTarget = e;
    // console.log(currentTarget);

    if (sidebarState === "closed") {
      setSelectedItem(currentTarget);
    } else {
      setSelectedItem("");
    }
  };

  // const handleToogle = () => {
  //   this.setState({
  //     isOpen: !this.state.isOpen,
  //   });
  // };

  return (
    <div>
      <ProSidebar>
        <SidebarHeader>
          <div className="logo">
            <Heart />
            <span>Dashboard</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <Menu>
            <MenuItem id="nav_dashboard" onClick={handleClick}>
              <a href="#">
                <Heart />
                <span>Dashboard</span>
              </a>
            </MenuItem>
            <MenuItem>
              <a href="#">
                <Heart />
                <span>Sub 1</span>
              </a>
            </MenuItem>
            <MenuItem>
              <a href="#">
                <Heart />
                <span>Sub 2</span>
              </a>
            </MenuItem>
            <SubMenu title="Sub 3">
              <MenuItem>
                <a href="#">
                  <Heart />
                  <span>Sub 3</span>
                </a>
              </MenuItem>
              <SubMenu title="Sub 3">
                <MenuItem>
                  <a href="#">
                    <Heart />
                    <span>Sub 3</span>
                  </a>
                </MenuItem>
              </SubMenu>
            </SubMenu>
            <SubMenu title="Sub 3">
              <MenuItem>
                <a href="#">
                  <Heart />
                  <span>Sub 3</span>
                </a>
              </MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>
        <SidebarFooter>
          <div className="copyright">
            <span>Copyright © 2019</span>

            <a href="#">
              <Heart />
            </a>
          </div>
        </SidebarFooter>
      </ProSidebar>
    </div>
  );
};

export default DashboardComp;
