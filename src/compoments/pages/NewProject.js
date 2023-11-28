
import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'

function NewProject() {
    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projetos</h1>
            <p>Crie seu projeto para de depois adicionar os serviços</p>
            <ProjectForm btnText="Criar Projeto"/>

        </div>

    )
}

export default NewProject