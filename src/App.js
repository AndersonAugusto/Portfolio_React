import { useState, useEffect, useRef } from "react"
import emailjs from "@emailjs/browser"
import { Link } from "react-router-dom"
import "./App.scss"
import Navbar from "./layouts/navbar/navbar"

//images
import foguete from "./assets/img/rocket.png"
import fogo from "./assets/img/fire.png"
import astronauta from "./assets/img/astronaut.png"
import alienigena from "./assets/img/alien.webp"
import distintivo from "./assets/img/trophy.png"

import github from "./assets/img/github.png"
import linkedin from "./assets/img/linkedin.png"
import whatsapp from "./assets/img/whatsapp.png"

const Skills = [
  {
    name: "HTML",
    percent: 100,
    type: "Front-end",
    image: require("./assets/img/html.png"),
  },
  {
    name: "SCSS",
    percent: 80,
    type: "Front-end",
    image: require("./assets/img/sass.png"),
  },
  {
    name: "Javascript",
    percent: 90,
    type: "Front-end",
    image: require("./assets/img/js.png"),
  },
  {
    name: "Typescript",
    percent: 35,
    type: "Front-end",
    image: require("./assets/img/typescript.png"),
  },
  {
    name: "NodeJs",
    percent: 60,
    type: "Back-end",
    image: require("./assets/img/node.png"),
  },
  {
    name: "SQL server",
    percent: 70,
    type: "Others",
    image: require("./assets/img/sql-server.png"),
  },
  {
    name: "Git",
    percent: 70,
    type: "Others",
    image: require("./assets/img/githubSkill.png"),
  },
  {
    name: "Figma",
    percent: 80,
    type: "Others",
    image: require("./assets/img/figma.png"),
  },
  {
    name: "Bootstrap",
    percent: 100,
    type: "Front-end",
    image: require("./assets/img/bootstrap.png"),
  },
  {
    name: "React",
    percent: 60,
    type: "Front-end",
    image: require("./assets/img/atom.png"),
  },
  {
    name: "MongoDB",
    percent: 60,
    type: "Others",
    image: require("./assets/img/mongodb.png"),
  },
  {
    name: "Express",
    percent: 70,
    type: "Back-end",
    image: require("./assets/img/express33.png"),
  },
  {
    name: "NestJs",
    percent: 50,
    type: "Back-end",
    image: require("./assets/img/nest.png"),
  },
  {
    name: "Angular 2",
    percent: 20,
    type: "Front-end",
    image: require("./assets/img/AngularJS.png"),
  },
  {
    name: "English",
    percent: 40,
    type: "Others",
    image: require("./assets/img/english.png"),
  },
]

const Projects = [
  {
    image: require("./assets/img/forca.png"),
    title: "Hangman Game",
    link: "/hangmanGame",
  },
  {
    image: require("./assets/img/jogo-da-velha.png"),
    title: "Hash Game",
    link: "/hashGame",
  },
  {
    image: require("./assets/img/logoMercadao.png"),
    title: "Marketplace",
    link: "/marketplace",
  },
  {
    image: require("./assets/img/buttonsImage.png"),
    title: "Buttons",
    link: "/buttons",
  },
]

function App() {
  const [active, setActive] = useState("All")
  const [finishedTimeout, setFinishedTimeout] = useState(true)
  const [skills, setSkills] = useState(Skills)
  const [year, setYear] = useState([])
  const [loading, setLoading] = useState(false)
  const form = useRef()

  useEffect(() => {
    const currentDate = new Date()
    const Year = currentDate.getUTCFullYear()
    setYear(Year)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setFinishedTimeout(false)
    }, 8000)
    return () => clearTimeout(timer)
  }, [])

  const RenderSkills = () => {
    return skills.map((skill, index) => (
      <div key={index} className="box-skill">
        {skill.percent === 100 && (
          <div className="seloSkill">
            <img src={distintivo} alt="trofeu" />
          </div>
        )}

        <img src={skill.image} alt="icon" />
        <div className="size-Progressbar">
          <p>{skill.name}</p>
          <div
            className="progressBar"
            style={{
              background: `linear-gradient(90deg, rgba(90, 255, 77, 1) ${skill.percent}%, rgba(60, 60, 60, 1) 0%)`,
            }}
          >
            {" "}
          </div>
        </div>
      </div>
    ))
  }

  const RenderProjects = () => {
    return Projects.map((project, index) => (
      <Link
        // to={project.link}
        key={index}
        className="box-project disabled"
      >
        <div key={index} className="box-elements-projects disabled">
          <img src={project.image} className="disabled" alt="icon" />
          <p>{project.title}</p>
        </div>
      </Link>
    ))
  }

  const handleActive = (e) => {
    if (e.target.value === "All") {
      setSkills([...Skills])
      setActive(e.target.value)
      return
    }

    let newArr = Skills.filter((skill) => skill.type === e.target.value)

    setSkills([...newArr])
    setActive(e.target.value)
  }

  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .sendForm(
        "service_ftqwwl7",
        "template_mt2r5ca",
        form.current,
        "yrJ7LoiyBxJZSI8fH"
      )
      .then(
        (result) => {
          setLoading(false)
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <main>
      {loading && (
        <>
          <div className="loading">
            <span></span>
          </div>
        </>
      )}
      <section className="container-top">
        <Navbar />
        <div className="caixa-foguete">
          <div className="foguete">
            <img className="carcaca" src={foguete} alt="foguete" />
            {finishedTimeout && <img className="fogo" src={fogo} alt="icon" />}
          </div>
        </div>
        <div className="box-astronauta">
          {!finishedTimeout && (
            <>
              <p className="text-astronauta"> Welcome to my portfolio! </p>
              <img className="astronauta" src={astronauta} alt="icon" />
            </>
          )}
        </div>
      </section>
      <div id="skills" className="title">
        <h3>Skills</h3>
      </div>
      <section className="container skills-box">
        <div className="name-skills">
          <div>
            <div className="box-buttons">
              <input
                type="button"
                onMouseOver={handleActive}
                value="All"
                className={active === "All" ? "buttonActive" : "buttonInative"}
              />
              <input
                type="button"
                onMouseOver={handleActive}
                value="Front-end"
                className={
                  active === "Front-end" ? "buttonActive" : "buttonInative"
                }
              />
              <input
                type="button"
                onMouseOver={handleActive}
                value="Back-end"
                className={
                  active === "Back-end" ? "buttonActive" : "buttonInative"
                }
              />
              <input
                type="button"
                onMouseOver={handleActive}
                value="Others"
                className={
                  active === "Others" ? "buttonActive" : "buttonInative"
                }
              />
            </div>
          </div>

          <div className="container-skills">
            <RenderSkills />
          </div>
        </div>
      </section>
      <div className="title">
        <h3 id="projects">Projects (Building...)</h3>
      </div>
      <section className="container projects-box ">
        <div className="project-box">
          <RenderProjects />
        </div>
      </section>

      <section id="AboutMe" className="container box-aboutMe ">
        <div className="aboutMe-box">
          <div className="jsonMe">
            <div>&#123;</div>
            <p className="ml-1">
              &quot;firstName&quot; :
              <span className="value"> &quot; Anderson &quot; </span>
            </p>
            <p className="ml-1">
              &quot; lastName &quot; :
              <span className="value"> &quot; Ferrari &quot; </span>
            </p>
            <p className="ml-1">
              &quot; age &quot; : <span className="number">28</span>
            </p>
            <p className="ml-1">
              &quot; state &quot; :
              <span className="value"> &quot; São Paulo &quot; </span>
            </p>
            <p className="ml-1">
              &quot; currentCity &quot; :{" "}
              <span className="value"> &quot; Campinas &quot; </span>
            </p>

            <p className="ml-1">
              &quot; info &quot;:
              <span className="value">
                &quot; I am Anderson, a Full Stack Developer. &quot;
              </span>
            </p>
            <div className="ml-2">contact : &#123; </div>
            <p className="ml-4">
              &quot; email &quot; :
              <span className="value">
                &quot; andersonfatec2018@gmail.com &quot;
              </span>
            </p>
            <p className="ml-4">
              &quot; phone &quot; :{" "}
              <span className="value"> &quot; +55 19 986018775 &quot; </span>
            </p>

            <div className="ml-2">&#125;</div>
            <div className="ml-2">createdAt : &#123; </div>
            <p className="ml-4">
              &quot; month &quot; :
              <span className="value">&quot; December &quot;</span>
            </p>
            <p className="ml-4">
              &quot; Day &quot; :{" "}
              <span className="value"> &quot; 17 &quot; </span>
            </p>
            <p className="ml-4">
              &quot; Year &quot; :{" "}
              <span className="value"> &quot; 2022 &quot; </span>
            </p>

            <div className="ml-2">&#125;</div>
            <div>&#125;</div>
          </div>
          <div className="description">
            <div className="aboutMe-photo">
              <h3>About me</h3>
              <p>I am Anderson, a Full Stack Developer</p>
              <p>
                I have developed a wide range of projects for different market
                niches while working at a company specialized in creating
                digital solutions
              </p>
              <p>
                These projects were built using technologies like NestJS,
                MongoDB, and NextJS, ensuring robust and scalable solutions
              </p>
              <p>
                When I am not coding, I am playing games , watching series or
                learning more about technology.
              </p>
            </div>
            <div className="alienigena">
              <img src={alienigena} alt="icon" />
            </div>
          </div>
        </div>
      </section>
      <div className="title">
        <h3 id="Contact">Contact me</h3>
      </div>
      <section className="container box-contact-me">
        <form ref={form} onSubmit={sendEmail}>
          <input placeholder="Name" name="Nome" autoComplete="off" />
          <input
            placeholder="Titulo"
            name="Título"
            id="title"
            className="amongInput"
            autoComplete="off"
          />
          <textarea
            placeholder="Type your message..."
            name="Deixe uma mensagem"
            id="message"
          />
          <div>
            <button>SEND</button>
          </div>
        </form>
        <div className="socialMedia">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/andersonferrari96/"
            rel="noreferrer"
          >
            <div className="box-socialMedia">
              <img src={linkedin} alt="icon" />
              <span> LinkedIn </span>
            </div>
          </a>
          <a
            target="_blank"
            href="https://github.com/AndersonAugusto"
            rel="noreferrer"
          >
            <div className="box-socialMedia">
              <img src={github} alt="icon" />
              <span> Github </span>
            </div>
          </a>
          <a href="https://web.whatsapp.com/send?phone=5519986018775">
            <div className="box-socialMedia">
              <img src={whatsapp} alt="icon" />
              <span> Whatsapp </span>
            </div>
          </a>
        </div>
      </section>
      <section className="copy-right ">
        <p> {year} - Todos os direitos reservados </p>
      </section>
    </main>
  )
}

export default App
