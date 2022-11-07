const zero = () => {
  const temp = document.getElementsByClassName("display")[0].textContent;
  document.getElementsByClassName("display")[0].innerText = temp + "0";
};
const one = () => {
  const temp = document.getElementsByClassName("display")[0].textContent;
  document.getElementsByClassName("display")[0].innerText = temp + "1";
};
const two = () => {
  const temp = document.getElementsByClassName("display")[0].textContent;
  document.getElementsByClassName("display")[0].innerText = temp + "2";
};
const three = () => {
  const temp = document.getElementsByClassName("display")[0].textContent;
  document.getElementsByClassName("display")[0].innerText = temp + "3";
};
const four = () => {
  const temp = document.getElementsByClassName("display")[0].textContent;
  document.getElementsByClassName("display")[0].innerText = temp + "4";
};
const five = () => {
  const temp = document.getElementsByClassName("display")[0].textContent;
  document.getElementsByClassName("display")[0].innerText = temp + "5";
};
const six = () => {
  const temp = document.getElementsByClassName("display")[0].textContent;
  document.getElementsByClassName("display")[0].innerText = temp + "6";
};
const seven = () => {
  const temp = document.getElementsByClassName("display")[0].textContent;
  document.getElementsByClassName("display")[0].innerText = temp + "7";
};
const eight = () => {
  const temp = document.getElementsByClassName("display")[0].textContent;
  document.getElementsByClassName("display")[0].innerText = temp + "8";
};
const nine = () => {
  const temp = document.getElementsByClassName("display")[0].textContent;
  document.getElementsByClassName("display")[0].innerText = temp + "9";
};
//operators

const plus = () => {
  const temp = document.getElementsByClassName("display")[0].textContent;
  document.getElementsByClassName("display")[0].innerText = temp + "+";
};
const minus = () => {
  const temp = document.getElementsByClassName("display")[0].textContent;
  document.getElementsByClassName("display")[0].innerText = temp + "-";
};
const multiply = () => {
  const temp = document.getElementsByClassName("display")[0].textContent;
  document.getElementsByClassName("display")[0].innerText = temp + "*";
};
const division = () => {
  const temp = document.getElementsByClassName("display")[0].textContent;
  document.getElementsByClassName("display")[0].innerText = temp + "/";
};
const cl = () => {
  document.getElementsByClassName("display")[0].innerText = "";
  document.getElementsByClassName("temp-display")[0].innerText = "";
};

const mod = () => {
  const temp = document.getElementsByClassName("display")[0].textContent;
  document.getElementsByClassName("display")[0].innerText = temp + "%";
};
const del = () => {
  const temp = document.getElementsByClassName("display")[0].textContent;
  document.getElementsByClassName("display")[0].innerText = temp.slice(
    0,
    temp.length - 1
  );
};
const point = () => {
  const temp = document.getElementsByClassName("display")[0].textContent;
  document.getElementsByClassName("display")[0].innerText = temp + ".";
};

const equal = () => {
  const temp = document.getElementsByClassName("display")[0].textContent;
  if (temp !== "") {
    document.getElementsByClassName("temp-display")[0].innerText = temp;
    const ans = eval(temp);
    document.getElementsByClassName("display")[0].innerText = ans;
  } else {
    document.getElementsByClassName("display")[0].innerText = "";
  }
};

// theme @

const changeTheme = () => {
  const numbers = document.getElementsByClassName("no");
  for (const element of numbers) {
    element.classList.toggle("theme-green");
  }

  const operators = document.getElementsByClassName("op");
  for (const element of operators) {
    element.classList.toggle("theme-white");
  }
};

// date and time
const DAY = new Map();
DAY.set(0, "Sunday");
DAY.set(1, "Monday");
DAY.set(2, "Tuesday");
DAY.set(3, "Wednesday");
DAY.set(4, "Thursday");
DAY.set(5, "Friday");
DAY.set(6, "Saturday");

const date = new Date();
const day = date.getDay();
document.getElementsByClassName("myDay")[0].innerText = DAY.get(day);

const MONTH = new Map();
MONTH.set(0, "Jan");
MONTH.set(1, "Feb");
MONTH.set(2, "Mar");
MONTH.set(3, "Apr");
MONTH.set(4, "May");
MONTH.set(5, "Jun");
MONTH.set(6, "July");
MONTH.set(7, "Aug");
MONTH.set(8, "Sep");
MONTH.set(9, "Oct");
MONTH.set(10, "Nov");
MONTH.set(11, "Dec");

const Day = date.getDate();
const month = date.getMonth();

const currentDate = `${Day}-${MONTH.get(month)}`;
document.getElementsByClassName("myDate")[0].innerText = currentDate;
