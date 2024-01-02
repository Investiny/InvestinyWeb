
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
                    def nodejs = tool name: 'NODEJS', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
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

                    bat "docker build -t investinyweb:${BUILD_ID} ."
                    bat "docker tag investinyweb:${BUILD_ID} arijchetoui1/investinyweb:${BUILD_ID}"
                }
            }
        }

      stage('Run Docker Container') {
                steps {
                        script {
                                def newContainerName = "investinycontainer_${BUILD_ID}"

                                 bat "docker run -d -p 8000:80 --name ${newContainerName} arijchetoui1/investinyweb:${BUILD_ID}"
        }
    }
}

    }
}





