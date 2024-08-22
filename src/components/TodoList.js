import styled from "styled-components";
import "../styles/TodoList.css";
import Calender from "../assets/calendarBtn.png";
import { useState } from "react";
import Right from "../assets/right.png";
import Left from "../assets/left.png";
function MainContents() {
  const [today, setToday] = useState(() => {
    const now = new Date();
    return {
      day: now.getDay(),
      date: now.getDate(),
      month: now.getMonth() + 1,
      year: now.getFullYear(),
    };
  });
  const [calendar, setCalendar] = useState(true);
  const handleDateChange = (newDate) => {
    setToday({
      day: newDate.getDay(),
      date: newDate.getDate(),
      month: newDate.getMonth() + 1,
      year: newDate.getFullYear(),
    });
  };
  const handleShowCalendar = () => {
    console.log("in");
    setCalendar((prevCalendar) => !prevCalendar);
  };
  return (
    <Wrapper>
      <Title>
        <h1>TODOLIST</h1>
      </Title>
      <DateHeader
        year={today.year}
        month={today.month}
        date={today.date}
        handler={handleShowCalendar}
      ></DateHeader>
      {calendar ? (
        <Calendar
          year={today.year}
          month={today.month}
          dateChange={handleDateChange}
        ></Calendar>
      ) : (
        <TodoList></TodoList>
      )}
      <AddList></AddList>
    </Wrapper>
  );
}

function Calendar({ year, month, dateChange }) {
  const daysKorean = ["일", "월", "화", "수", "목", "금", "토"];
  const [currentYear, setCurrentYear] = useState(year);
  const [currentMonth, setCurrentMonth] = useState(month);

  const firstDayOfMonth = new Date(currentYear, currentMonth - 1, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();

  const dates = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    dates.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    dates.push(i);
  }
  const weeks = [];
  for (let i = 0; i < dates.length; i += 7) {
    weeks.push(dates.slice(i, i + 7));
  }
  const handleLeftClick = () => {
    const newMonth = currentMonth === 1 ? 12 : currentMonth - 1;
    const newYear = currentMonth === 1 ? currentYear - 1 : currentYear;
    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
    dateChange(new Date(newYear, newMonth - 1)); // 올바른 함수 호출
  };

  const handleRightClick = () => {
    const newMonth = currentMonth === 12 ? 1 : currentMonth + 1;
    const newYear = currentMonth === 12 ? currentYear + 1 : currentYear;
    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
    dateChange(new Date(newYear, newMonth - 1));
  };
  const handleDateClick = (Idx) => {
    console.log("in");
    console.log(Idx);
    const newDate = Idx.target.innerHTML;
    dateChange(new Date(currentYear, currentMonth - 1, newDate));
  };
  return (
    <CalendarWrapper>
      <CalendarHeader>
        <img src={Left} alt="Left" onClick={handleLeftClick}></img>
        {currentMonth}월
        <img src={Right} alt="Right" onClick={handleRightClick}></img>
      </CalendarHeader>
      <CalendarGrid>
        <div>
          {daysKorean.map((day) => (
            <DayBlock key={day}>{day}</DayBlock>
          ))}
        </div>
        {weeks.map((week, weekIdx) => (
          <div key={weekIdx}>
            {week.map((date, dateIdx) =>
              date == null ? (
                <DateBlock key={dateIdx}></DateBlock>
              ) : new Date(currentYear, currentMonth - 1, date).getDay() ===
                0 ? (
                <DateBlock
                  key={dateIdx}
                  className=" date-red"
                  onClick={handleDateClick}
                >
                  {date}
                </DateBlock>
              ) : new Date(currentYear, currentMonth - 1, date).getDay() ===
                6 ? (
                <DateBlock
                  key={dateIdx}
                  className="date-blue"
                  onClick={handleDateClick}
                >
                  {date}
                </DateBlock>
              ) : (
                <DateBlock key={dateIdx} onClick={handleDateClick}>
                  {date}
                </DateBlock>
              )
            )}
          </div>
        ))}
      </CalendarGrid>
    </CalendarWrapper>
  );
}
const CalendarWrapper = styled.div`
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  height: 450px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CalendarHeader = styled.div`
  margin-top: 10px;
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  > img {
    display: block;
    height: 20px;
    width: 20px;
  }
`;
const DayBlock = styled.div`
  width: 70px;
  height: 30px;
  text-align: center;
  line-height: 30px;
`;
const DateBlock = styled.div`
  width: 70px;
  height: 60px;
  text-align: center;
`;
const CalendarGrid = styled.div`
  display: flex;
  flex-direction: column;
  > div {
    display: flex;
  }
`;
function DateHeader(prop) {
  return (
    <DateWrapper>
      <p>
        {prop.year}.{String(prop.month).padStart(2, "0")}.
        {String(prop.date).padStart(2, "0")}
      </p>
      <img src={Calender} alt="Calendar" onClick={prop.handler}></img>
    </DateWrapper>
  );
}
function TodoList() {
  return (
    <ToDoContainer>
      <ToDo>
        <p>하</p>
        <div></div>
      </ToDo>
      <ToDo>
        <p>하</p>
        <div></div>
      </ToDo>
      <ToDo>
        <p>하</p>
        <div></div>
      </ToDo>
    </ToDoContainer>
  );
}
function AddList() {
  return (
    <AddTodoBtn>
      <button>+ 할 일을 추가하세요</button>
    </AddTodoBtn>
  );
}
const AddTodoBtn = styled.div`
  margin: auto;
  > button {
    width: 450px;
    height: 70px;
    background-color: #d6efd8;
    border: none;
    border-radius: 20px;
    text-align: start;
    padding-left: 30px;
  }
`;
const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  > p {
    display: block;
    font-size: 18px;
    margin-left: 40px;
  }
  > img {
    display: block;
    width: 25px;
    height: 25px;
    margin-left: 15px;
  }
`;
const Wrapper = styled.div`
  width: 40%;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-content: center;
  margin: auto;
`;
const ToDoContainer = styled.div`
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  height: 450px;
  overflow: hidden;
`;
const ToDo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 450px;
  height: 60px;
  margin-top: 20px;
  background-color: #ecffe6;
  border-radius: 10px;
  > p {
    margin-left: 20px;
  }

  line-height: 50px;
  > div {
    width: 30px;
    height: 30px;
    background-color: white;
    margin-right: 20px;
  }
`;
const Title = styled.div`
  height: 80px;
  > h1 {
    margin-top: 30px;
    margin-left: 40px;
  }
`;

export default MainContents;
