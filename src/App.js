import "./styles.css";

function printpeople(codeNation) {
  return (
    <div>
      {codeNation.firstname} {codeNation.lastname}
    </div>
  );
}

function printpronouns(codeNation) {
  return <div>{codeNation.pronoun}</div>;
}

export default function App() {
  let codeNation = [
    {
      firstname: "Victor",
      lastname: "Lymar",
      pronoun: "he/him",
      school: "Launch Darkly",
      gradyear: "1923",
      favcolor: "green"
    },
    {
      firstname: "Traci",
      lastname: "Sibel",
      pronoun: "she/her",
      school: "Launch Darkly",
      gradyear: "2022",
      favcolor: "purple"
    },
    {
      firstname: "Ida",
      lastname: "Voong",
      pronoun: "she/her",
      school: "Oakland Technical High School",
      gradyear: "2022",
      favcolor: "blue"
    },
    {
      firstname: "Ana",
      lastname: "Rivera",
      pronoun: "she/her",
      school: "CSU East Bay",
      gradyear: "2051",
      favcolor: "green"
    },
    {
      firstname: "Aidan",
      lastname: "Fuller",
      pronoun: "he/him",
      school: "Oakland Technical High School",
      gradyear: "2023",
      favcolor: "red"
    },
    {
      firstname: "Kyle",
      lastname: "Wan",
      pronoun: "he/him",
      school: "Oakland Technical High School",
      gradyear: "2023",
      favcolor: "yeah"
    },
    {
      firstname: "Enjun",
      lastname: "Li",
      pronoun: "he/him",
      school: "John O' Connell High School",
      gradyear: "2022",
      favcolor: "black"
    },
    {
      firstname: "Luis",
      lastname: "Garcia",
      pronoun: "he/him",
      school: "CSU East Bay",
      gradyear: "2025",
      favcolor: "black"
    },
    {
      firstname: "Amanda",
      lastname: "Yu",
      pronoun: "she/her",
      school: "Oakland Technical High School",
      gradyear: "2022",
      favcolor: "blue"
    },
    {
      firstname: "Yifei",
      lastname: "Du",
      pronoun: "he/him",
      school: "Balboa High School",
      gradyear: "2022",
      favcolor: "black"
    },
    {
      firstname: "Hector",
      lastname: "Del Valle",
      pronoun: "he/him",
      school: "John O' Connell High School",
      gradyear: "2022",
      favcolor: "gray"
    },
    {
      firstname: "HaoYu",
      lastname: "Del Lin",
      pronoun: "he/him",
      school: "Oakland Technical High School",
      gradyear: "2023",
      favcolor: "red"
    }
  ];

  return (
    <div className="App">
      <h1>Hello Team</h1>
      <h2>Start editing to see some magic happen!</h2>

      <div class="parent">
        <div class="columns">{codeNation.map(printpeople)}</div>
        <div class="columns">{codeNation.map(printpronouns)}</div>
        <div class="columns"></div>
      </div>
    </div>
  );
}
