terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "3.0.2"
    }
  }
}

provider "docker" {}

resource "docker_image" "telecom_app" {
  name = "ishajoshi07/telecom-app"
}

resource "docker_container" "telecom_container" {
  name  = "telecom-container"
  image = docker_image.telecom_app.image_id

  ports {
  internal = 5000
  external = 8081
}
}