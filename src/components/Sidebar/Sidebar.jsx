import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BiLeftArrowCircle,
  BiRightArrowCircle,
  BiBuilding,
  GrAppsRounded,
  FiSettings,
  TbBrandGoogleAnalytics,
  HiOutlineDatabase,
  HiOutlineShieldCheck,
  HiOutlineMenuAlt1,
} from "../../icons";

const Sidebar = () => {
  const sidebarAnimation = {
    // system view
    open: {
      width: "16rem",
      transition: {
        damping: 40,
      },
    },
    closed: {
      width: "4rem",
      transition: {
        damping: 40,
      },
    },
  };

  const [isOpen, setIsOpen] = useState(true);

  function handleOpenSidebar() {
    setIsOpen(!isOpen);
  }

  return (
    <aside>
      <motion.div
        variants={sidebarAnimation}
        animate={isOpen ? "open" : "closed"}
        className="bg-gray-50 shadow-xl z-[999] w-[16rem] max-w-[16rem] h-screen overflow-hidden md:relative fixed"
      >
        <div
          onClick={handleOpenSidebar}
          className="absolute w-fit h-fit z-50 right-3 bottom-3 cursor-pointer md:block hidden"
        >
          {/* icon  */}

          {isOpen ? (
            <BiLeftArrowCircle className="text-3xl" />
          ) : (
            <BiRightArrowCircle className="text-3xl" />
          )}
        </div>
      </motion.div>
    </aside>
  );
};

export default Sidebar;
