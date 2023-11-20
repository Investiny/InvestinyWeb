pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'investinyweb-version1'
    }

    stages {
        stage('Build') {
            steps {
                script {
                    // Installe Node.js et npm
                    node('node') {
                        checkout scm
                        sh 'npm install'
                        sh 'npm run build'
                    }
                }
            }
        }

        stage('Docker Build') {
            steps {
                script {
                    // Construit l'image Docker
                    sh 'docker build -t $DOCKER_IMAGE .'
                }
            }
        }


        stage('Deploy') {
            steps {
                script {
                    // Déployer l'application (exécuter le conteneur Docker)
                    sh 'docker run -p 8082:80 $DOCKER_IMAGE'
                }
            }
        }
    }
}
