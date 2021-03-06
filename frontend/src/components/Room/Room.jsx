import React, { useContext } from "react";
import styles from "./Room.module.css";
import { ReactComponent as PlayerIcon } from "../../assets/icons/player.svg";
import { ReactComponent as PlayIcon } from "../../assets/icons/play.svg";
import { ReactComponent as StopIcon } from "../../assets/icons/stop.svg";
import { ReactComponent as CameraIcon } from "../../assets/icons/camera.svg";
import { ReactComponent as GameIcon } from "../../assets/icons/game.svg";
import { ReactComponent as MusicIcon } from "../../assets/icons/music.svg";
import { ReactComponent as SettingIcon } from "../../assets/icons/setting.svg";
import Marquee from "react-fast-marquee";

import LoginStatusContext from "../../contexts/LoginStatusContext";
import NameContext from "../../contexts/NameContext";
import VideoMicContext from "../../contexts/VideoMicContext";
import RegistMusic from "../Modals/RegistMusic/RegistMusic";
import GameList from "../Modals/Game/GameList";
import Setting from "../Modals/Setting/Setting";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import RoomContents from "./RoomContents";

let posX = 0;
let posY = 0;

const Room = () => {
  const { setLoginStatus } = useContext(LoginStatusContext);
  const { myVMstate } = useContext(VideoMicContext);
  const { myName } = useContext(NameContext);
  const [onPlayerClick, setOnPlayerClick] = useState(false);
  const [isPlayMusic, setIsPlayMusic] = useState(false);

  const [onCamera, setOnCamera] = useState(false);
  const [onGameList, setOnGameList] = useState(false);
  const [onRegistMusic, setOnRegistMusic] = useState(false);
  const [onSetting, setOnSetting] = useState(false);
  const { title, roomseq } = useParams();

  console.log(myName);

  useEffect(() => {
    setLoginStatus("3");
    console.log(myVMstate);
    // return () => setLoginStatus("2");
  }, []);

  const handleMusicPlayer = () => {
    setIsPlayMusic((prev) => !prev);
  };

  const handleModalClose = () => {
    setOnCamera(false);
    setOnGameList(false);
    setOnRegistMusic(false);
    setOnSetting(false);
  };

  const handleGameList = () => {
    setOnGameList(true);
  };

  const handleRegistMusic = () => {
    setOnRegistMusic(true);
  };

  const handleSetting = () => {
    setOnSetting(true);
  };

  const handlePlayerClick = () => {
    setOnPlayerClick((prev) => !prev);
  };

  const dragStartHandler = (e) => {
    posX = e.clientX;
    posY = e.clientY;

    console.log(posX);
    console.log(posY);
  };

  const dragHandler = (e) => {
    e.target.style.left = `${e.target.offsetLeft + e.clientX - posX}px`;
    e.target.style.top = `${e.target.offsetTop + e.clientY - posY}px`;
    posX = e.clientX;
    posY = e.clientY;
  };

  const dragEndHandler = (e) => {
    e.target.style.left = `${e.target.offsetLeft + e.clientX - posX}px`;
    e.target.style.top = `${e.target.offsetTop + e.clientY - posY}px`;
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.contents}>
          <div className={styles.title}>
            <h1>{title}</h1>
          </div>
          <div className={styles["main-contents"]}>
            <RoomContents
              sessionName={roomseq}
              userName={myName}
              media={myVMstate}
            />
          </div>
          <div
            className={styles.player}
            draggable
            onDragStart={dragStartHandler}
            onDrag={dragHandler}
            onDragEnd={dragEndHandler}
          >
            <div
              className={
                isPlayMusic
                  ? `${styles.playerIcon} ${styles.playerStart}`
                  : styles.playerIcon
              }
              onClick={handlePlayerClick}
            >
              <PlayerIcon width="30" height="30" />
            </div>
            {onPlayerClick ? (
              <>
                <Marquee
                  play={isPlayMusic}
                  pauseOnClick={isPlayMusic}
                  direction="right"
                  gradient={false}
                  className={styles.musicTitle}
                >
                  ???????????? - ?????????
                </Marquee>

                <div>
                  {isPlayMusic ? (
                    <StopIcon
                      width="30"
                      height="30"
                      onClick={handleMusicPlayer}
                    />
                  ) : (
                    <PlayIcon
                      width="30"
                      height="30"
                      onClick={handleMusicPlayer}
                    />
                  )}
                </div>
              </>
            ) : (
              <div>Music Player</div>
            )}
          </div>
        </div>
      </div>
      <div className={styles.dockBar}>
        <div className={styles.dock}>
          <CameraIcon width="50" height="50" className={styles.icon} />
          <GameIcon
            width="50"
            height="50"
            fill="#eee"
            className={styles.icon}
            onClick={handleGameList}
          />
          <MusicIcon
            width="50"
            height="50"
            onClick={handleRegistMusic}
            className={styles.icon}
          />
          <SettingIcon
            width="50"
            height="50"
            className={styles.icon}
            onClick={handleSetting}
          />
        </div>
      </div>

      {/* ????????? ?????? */}
      {/* <RegistMusic open={onRegistMusic} onClose={handleModalClose} /> */}
      <GameList open={onGameList} onClose={handleModalClose} />
      <RegistMusic open={onRegistMusic} onClose={handleModalClose} />
      <Setting open={onSetting} onClose={handleModalClose} />
    </div>
  );
};

export default Room;
