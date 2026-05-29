pipeline {
    agent any

    stages {
        stage('Build Docker') {
            steps {
                sh 'docker build -t portfolio .'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                docker stop portfolio || true
                docker rm portfolio || true

                docker run -d \
                --name portfolio \
                -p 80:80 \
                portfolio
                '''
            }
        }
    }
}