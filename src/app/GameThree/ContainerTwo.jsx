"use client";
import "./gameThree.scss";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Icon from "./Icon";
import logo from '../../images/tic-tac.png'
import Image from "next/image";

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




  const reset = () => {
    setCells(["", "", "", "", "", "", "", "", ""]);
  };

const WinnerX = () => toast(" PLAYEY  'X'  WINNER!");
const Winneer0 = () => toast(" PLAYEY  'O'  WINNER!");
const Draw = () => toast(" DRAW !");


  function GanadorX() {
     WinnerX() 
    GanadorX = function() {}; // se sobrescribe la función con una versión vacía
  }
  

  function GanadorO() {
    Winneer0()
    GanadorO = function() {}; // se sobrescribe la función con una versión vacía
  }
  function empate() {
     Draw() 
    empate = function() {}; // se sobrescribe la función con una versión vacía
  }

  useEffect(() => {
    for (let player of cells) {
      let winner;
      const hanswon = winning.some((comp) => comp.every((cell) => player === cells[cell]));
      if (hanswon) {
        winner = player;
        console.log(winner)
      }
       if (cells.every((str) => str.length > 0)) {
      empate()
      } else if (winner === "x") {
       GanadorX()
      } else if (winner === "o") {
     GanadorO()
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
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'20px'}}>
        <Image width={50} src={logo}/>
              <motion.h2 
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:2}}
      style={{color:'white',marginBottom:'20px',fontWeight:'500',fontFamily:'fantasy',fontSize:'30px',marginTop:'20px'}}> Ta Te Ti</motion.h2>
      </div>

      <motion.div
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
