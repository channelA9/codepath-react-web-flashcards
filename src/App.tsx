import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import "./App.css";

import Card from "./components/Card";
import Form from "./components/Form";

import { flashcards } from "./components/flash_key_temp";

function App() {
  const [flipState, switchFlip] = useState(false);
  const [flashKey, changeFlashKey] = useState(flashcards.cards);
  const [cardN, toCard] = useState(0);

  const [guess, setGuess] = useState("");
  const [status, setStatus] = useState("blank");
  const [currentStreak, setStreak] = useState(0);
  const [longestStreak, setStreakRecord] = useState(0);
  // card stuff
  function backCard() {
    setStatus("blank");
    switchFlip(false);
    if (cardN <= 0) toCard(flashKey.length - 1);
    else toCard(cardN - 1);
  }

  // function randCard() {
  //   switchFlip(false);
  //   toCard(getRandomInt(0,flash_key.length - 1));
  // }

  // function getRandomInt(min: number, max: number) {
  //   min = Math.ceil(min);
  //   max = Math.floor(max);
  //   return Math.floor(Math.random() * (max - min) + min);
  // }

  function shuffleCards() {
    setStatus("blank");
    changeFlashKey(flashcards.shuffle(flashKey));
    forwardCard();
  }

  function forwardCard() {
    setStatus("blank");
    switchFlip(false);
    if (cardN >= flashKey.length - 1) toCard(0);
    else toCard(cardN + 1);
  }

  function masteredCard() {
    let adjustedDeck = flashKey;
    let safeCard = cardN;
    adjustedDeck.splice(safeCard,1)
    if (adjustedDeck.length <= 0) adjustedDeck.push(
      {
        term: "None",
        main: "no more cards!",
        sub: "Well done!",
        JLPT: "N5"
      },
    );
    if (safeCard >= adjustedDeck.length - 1) toCard(0);
    else toCard(cardN + 1);

    changeFlashKey(adjustedDeck);
  }

  function compareAnswer(e: Event) {
    e.preventDefault();
    if (!flipState) {
      if (guess == flashKey[cardN].main) {
        setStatus("right");
        setStreak(currentStreak + 1);
        if (currentStreak >= longestStreak) {
          setStreakRecord(currentStreak+1)
        }
      } else {
        setStatus("wrong");
        setStreak(0);
      }
      switchFlip(true);
      
    } else {
      setStatus("blank");
      setGuess("");
      forwardCard();
    }
  }

  return (
    <div className={"App w-screen h-screen " + status}>
      <div className="m-auto h-screen w-screen overflow-hidden">
        <h1 className="m-24 text-3xl  font-black">Kanji Cards</h1>
        <h3 className="m-24 text-xl  font-black">
          Total Number of Cards: {flashKey.length} Current Streak: {currentStreak} Longest Streak: {longestStreak}
        </h3>
        
        <div className="flex place-content-center  place-items-center">
          <button className="flex-shrink p-8 text-xl" onClick={backCard}>
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button
            onClick={() => switchFlip(!flipState)}
            className="w-64 lg:w-1/4"
          >
            {flipState ? (
              <motion.div
                key={"i"}
                animate={{ opacity: 1, rotateY: "0deg" }}
                style={{ opacity: 0, rotateY: "90deg" }}
              >
                <Card.Back
                  sub={flashKey[cardN].sub}
                  main={flashKey[cardN].main}
                  JLPT={flashKey[cardN].JLPT}
                  status={status}
                />
              </motion.div>
            ) : (
              <motion.div
                key={"o"}
                animate={{ opacity: 1, rotateY: "0deg" }}
                style={{ opacity: 0, rotateY: "90deg" }}
              >
                <Card.Front
                  term={flashKey[cardN].term}
                  JLPT={flashKey[cardN].JLPT}
                />
              </motion.div>
            )}
          </button>
          <button className="flex-shrink p-8 text-xl" onClick={forwardCard}>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        <div className="flex flex-col place-content-center">
          <div className="flex place-content-center">
            <button className="flex-shrink p-8 text-xl" onClick={shuffleCards}>
              <i className="fa-solid fa-shuffle"></i>
            </button>
            <button className="flex-shrink p-8 text-xl" onClick={masteredCard}>
              <i className="fa-solid fa-check"></i>
            </button>
          </div>
          <Form
            guess={guess}
            onGuess={(e: Event) => setGuess(e.target ? e.target.value : "")}
            check={(e: Event) => compareAnswer(e)}
          />
        </div>
        {guess}
      </div>
    </div>
  );
}

export default App;
