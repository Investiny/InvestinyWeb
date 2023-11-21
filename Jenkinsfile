node {
    def mvnHome = tool 'maven-3.9.4'
    def dockerImage
    def dockerImageTag = "devopsexample${env.BUILD_NUMBER}"

    stage('Clone Repo') {
      git 'https://github.com/Investiny/InvestinyWeb.git&#39';
    }

    stage('Build Project') {
      sh "'${mvnHome}/bin/mvn' -B -DskipTests clean package"
    }

    stage('Initialize Docker'){
      def dockerHome = tool 'MyDocker'
      env.PATH = "${dockerHome}/bin:${env.PATH}"
    }

    stage('Build Docker Image') {
      sh "docker -H tcp://192.168.163.128:2375 build -t devopsexample:${env.BUILD_NUMBER} ."
    }

    stage('Deploy Docker Image'){
    echo "Docker Container devopsexample deleting..."
    sh "docker -H tcp://192.168.163.128:2375 rm -f devopsexample"
          echo "Docker Image Tag Name: ${dockerImageTag}"
    sh "docker -H tcp://192.168.163.128:2375 run --name devopsexample -d -p 2222:2222 devopsexample:${env.BUILD_NUMBER}"
    }
}
