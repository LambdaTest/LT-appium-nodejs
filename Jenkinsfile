pipeline {
    agent any

    tools {
        nodejs "node" 
    }

    environment {
        LT_USERNAME = 'LT_USERNAME'
        LT_ACCESS_KEY = 'LT_ACCESKEY'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Android Tests') {
            steps {
                sh 'node Android.js'
            }
        }

        stage('Run iOS Tests') {
            steps {
                sh 'node IOS.js'
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished. Check LambdaTest dashboard for results.'
        }
    }
}

