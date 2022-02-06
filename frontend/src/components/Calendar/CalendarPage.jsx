import React, { useState, useEffect, useRef } from "react";
import styles from "./CalendarPage.module.css";
import axios from "axios";
import moment from "moment";
import buildCalendar from "./buildCalendar";
import ConferenceList from "./ConferenceList";
import ConferenceDetail from "./ConferenceDetail3";
import UserApi from "../../api/UserApi.js";
// import ConferenceDetail from "./ConferenceDetail2";
import { ReactComponent as CalendarIcon } from "../../assets/icons/calendar.svg";
import { ReactComponent as PartyIcon } from "../../assets/icons/party.svg";
import beerbottle from "../../assets/icons/beerbottle.png";
import { Dropdown } from "bootstrap";
// import Modal from 'react-modal'

const CalendarPage = () => {
  //calendar
  const [calendar, setCalendar] = useState([]);
  //today
  const [value, setValue] = useState(moment());
  //set cliked date
  const [item, setItem] = useState({
    month: "",
    day: "",
  });
  //
  const [month, setMonth] = useState();
  //startDate
  const [startMonth, setStartMonth] = useState(moment());
  //endDate
  const [endMonth, setEndMonth] = useState(moment());
  //conference list
  const [party, setParty] = useState({
    conferences: [
    ],
  });

  const [partyList, setPartyList] = useState({
    conferencesId: [1, 2, 3],
  });

  const [listModalOpen, setListModalOpen] = useState(false);
  const [detailModalOpen, setDetailModalOpen] = useState(false);

  const {getConferenceDate, getConferenceList} = UserApi;
  const [isActive, setIsActive] = useState(false);

  const dropDown = useRef([]);
  const partyIconBtn = useRef([]);

  const getDetailModalOpen = (status) => {
    setDetailModalOpen(status);
  };


  const handleCloseList = (event) => {
    if(event.target.nodeName!=="BUTTON") {
      for(let i=0; i<partyIconBtn.current.length; i++) {
        dropDown.current[i].style.visibility='hidden';
      }
    }
  }

  useEffect( async () => {
    setCalendar(buildCalendar(value));
    setStartMonth(value.clone().startOf("month").subtract(1, "day"));
    setEndMonth(value.clone().endOf("month"));

    const result = await getConferenceDate(value.format("M")*1);
    // const partyListData = result.data.partyList;

    //받아온 party data state에 저장
    // console.log(result);
    handleParyDataList(result.data.conferencesDateList);

  }, [value]);



  const handleParyDataList = (data) => {
    console.log(data);
    const arr = [];
    for(let i=0; i<data.length; i++) {
      let year = data[i].year;
      let month = data[i].month;
      let day = data[i].day;
      let date = year+"-"+month+"-"+day;
      date = new Date(date);
      let res = moment(date).format("YYYY-MM-DD");
      console.log(res);
      arr.push(res);
    }

    //중복제거
    let conferences = [];
    arr.forEach((element) => {
      if (!conferences.includes(element)) {
        conferences.push(element);
      }
    });
    
    // console.log(conferences);
    // console.log(party);
    setParty({
      conferences
    });
  }

  useEffect(() => {
    console.log(item);
  }, [item]);

  useEffect(()=> {
    console.log(party)
  },[party])

  useEffect(() => {}, [detailModalOpen]);

  useEffect(() => {
    document.addEventListener('click', handleCloseList);

    return () => {
      document.removeEventListener('click', handleCloseList);
    };
  });

  function dayStyles(day) {
    let yoil = day.day();
    if (day.isAfter(startMonth) && day.isBefore(endMonth)) {
      if (yoil === 0) return "sunday";
      if (yoil === 6) return "saturday";
      if (yoil > 0 && yoil) return "weekday";
    } else {
      return "none";
    }
  }

  const currentMonth = () => {
    return value.format("M") + "월";
  };

  const handleClick = async (event) => {
    setUnvisible(event);
    const data = event.nativeEvent.path[2].outerText;
    const dataArr = data.split("\n");
    setItem({
      month: value.format("M"),
      day: dataArr[0],
    });
    //해당 날짜에 진행한 파티목록 가져오는 api호출
    const result = await getConferenceList(item.day);
    console.log(result);
  };

  function showList(target) {
    if(target.visibility==='visible') {
      target.visibility='hidden';
      target.opacity='0';
      target.transform='translateY(0)';
    }else {
      target.visibility='visible';
      target.opacity='1';
      target.transform='translateY(-20px)';
    }
  }
  
  function setUnvisible(event) {
    for(let i=0; i<dropDown.current.length; i++) {
      dropDown.current[i].style.visibility='hidden';
    }
    showList(event.target.nextElementSibling.style);
  }
  
  const calcYoil = (day) => {
    let yoil = dayStyles(day);
    let date = day.format("D").toString();
    return <div className={styles[yoil]}>{date}</div>;
  };

  const listStyle = {visibility:"hidden"};

  const checkParty = (day) => {
    for (let i = 0; i < party.conferences.length; i++) {
      if (day.format("YYYY-MM-DD") === party.conferences[i]) {
        return (
          <>
            <div className={styles.container}>
            <button className={styles.partyicon} onClick={handleClick} ref={el => (partyIconBtn.current[i] = el)}></button>
                <div className={isActive ? `${styles.partyList} ${styles.open}` : styles.partyList} style={listStyle}  ref={el => (dropDown.current[i] = el)}>     
                <p className={styles.listTitle}>파티 목록</p>
                  <ul>
                    <li><button className={styles.partyData} onClick={openDetailModal}>{partyList.conferencesId[0]}</button></li>
                    <li><button className={styles.partyData} onClick={openDetailModal}>{partyList.conferencesId[1]}</button></li>
                    <li><button className={styles.partyData} onClick={openDetailModal}>{partyList.conferencesId[2]}</button></li>
                  </ul>
                </div>
              </div>
          </>
        );
      }
    }
  };

  const openListModal = () => {
    setListModalOpen(true);
  };

  const openDetailModal = () => {
    console.log(detailModalOpen);
    setDetailModalOpen(true);
  };

  const closeListModal = () => {
    setListModalOpen(false);
  };

  const closeDetailModal = () => {
    setDetailModalOpen(false);
  };

  return (
    <>
      <div className={styles.calendarFormBorder}>
        <div className={styles.calendarForm}>
          <ConferenceList
            open={listModalOpen}
            close={closeListModal}
            partyList={partyList}
            getDetailModalOpen={getDetailModalOpen}
          />
          <ConferenceDetail
            open={detailModalOpen}
            close={closeDetailModal}
            date={item}
          ></ConferenceDetail>
          <div className={styles.calendarHeader}>
            <div className={styles.calendarTitle}>술자리 기록</div>
            <div className={styles.calendarTop}>
              <div className={styles.month}>{currentMonth()}</div>
              <CalendarIcon className={styles.icon} />
            </div>
          </div>
          <div className={styles.calendarBodyBorder}>
            <div className={styles.calendarBody}>
              {calendar.map((week, key) => (
                <div className={styles.week}>
                  {week.map((day) => (
                    <div className={styles.day}>
                      {calcYoil(day)}
                      {checkParty(day)}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalendarPage;
