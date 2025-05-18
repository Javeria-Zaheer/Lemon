
pipeline {
    agent any

    environment {
        DOCKER_HUB_USERNAME = '78915'
        IMAGE_NAME = 'firebase-auth-app'
        DOCKER_CREDENTIALS_ID = 'Javeria'  
        DOCKER_REGISTRY = 'https://index.docker.io/v1/'
    }

    stages {
        stage('Clone Repo') {
            steps {
                git branch: 'main', url: 'https://github.com/Javeria-Zaheer/Lemon.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage = docker.build("${DOCKER_HUB_USERNAME}/${IMAGE_NAME}:latest")
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    docker.withRegistry(DOCKER_REGISTRY, DOCKER_CREDENTIALS_ID) {
                        dockerImage.push('latest')
                    }
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished.'
        }
    }
}