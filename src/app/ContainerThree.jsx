"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { RingLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./page.scss";

function ContainerThree() {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [position, setPosition] = useState(0);
  const [point, setPoint] = useState(0);

  const allQuestion = info[position];

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
        <RingLoader color="#36d7b7" width="200px" />
      </div>
    );
  }


  const reset=()=>{
    setPosition(0)
    setPoint(0)
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 2 }}
        transition={{ duration: 2 }}
        className="container"
      >
        <div className="main">
          {info.length === position ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              style={{
                color: "white",
                gap: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
                flexDirection: "column",
              }}
            >
              <h1>Game finished</h1>
              <h2> Answers Corrects: {point}</h2>
              <button onClick={()=>reset()} class="button-82-pushable" role="button">
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
                <h2
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontSize: "15px",
                  }}
                >
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

              <div
                style={{
                  height: "400px",
                  width: "450px",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              >
                <h2>
                  {allAnswers.sort().map((item) => (
                    <div className="answers">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        variant="outline-primary"
                        onClick={() => selectedAnswer(item)}
                      >
                        {item.replace(/=|&|#|0|3|9|quot|quo|Index|;/g, "")}
                      </motion.button>
                    </div>
                  ))}
                </h2>
              </div>
            </>
          )}
        </div>
      </motion.div>
      <ToastContainer />
    </>
  );
}

export default ContainerThree;
