"use client";
import React, { useEffect, useState } from "react";
import allImages from "./infoMemoTest";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./GameOne.scss";
import Image from "next/image";
import pointer from '../../images/pointer.png'

const Container = () => {
  const { images } = allImages;
  const [success, setSuccess] = useState([]);
  const [selected, setSelected] = useState([]);

  const handleClick = (item) => {
    if (selected.length < 2) {
      setSelected((selected) => selected.concat(item));
    }
  };

  const reset = () => {
    setSuccess([]);
  };

  useEffect(() => {
    if (selected.length === 2) {
      if (selected[0].split("|")[1] === selected[1].split("|")[1]) {
        setSuccess((success) => success.concat(selected));
      }
      setTimeout(() => setSelected([]), 1000);
    }
  }, [selected]);

  const notify = () => toast("Congratulations!!", { autoClose: false });

  useEffect(() => {
    if (success.length === images.length) {
      notify();
      setSuccess([]);
    }
  }, [success,images.length]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <h2 style={{ color: "#3bb4c1", marginBottom: "10px", fontSize:'50px',fontWeight:800 }}>Memo Test</h2>
      <motion.div
        initial={{ y: "-1000px" }}
        animate={{ y: 0 }}
        transition={{ duration: 1.0 }}
        className="grid-container"
      >
        
        {images.map((item) => {
          const [, url] = item.split("|");

          return (
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="grid-item"
              onClick={() => handleClick(item)}
              key={item}
            >
              {selected.includes(item) || success.includes(item) ? (
                <Image
                 width={50}
                 height={50}
                  style={{  justifyContent: "center" }}
                  src={url}
                  alt=""
                />
              ) : (
                <Image
                  key={item}
                  height={20}
                  width={20}
                  style={{ justifyContent: "center" }}
                  src={pointer}
                ></Image>
              )}
            </motion.div>
          );
        })}
        <ToastContainer />
      </motion.div>
    </div>
  );
};

export default Container;
