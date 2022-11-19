import {Avatar} from "../components/avatar";
import Headshot from "../assets/headshot.png";
import "./about.css";
import {Properties, Property} from "../components/properties";
import {useState} from "react";

export const About = () => {

  const birthDay = new Date(1999, 12, 19);
  const calcCurrentAgeInSeconds = () => (new Date().getTime() - birthDay.getTime()) / 1000;
  const [currentAgeInSeconds, setCurrentAgeInSeconds] = useState(calcCurrentAgeInSeconds());

  setInterval(
    () => setCurrentAgeInSeconds(calcCurrentAgeInSeconds()),
    1000,
  );

    return (
        <div className="home-page">
          {/*TODO(ericr): style this with mobile in mind - collapse to column if width is too low*/}
          <div>
            <Avatar
              profileImageSource={Headshot}
              name={""}
            />
           <article>
             {/*<h4>*/}
             {/*  Introduction*/}
             {/*</h4>*/}
             <p>
               Hi, I'm Eric.
             </p>
             <p>
               I am a Software Engineer that is currently finishing off my undergraduate studies in computer science and telecommunications engineering (with a heavy focus on the former) whilst working. I have a large interest in both theoretical computer science and web application development. I am generally interested in chatting about anything relating to software design or applied mathematics. As a result of my undergraduate thesis, I also have a surprisingly large amount of knowledge and interest in anomaly detection, particularly as it relates to high dimensional imagery. Outside of development, I find myself hiking, cycling, camping etc, generally anything that involves being outside.

             </p>
             <p>
               <span className="meme-text">
                I USE ARCH, BTW
               </span>
             </p>
           </article>
          </div>
            <h4>
                Some Facts
            </h4>
            <Properties>
              <Property property={"Education"} value={"EECS @ USYD"}/>
              <Property property={"Location"} value={"Sydney"}/>
              <Property property={"Age"} value={currentAgeInSeconds.toFixed(0).toString()}/>
              <Property property={"Favourite Number"} value={42} />
              <Property property={"Favourite Food"} value={"Pad Kee Mao"} />
            </Properties>
        </div>
    );
};
