// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let ToDoList = [
  {taskName: "MarkRegister", taskDate: "2020/08/17", taskStatus: "Done"},
  {taskName: "DoHouseChores", taskDate: "2020/08/17", taskStatus: "ToDo"},
  {taskName: "EnrollUdemy", taskDate: "2020/08/19", taskStatus: "ToDo"},
  {taskName: "BookCodeMeeting", taskDate: "2020/08/20", taskStatus: "Pending"},
  {taskName: "StudyTypescript", taskDate: "2020/08/17", taskStatus: "Pending"},
  {taskName: "Shopping", taskDate: "2020/08/21", taskStatus: "ToDo"},
  {taskName: "StartGym", taskDate: "2020/08/20", taskStatus: "Pending"},
  {taskName: "CookSupper", taskDate: "2020/08/17", taskStatus: "Done"},
  {taskName: "AttendBusinessSeminar", taskDate: "2020/08/18", taskStatus: "ToDo"},
  {taskName: "StudyAngular", taskDate: "2020/08/31", taskStatus: "ToDo"}
];

console.log("Before update: ", ToDoList[4]);
ToDoList[4].taskStatus = "Done";
console.log("After update: ", ToDoList[4]);



