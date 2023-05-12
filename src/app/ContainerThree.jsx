"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BeatLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./page.scss";
import Image from "next/image";
import question from '../images/questions.png'

function ContainerThree() {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [position, setPosition] = useState(0);
  const [point, setPoint] = useState(0);

  const allQuestion = info[position];

  console.log(allQuestion);
  const getData = async () => {
    const resp = await fetch("https://opentdb.com/api.php?amount=10");
    const data = await resp.json();
    setInfo(data.results);
    setLoading(false);
  };
  const notify = () => toast("Answer Correct!!", { autoClose: 1000 });

  useEffect(() => {
    getData();
  }, []);

  const selectedAnswer = (item) => {
    if (item === allQuestion.correct_answer) {
      notify();
      setPosition(position + 1);
      setPoint(point + 1);
    } else {
      toast.error("Answer Incorrect", { autoClose: 1000 });
      setPosition(position + 1);
    }
  };

  const allAnswers = [
    allQuestion ? allQuestion.incorrect_answers : null,
    allQuestion ? allQuestion.correct_answer : null,
  ].flat();

  console.log(point);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <BeatLoader color="#efefef" size={20} />{" "}
      </div>
    );
  }

  const reset = () => {
    setPosition(0);
    setPoint(0);
  };

  return (
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',width:'100%'}}>
    <div style={{display:'flex', justifyContent:'center',gap:'30px' ,alignItems:'center', width:'500px',marginTop:'50px'}}>
            <Image  width={50} height={50} src={question}/>
            <h1 style={{color:'white'}} className="title">Question Pro</h1>
          </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 2 }}
        transition={{ duration: 2 }}
        className="container"
      >

        <div className="main">
          {info.length === position ? (
            <motion.div
              className="ternary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h1>Game finished</h1>
              <h2> Answers Corrects: {point}/10</h2>
              <button
                onClick={() => reset()}
                class="button-82-pushable"
                role="button"
              >
                <span class="button-82-shadow"></span>
                <span class="button-82-edge"></span>
                <span class="button-82-front text">Play Again</span>
              </button>
            </motion.div>
          ) : (
            <>
              <div className="category">
                <h2>Category/ {allQuestion ? allQuestion.category : null}</h2>
              </div>
              <div className="questions">
                <h2>
                  {allQuestion
                    ? allQuestion.question.replace(
                        /=|&|#|0|3|9|quot|quo|Index|;/g,
                        ""
                      )
                    : null}
                </h2>
              </div>
              <div className="difficulty">
                <p>
                  Difficulty - <span>{allQuestion.difficulty}</span>{" "}
                </p>
              </div>

              <div className="answers-container">
                <h2>
                  {allAnswers
                    ? allAnswers.sort().map((item) => (
                        <div key={item} className="answers">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                            variant="outline-primary"
                            onClick={() => selectedAnswer(item)}
                          >
                            {item.replace(/=|&|#|0|3|9|quot|quo|Index|;/g, "")}
                          </motion.button>
                        </div>
                      ))
                    : null}
                </h2>
              </div>
            </>
          )}
        </div>
      </motion.div>
      <ToastContainer />
    </div>
  );
}

export default ContainerThree;
