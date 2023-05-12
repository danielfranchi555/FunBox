"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import question from "../../images/questions.png";
import memo from "../../images/memo-test.png";
import ticTac from "../../images/tic-tac.png";
import Image from "next/image";
import "./navbar-mobile.scss";

const NavBarMobile = () => {
  return (
    <nav
    className="nav"
    >
      <motion.div
        initial={{ x: "-1000px" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        style={{ width: "100%" }}
      >
        <ul>
          <Link href="/" style={{textDecoration:'none'}}>
            <motion.li
              whileHover={{ scale: 1.1 }}
              className="li-mobile"
            >
              <Image alt="image" width={40} src={question} />
              <h3>QuestionPro</h3>
            </motion.li>
          </Link>
          <Link href="/GameOne" style={{textDecoration:'none'}}>
            <motion.li
             className="li-mobile"
              whileHover={{ scale: 1.1 }}
            >
              <Image alt="image" width={40} src={memo} />
              <h3>Memo Test</h3>
            </motion.li>
          </Link>
          <Link href="/GameThree" style={{textDecoration:'none'}}>
            <motion.li
              className="li-mobile"
              whileHover={{ scale: 1.1 }}
            >
              <Image alt="image" width={40} src={ticTac} />
              <h3>Ta Te Ti</h3>
            </motion.li>
          </Link>
        </ul>
      </motion.div>
    </nav>
  );
};
export default NavBarMobile;
