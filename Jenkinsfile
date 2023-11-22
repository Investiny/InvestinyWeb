
pipeline {
    agent any
    environment {
        DOCKER_PATH = "C:\\Program Files\\Docker\\cli-plugins"
        PATH = "${DOCKER_PATH}:${PATH}"
        // DOCKERHUB_CREDENTIALS = credentials('DockerHub')
        NODEJS_PATH = "C:\\Program Files (x86)\\nodejs"
    }
    stages {
        stage('Install Node.js and npm') {
            steps {
                script {
                    def nodejs = tool name: 'investinyweb', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
                    env.PATH = "${nodejs}/bin:${env.PATH}"
                }
            }
        }

        stage('Checkout') {
            steps {
                script {
                    checkout scm
                }
            }
        }

        stage('Build & rename Docker Image') {
            steps {
                script {

                    bat "docker build -t investinyweb:${BUILD_ID} investinyweb/"
                    bat "docker tag investinyweb:${BUILD_ID} arijchetoui1/investinyweb-v1:${BUILD_ID}"
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {

                    bat "docker run -d -p 8083:80 --name arijchetoui1/investinyweb-v1${BUILD_ID} arijchetoui1/investinyweb-v1:${BUILD_ID}"
                }
            }
        }
    }
}





