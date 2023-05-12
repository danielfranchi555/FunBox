"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import "./navbar.scss";
import Image from "next/image";
import memo from "../../images/memo-test.png";
import logo from "../../images/logo-game.png";
import question from "../../images/questions.png";
import ticTac from "../../images/tic-tac.png";



const NavBar = () => {
  return (
    <div className="navBar">
      <motion.div      >
      <Image alt="logo" style={{marginBottom:'50px',borderBottom:'solid 1px gray',padding:'15px'}}  src={logo} width={230} />
      </motion.div>

      <ul>
      <Link style={{ textDecoration: "none" }} href="/">
          <motion.li
            initial={{ x: "-1000" }}
            animate={{ x:0 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 1.5 }}
          >
            <Image alt="image" width={40} src={question} />
            <h2 style={{marginLeft:'5px'}}>Questions</h2>
          </motion.li>
        </Link>
        <Link style={{ textDecoration: "none" }} href="/GameOne">
          <motion.li
            initial={{ x: "-1000" }}
            animate={{ x:0 }}
            transition={{ duration: 1.5 }}
            whileHover={{ scale: 1.1 }}
          >
            <Image alt="image" width={40} src={memo} />
            <h2 style={{marginLeft:'5px'}}>Memo Test</h2>{" "}
          </motion.li>
        </Link>
        <Link style={{ textDecoration: "none" }} href="/GameThree">
          <motion.li
            initial={{ x: "-1000" }}
            animate={{ x:0 }}
            transition={{ duration: 1.5 }}
            whileHover={{ scale: 1.1 }}
          >
            <Image alt="image" width={40} src={ticTac} />
            <h2 style={{marginLeft:'5px'}}>Tic Tac Toe</h2>
          </motion.li>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
