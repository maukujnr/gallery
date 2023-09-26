pipeline {
    agent any
    tools { nodejs "nodejs" }

    stages {
        stage('Clone the Right Repository') {
            steps {
                sh 'echo "Let\'s clone my GitHub repository"'
                git 'https://github.com/maukujnr/gallery.git'
            }
        }

        stage('Build') {
                    steps {
                        sh 'echo "Attempt to install npm first"'
                        sh 'npm install -g npm@latest' // Upgrade npm
                        retry(count: 3, fail: true) {
                            // Retry the npm install command up to 3 times on failure
                            sh 'npm install dotenv'
                        }
                        sh 'npm run build'
                    }
                }

        stage('Test') {
            steps {
                sh 'npm --version'
                sh 'npm test'
            }
        }

        stage('Deploy to Render') {
            steps {
                sh 'node --version'
                sh 'echo "Deploying to Render"'
                sh 'node server.js'
            }
        }
    }

    post {
        failure {
            script {
                currentBuild.result = 'FAILURE'
                emailext(
                    subject: "Jenkins Build Failed: \${currentBuild.fullDisplayName}",
                    body: "The Jenkins build of \${currentBuild.fullDisplayName} has failed.",
                    recipientProviders: [brokenBuildSuspects(), unstableBuildSuspects()],
                )
                slackSend(
                    color: '#FF0000', // Red color for failure
                    message: "Jenkins Build Failed: ${currentBuild.fullDisplayName}",
                    channel: '#InfraOps',
                )
            }
        }
    }
}
