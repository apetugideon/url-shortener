#!make
MAKEFLAGS += --silent

#Installations
setup:
	cd shortner; eho "setting up frontend"; \
	npm install
	cd backend; echo "setting up backend"; \
	npm install

server:
	cd backend; echo "Starting the backend server"; \
	npm start

frontend:
	cd shortner; eho "Starting the frontend server"; \
	npm start
	
test:
	cd backend; echo "Testing the backend"; \
	npm test
	cd shortner; echo "Testing the frontend"; \
	npm test

frontend_test:
	cd shortner; echo "Testing the frontend"; \
	npm test

backend_test:
	cd backend; echo "Testing the frontend"; \
	npm test

.PHONY: setup
.PHONY: server
.PHONY: frontend
.PHONY: test
.PHONY: frontend_test
.PHONY: backend_test