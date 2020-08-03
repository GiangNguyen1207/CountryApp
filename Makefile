CONTAINER_PORT=3000
PORT=3003
DOCKER_IMAGE=reactimage

.phony: image 
image:
	docker builder build -t ${DOCKER_IMAGE} ${CURDIR}

.phony: server
server: image
	docker container run -it --rm -p ${PORT}:${CONTAINER_PORT} ${DOCKER_IMAGE}