"use client";
import { useState } from "react";
import Image from "next/image";

const phrases = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Pookie please",
  "Don't do this to me",
  "I'm gonna cry",
  "You're breaking my heart ;(",
];

export default function Home() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 24;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    if (noCount === 0) {
      return phrases[0];
    } else {
      return phrases[(noCount % (phrases.length - 1)) + 1];
    }
  }

  return (
    <main className="bg-white w-full flex flex-col items-center justify-center h-screen">
      {yesPressed ? (
        <>
          <Image
            src="/bear-kiss-bear-kisses.gif"
            alt="bears kissing"
            width={230}
            height={227}
          />
          <div className="mt-4 text-5xl text-black">YAY!!!</div>
        </>
      ) : (
        <>
          <Image
            src="/cute-love-bear-roses.gif"
            alt="bear with heart"
            width={309}
            height={225}
          />
          <div className="text-5xl items-center justify-center text-center text-black m-2">
            Will you be my valentine?
          </div>
          <div className="flex flex-wrap items-center justify-center">
            <button
              className="yesButton m-2 p-2 rounded-xl font-bold text-6xl"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              YES
            </button>
            <button
              className="noButton m-2 p-2 rounded-xl text-3xl"
              onClick={handleNoClick}
            >
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </main>
  );
}
