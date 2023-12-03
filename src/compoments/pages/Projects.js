import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Message from "../layout/Message";
import styles from "./Projects.module.css";
import Container from "../layout/Container";
import Loading from '../layout/Loading';
import LinkButton from '../layout/LinkButton';
import ProjectCard from '../project/ProjectCard';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [removeLoading, setremoveLoading] = useState(false);
  const [projectMessage, setprojectMessage] = useState('');

  const location = useLocation();
  let message = '';

  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:5000/projects', {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data);
          setProjects(data);
          setremoveLoading(true)
        })
        .catch((err) => console.log(err));

    }, 300)
  }, []);

  function removeProjet(id) {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
      .then((resp) => resp.json())
      .then((data) => { 
        setProjects(projects.filter((project) => project.id !== id))
        setprojectMessage("Projeto removido com sucesso!")
      })
      .catch((err) => console.log(err))

  }

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/newproject" text="Criar Projeto" />


        {message && <Message type="success" msg={message} />}

      </div>



      <Container pageClass="start">

        {projects.length > 0 && projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            name={project.name}
            budget={project.budget}
            category={project.category ? project.category.name : 'Sem Categoria'}
            handleRemove={removeProjet}
          />
        ))}
        {!removeLoading && <Loading />}
        {removeLoading && projects.length === 0 && (
          <p>Não há projetos cadastrados!</p>
        )}

      </Container>
    </div>
  );
}

export default Projects;
