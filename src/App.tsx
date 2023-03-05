import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import flash_key from "./components/flash_key_temp";

function App() {
  const [flipState, switchFlip] = useState(false);
  const [cardN, toCard] = useState(0);

  function backCard() {
    switchFlip(false);
    if (cardN <= 0) toCard(flash_key.length - 1);
    else toCard(cardN - 1);
  }

  function forwardCard() {
    switchFlip(false);
    if (cardN >= flash_key.length - 1) toCard(0);
    else toCard(cardN + 1);
  }

  return (
    <div className="App">
      <div className="m-auto h-screen w-screen overflow-hidden">
        <h1 className="m-24 text-4xl  font-black">Kanji Cards</h1>
        <h3 className="m-24 text-2xl  font-black">Total Number of Cards: {flash_key.length}</h3>
        <div className="flex place-items-center  place-content-center">
          <button className="flex-shrink p-8 text-xl" onClick={backCard}>
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button
            onClick={() => switchFlip(!flipState)}
            className="w-64 lg:w-1/4"
          >
            {flipState ? (
              <motion.div key={'i'} animate={{ opacity: 1, rotateY: '0deg'}} style={{opacity: 0, rotateY: '90deg'}} >
              <Card.Back
                sub={flash_key[cardN].sub}
                main={flash_key[cardN].main}
                JLPT={flash_key[cardN].JLPT}
              />
              </motion.div>
            ) : (
              <motion.div key={'o'} animate={{ opacity: 1, rotateY: '0deg'}} style={{opacity: 0, rotateY: '90deg'}} >
              <Card.Front term={flash_key[cardN].term} 
              JLPT={flash_key[cardN].JLPT}/>
              </motion.div>
            )}
          </button>
          <button className="flex-shrink p-8 text-xl" onClick={forwardCard}>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
