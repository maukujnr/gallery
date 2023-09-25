/* Line  pipeline { } below declares the beginning of our pipeline. */
pipeline {
    /*The “agent” section configures on which nodes the pipeline can be run */
    agent any /*Specifying “agent any” means that Jenkins will run the job on any of the available nodes.*/
    stages { 
        stage('clone the right repository') {
            steps {
               sh 'echo "Lets clone our github repository"'
               git 'https://github.com/maukujnr/gallery.git'

            }
        }
        stage('build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('test') {
            steps {
                sh 'npm node test'
            }
        }
        stage('deploy') {
            steps {
                sh 'node --version'
            }
        }
    }
}