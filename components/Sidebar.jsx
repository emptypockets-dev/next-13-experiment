import Card from "./Card";
// import Image from 'next/image';
import SidebarLink from "./SidebarLink";

const links = [
  { label: "Home", icon: "Grid", link: "/home" },
  {
    label: "Calendar",
    icon: "Calendar",
    link: "/calendar",
  },
  { label: "Profile", icon: "User", link: "/profile" },
  {
    label: "Settings",
    icon: "Settings",
    link: "/settings",
  },
];

const SideBar = () => {
  return (
    <Card className="h-full w-40 flex items-center justify-between flex-wrap">
      <div className="w-full flex flex-col h-full justify-around">
        {links.map((link, index) => (
          <SidebarLink link={link} key={index} />
        ))}
      </div>
    </Card>
  );
};

export default SideBar;
