/* Line  pipeline { } below declares the beginning of our pipeline. */
pipeline {
    /*The “agent” section configures on which nodes the pipeline can be run */
    agent any /*Specifying “agent any” means that Jenkins will run the job on any of the available nodes.*/
    tools {nodejs "nodejs"}
    stages { 
        stage('clone the right repository') {
            steps {
               sh 'echo "Let\'s clone my GitHub repository"'
               git 'https://github.com/maukujnr/gallery.git'

            }
        }
        stage('build') {
            steps {
                sh 'echo "Attempt to install npm first"'
                sh 'npm install -g npm@latest'
                sh 'npm install dotenv'
                sh 'npm run build'
            }
        }
        stage('test') {
            steps {
                sh 'npm --version'
                sh 'npm test'
            }
        }
        stage('deploy to Render') {
            steps {
                sh 'node --version'
                sh 'echo "Deploying to Render"'
                sh 'node server.js' 
            }
        }
    }
}