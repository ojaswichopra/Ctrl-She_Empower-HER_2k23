import React, { useState } from "react";
import "./mythBuster.css";
import { motion } from "framer-motion";
import left from "../../assets/leftArrow.png";
import right from "../../assets/rightArrow.png";

const mythBusterData = [
  {
    title: "MYTH BUSTERS" ,
    reality:
      "Ensuring women's safety is a critical issue, and it's essential for society to actively dispel these myths and work collectively towards creating an environment where women can live without fear of assault or harassment. ",
  },
  {
    title: "#1 Women Are Only Assaulted by Strangers",
    reality:
      "While attacks by strangers do occur, the majority of assaults against women are committed by someone they know, such as a family member, friend, or acquaintance. It's essential to be cautious and aware of potential risks from people you trust as well. ",
  },
  {
    title: "#2 Women Can Avoid Assault by Dressing Modestly",
    reality:
      "A person's clothing choice does not excuse or justify assault. Assault is a crime, and the responsibility lies entirely with the perpetrator. Victim-blaming is harmful and counterproductive.",
  },
  {
    title: "#3 Women Who Drink Alcohol or Go to Parties Are Asking for Trouble",
    reality:
      "It's important to know that drinking alcohol or attending social events does not make someone deserving of assault. Consent must be freely given, being intoxicated does not equate to consent.",
  },
  {
    title: "#4 Women Are Safe in Their Own Homes",
    reality:
      "Home can be a place where intimate partner violence occurs. Women can face danger within their homes, and it's crucial to recognize the signs of abuse and seek help when needed.",
  },
  {
    title: "#5 Women Should Stay Silent About Harassment or Assault",
    reality:
      "Encouraging women to speak out about their experiences is essential for raising awareness, seeking justice, and supporting survivors. No one should feel pressured to remain silent.",
  },
  {
    title: "#6 Women Shouldn't Walk Alone at Night",
    reality:
      "While it's a good practice to be cautious, women have the right to be out at any time without fear of harm. Society should focus on preventing assaults rather than restricting women's freedoms",
  },
  {
    title: "#7 Self-Defense Training Makes Women Completely Safe",
    reality:
      "Self-defense training can be valuable for building confidence and skills, but it doesn't guarantee safety. Prevention and societal changes are equally important in addressing women's safety.",
  },
  {
    title: "#8 Women Are Always Hysterical When Reporting Assault",
    reality:
      "Women have the right to express their emotions when reporting assault, and their reactions can vary widely. Law enforcement and support systems should be sensitive and empathetic.",
  },
  {
    title: "#9 Women Who Report Assaults Are Just Seeking Attention",
    reality:
      "Reporting assault is a courageous act, and survivors should be taken seriously. Many survivors report for justice, safety, and to prevent further harm to themselves and others.",
  },
  {
    title: "#10 Women Are Overreacting About Safety Concerns",
    reality:
      "Concerns about safety are valid, and women should trust their instincts. It's essential to create a culture that supports open discussions about safety concerns and takes them seriously.",
  },
];
const MythBuster = () => {
  const transition = { type: "tween", duration: 2.5 };
  const [selected, setSelected] = useState(0);
  const tLength = mythBusterData.length;
  return (
    <>
    
    <div className="ws__cta">
    
      <div className="ws__cta-content">
        <div className="left-t">
          <motion.span
            key={selected}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={transition}
          >
            <h3 >{mythBusterData[selected].title}</h3>
            {mythBusterData[selected].reality}
          </motion.span>
          
        </div>
        <div className="right-t">
          <div className="arrows">
            <img
              src={right}
              onClick={() => {
                selected === tLength - 1
                  ? setSelected(0)
                  : setSelected((prev) => prev + 1);
              }}
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default MythBuster;
