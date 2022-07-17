import React, { useRef, useState } from "react";
import logo from "../../assets/logo.gif";
import quan from "../../assets/271971974_1647546088921738_1281777781307311608_n.jpg";
import ExtoriorDay from "../../assets/videos/ExteriorDay.mp4";
import ExtoriorNight from "../../assets/videos/ExteriorNight.mp4";
import ExtoriorDayRain from "../../assets/videos/ExteriorRainyDay.mp4";
import ExtoriorNightRain from "../../assets/videos/ExteriorRainyNight.mp4";

import audio1 from "../../assets/musics/Arya, Brxvs - lonely night (1).mp3";
import audio2 from "../../assets/musics/redmatic - open eyes.mp3";
import audio3 from "../../assets/musics/Sleepermane - Orbital.mp3";
import audio4 from "../../assets/musics/Sleeping under the stars.mp3";
import audio5 from "../../assets/musics/sleepy_4.mp3";
import rainSound from "../../assets/sounds/rain_city.mp3";
import keyBoardSound from "../../assets/sounds/key_board.mp3";
import carSound from "../../assets/sounds/city_traffic.mp3";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUmbrella,
  faKeyboard,
  faCar,
} from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

const Home = () => {
  const listAudios = [
    { src: audio1 },
    { src: audio2 },
    { src: audio3 },
    { src: audio4 },
    { src: audio5 },
  ];
  const [day, setDay] = useState(true);
  const [rain, setRain] = useState(false);
  const [play, setPlay] = useState(false);
  const [keyBoard, setKeyBoard] = useState(false);
  const [car, setCar] = useState(false);
  const audioRef = useRef();
  const rainRef = useRef();
  const keyBoardRef = useRef();
  const carRef = useRef();
  const [audio, setAudio] = useState(0);

  const handlePrevClick = () => {
    setPlay(true);
    if (audio === 0) {
      setAudio(listAudios.length - 1);
    } else {
      setAudio(audio - 1);
    }
  };

  const handleNextClick = () => {
    setPlay(true);
    if (audio === listAudios.length - 1) {
      setAudio(0);
    } else {
      setAudio(audio + 1);
    }
  };

  return (
    <div className="relative">
      <div className="">
        <div className="opacity-1 z-10 absolute flex items-center">
          <div className="absolute text-center top-[48vh] left-[50vw] -translate-x-[50%] w-[300px] text-[white]">
            <p className="text">chỉ mong nếu có cầu vồng xuất hiện</p>
            <p className="text">
              cũng đừng quên chiếc ô đi cùng mình dưới cơn mưa năm ấy !!!
            </p>
          </div>
          <img className="block w-[177px] h-[100px]" alt="" src={logo} />
          <div className="px-[10px] py-[2px] border-[2px] bg-[#ccc] rounded-[5px] opacity-[5]">
            <button
              className={` rounded-full  ${
                day ? "border-[yellow] border-[2px]" : ""
              }`}
              onClick={() => setDay(true)}
            >
              <img
                alt=""
                src="https://app.lofi.co/static/media/night.0e9aec7405cc2f74e26970aeab6cec31.svg"
              />
            </button>
            <button
              className={`ml-[20px] rounded-full p-[1px] ${
                !day ? "border-[black] border-[2px]" : ""
              }`}
              onClick={() => setDay(false)}
            >
              <img
                alt=""
                src="https://app.lofi.co/static/media/day.5accee77369b956360cc75a7d7a5ea33.svg"
              />
            </button>
          </div>
          <img
            className="w-[40px] h-[40px] rounded-full ml-[20px]"
            alt=""
            src={quan}
          />
          <div
            className="absolute text-center opacity-[0.7] z-6 w-[55px] h-[115px] rounded-full top-[200px]
        left-[50px] border-[red] bg-[white]"
          >
            <div
              className={`w-[35px] h-[35px] rounded-full mx-auto mt-[2px] ${
                rain ? "border-[1px] border-[black]" : ""
              }`}
              onClick={() => {
                setRain(!rain);
                rain ? rainRef.current.pause() : rainRef.current.play();
              }}
            >
              <FontAwesomeIcon
                className=" w-[30px] h-[30px] my-auto"
                icon={faUmbrella}
              />
            </div>
            <div
              className={`w-[35px] h-[35px] rounded-full mx-auto mt-[2px] ${
                keyBoard ? "border-[1px] border-[black]" : ""
              }`}
              onClick={() => {
                setKeyBoard(!keyBoard);
                keyBoard
                  ? keyBoardRef.current.pause()
                  : keyBoardRef.current.play();
              }}
            >
              <FontAwesomeIcon
                className=" w-[30px] h-[30px] my-auto"
                icon={faKeyboard}
              />
            </div>
            <div
              className={`w-[35px] h-[35px] rounded-full mx-auto mt-[2px] ${
                car ? "border-[1px] border-[black]" : ""
              }`}
              onClick={() => {
                setCar(!car);
                car ? carRef.current.pause() : carRef.current.play();
              }}
            >
              <FontAwesomeIcon
                className=" w-[30px] h-[30px] my-auto"
                icon={faCar}
              />
            </div>
          </div>
        </div>
        <video
          className={`absolute w-[100vw] h-[100vh] object-cover ${
            day && !rain ? "opacity-1" : "opacity-0"
          }`}
          loop
          autoPlay
          muted
        >
          <source src={ExtoriorDay} type="video/mp4" />
        </video>

        <video
          className={`absolute top-0 w-[100vw] h-[100vh] object-cover ${
            !day && !rain ? "opacity-1" : "opacity-0"
          }`}
          loop
          autoPlay
          muted
        >
          <source src={ExtoriorNight} type="video/mp4" />
        </video>

        <video
          className={`absolute top-0 w-[100vw] h-[100vh] object-cover ${
            day && rain ? "opacity-1" : "opacity-0"
          }`}
          loop
          autoPlay
          muted
        >
          <source src={ExtoriorDayRain} type="video/mp4" />
        </video>

        <video
          className={`absolute top-0 w-[100vw] h-[100vh] object-cover ${
            !day && rain ? "opacity-1" : "opacity-0"
          }`}
          loop
          autoPlay
          muted
        >
          <source src={ExtoriorNightRain} type="video/mp4" />
        </video>

        <div className="absolute top-[85vh] left-[50vw] -translate-x-[50%] flex">
          <button
            onClick={() => {
              handlePrevClick();
            }}
          >
            <img
              alt=""
              src="https://app.lofi.co/static/media/previous.3b3474665d6b8d95bb081b41d67270fe.svg"
            />
          </button>
          <button
            className="w-[54px] h-[54px] mx-[20px]"
            onClick={() => {
              setPlay(!play);
              play ? audioRef.current.pause() : audioRef.current.play();
            }}
          >
            <img
              alt=""
              src={`${
                play
                  ? "https://app.lofi.co/static/media/pause.ac7490b3bef8fffb1bfd2550201f4836.svg"
                  : "https://app.lofi.co/static/media/play.18d46dd90ca12db32170bea8b2d46404.svg"
              }`}
            />
          </button>
          <button onClick={handleNextClick}>
            <img
              alt=""
              src="https://app.lofi.co/static/media/next.9551d6f2d952cb6759a725aac878ab09.svg"
            />
          </button>
        </div>

        <div className="absolute top-[300px] hidden">
          <audio
            ref={audioRef}
            src={listAudios[audio].src}
            onEnded={() => {
              setAudio(audio + 1);
            }}
          />

          <audio loop ref={rainRef} src={rainSound} />
          <audio loop ref={keyBoardRef} src={keyBoardSound} />
          <audio loop ref={carRef} src={carSound} />
        </div>
      </div>
    </div>
  );
};

export default Home;
