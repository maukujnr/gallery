/* Requires the Docker Pipeline plugin */
pipeline {
    agent any 
    stages {
        stage('clone') {
            steps {
               sh git clone https://github.com/maukujnr/gallery.git
            }
        }
        stage('build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('test') {
            steps {
                sh 'npm run test'
            }
        }
        stage('deploy') {
            steps {
                sh 'node --version'
            }
        }
    }
}