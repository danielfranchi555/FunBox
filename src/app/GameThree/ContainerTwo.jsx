"use client";
import "./gameThree.scss";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Icon from "./Icon";

const ContainerTwo = () => {
  const [turn, setTurn] = useState("x");
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [active, setActive] = useState(false);

  //Creamos todos los casos posibles para ganar
  const winning = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const handleClick = (index) => {
    const draft = [...cells];
    if (draft[index] === "") {
      draft[index] = turn;
      setCells(draft);
      setTurn(turn === "x" ? "o" : "x");
      console.log(turn);
    }
  };
  const notifyX = () => toast("X WIN !!", { autoClose: false });
  const notifyO = () => toast("O WIN !!", { autoClose: false });
  const notifyEmpate = () => toast("TIE !!", { autoClose: false });

  const reset = () => {
    setCells(["", "", "", "", "", "", "", "", ""]);
  };

  useEffect(() => {
    for (let player of cells) {
      let winner;
      const hanswon = winning.some((comp) =>
        comp.every((cell) => player === cells[cell])
      );
      if (hanswon) {
        winner = player;
      }
      if (cells.every((str) => str.length > 0)) {
        notifyEmpate();
      } else if (winner === "x") {
        notifyX()
      } else if (winner === "o") {
        notifyO()
      }
    }
  }, [cells]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection:'column',
        width: "100%",
      }}
    >
      <motion.h2 
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:2}}
      style={{color:'white',marginBottom:'20px'}}> Ta Te Ti</motion.h2>
      <motion.div
          initial={{ y: "-1000" }}
          animate={{ y:0 }}
          transition={{ duration: 1 }}
        className="grid"
      >
        {cells.map((item, index) => (
          <Icon key={index} handleClick={handleClick} item={item} index={index} />
        ))}
        <ToastContainer/>
      </motion.div>
      <button onClick={()=>reset()} class="button-82-pushable" role="button">
                <span class="button-82-shadow"></span>
                <span class="button-82-edge"></span>
                <span class="button-82-front text">Play Again</span>
              </button>
    </div>
  );
};
export default ContainerTwo;
