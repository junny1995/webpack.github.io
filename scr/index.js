import List from "./List";
import "./style.css";

const users = [
  {
    id: 1,
    name: "codestates1",
  },
  {
    id: 2,
    name: "codestates2",
  },
  {
    id: 3,
    name: "codestates3",
  },
  {
    id: 4,
    name: "codestates4",
  },
  {
    id: 5,
    name: "codestates5",
  },
  {
    id: 6,
    name: "codestates6",
  },
  {
    id: 7,
    name: "codestates7",
  },
  {
    id: 8,
    name: "codestates8",
  },
  {
    id: 9,
    name: "codestates9",
  },
  {
    id: 10,
    name: "codestates10",
  },
]

function hello(name) {
  return name;
}

const name = hello("<h1>CODESTATES 명단</h1>")

document.getElementById('root').innerHTML = name;
document.getElementById('root').appendChild(List({userList: users}))
