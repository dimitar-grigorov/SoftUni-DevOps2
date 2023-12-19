# SoftUni-DevOps2

```bash
# npm install - installs the dependencies from package.json
# npm ci - installs the dependencies from package-lock.json
```

## 03. Git Branching and Pull Requests - Lab

```bash
# Task 1 - Using Git Commands
cd "$(git rev-parse --show-toplevel)\03-Git-Branching-and-Pull-Requests\01-Using-Git-Commands"
# Add file demo.txt
git add .
git commit -m "Add demo.txt"
# Push the changes to the remote repo
git push
```

```bash
# Task 2 - Git Conflict Scenario
cd "$(git rev-parse --show-toplevel)\03-Git-Branching-and-Pull-Requests\02-Git-Conflict-Scenario"
# Add test-conflict.txt
git add .
git commit -m "Add test-conflict.txt with initial state"
# Push the changes to the remote repo
git push
# Change the file with another user and push the changes
# change the file with the current user
echo "Changes from User A" > .\test-conflict.txt
git add test-conflict.txt
git push origin main
git pull origin main
# Resolve the conflict
git add test-conflict.txt
```

```bash
# Task 3 - Git Branches
cd "$(git rev-parse --show-toplevel)\03-Git-Branching-and-Pull-Requests\03-Git-Branches"
# Step 1 - Create and Clone Repo - done
# Step 2 - Add and Commit Files
echo "Hello World" > index.html
git add .
git commit -m "Add index.html"
# Step 3 - Push to GitHub
git push
# Step 4 - Create Branches
git branch add-title
git checkout add-title
echo "<title>My Website</title>" >> index.html
# Step 5 - Commit New Branch Changes
git add .
git commit -m "Add title to index.html"
# Step 6 - Add Upstream and Push Changes
git push --set-upstream origin add-title
# Step 7 - Merge Branches
git checkout main
git merge add-title
git push
# Step 8 - Delete Branch
git branch -d add-title
git push origin --delete add-title
```

```bash
# Task 4 - Creating a Pull Request
cd "$(git rev-parse --show-toplevel)\03-Git-Branching-and-Pull-Requests\04-Creating-a-Pull-Request"
echo "Hello World" > index.html
git add .
git commit -m "Add index.html"
git push
# Step 1 - Create Branch, Make Changes and Push
git branch add-form
git checkout add-form
echo "<form><input type='text' /></form>" >> index.html
git add .
git commit -m "Add form to index.html"
git push --set-upstream origin add-form
# Step 2 - Open a Pull Request in GitHub
```

## 04. Branching-and-Pull-Requests

```bash
# Task 1 - The "Towns" Project
cd "$(git rev-parse --show-toplevel)\04-Branching-and-Pull-Requests\01-Towns"
# Step 1 - Role Assignment - done
# Step 2 - Fork the Repository - done
# Step 3 - Invite the Team Members - done
# Step 4 - Team Members Should Clone the Project
# In separate terminals via docker
docker run -it grigorov89/alpine-git:latest sh -c "git clone https://github.com/dimitar-grigorov/SoftUni-DevOps2.git && sh"
# Generate SSH key and add it to GitHub
# ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
# Step 5 - Edit the Project Description - done
```

```bash
# Task 2 - Hotel Reservations
# Member 1 - Questioneer (PrettyPeace)
git branch search-form
git checkout search-form
# Make the changes
git commit -a -m "Implemented Search form functionality"
git push # error
git push --set-upstream origin search-form
# Add pull request
# Member 2 - Offerer (D-Grigorov)
git branch our-offers-form
git checkout our-offers-form
# Make the changes
git commit -a -m "Implemented Our Offers form functionality"
git push --set-upstream origin our-offers-form
# Add pull request
# Member 3 - Admin (dimitar-grigorov)
git branch guest-details-form
git checkout guest-details-form
# Make the changes
git commit -a -m "Implemented Guest Details form functionality"
git push --set-upstream origin guest-details-form
# Add pull request
# Member 4 - Verifier (Coder-BG)
git branch confirm-reservation-form
git checkout confirm-reservation-form
# Make the changes
git commit -a -m "Implemented Confirm Reservation form functionality"
git push --set-upstream origin confirm-reservation-form
# Delete the branches
# Pull all changes
```

## 05. Automated-Testing

```powershell
cd "$(git rev-parse --show-toplevel)\05-Automated-Testing\"
# Install Playwright
npm install -D @playwright/test
# Or install dev dependencies
npm install
# Write tests
# In seperate terminal run the app
npm start
# Run the tests
npx playwright test

```

## 06-CI-CD-in-Git-Hub-Actions

```powershell
# Task 1 - Student Registry
cd "$(git rev-parse --show-toplevel)\06-CI-CD-in-Git-Hub-Actions\01-StudentRegistry"
# Install dependencies
npm install
# Run the app
npm start
# Run the tests
npm test
# GitHub workflows located in .github/workflows
# Test the workflow located in .github/workflows/pipline.yml
```

```powershell
# Task 2 - Student Registry
# Register to render.com
# Write down API key and SERVICE_ID
# Create new secret in GitHub - MY_RENDER_API_KEY, MY_RENDER_SERVICE_ID
# Create new branch - add-deploy-job, push it and create pull request
# Merge the pull request, delete the branch
# Check the workflow
```

```powershell
# Task 3 - Library Catalog
# The solution is in separate repository - https://github.com/dimitar-grigorov/Library-Catalog
```

## 07/10. CI-CD-Jenkins

```powershell
# Step 1 - Install Jenkins via docker
#docker run -d -p 8080:8080 -p 50000:50000 --name jenkins jenkins/jenkins:lts-jdk17
docker run -d -p 8080:8080 -p 50000:50000 --name jenkins --privileged -v jenkins-data:/var/jenkins_home -v /var/run/docker.sock:/var/run/docker.sock jenkins/jenkins:lts-jdk17

# Get the initial admin password
# Open http://localhost:8080/
# Step 2 - Install local project dependencies
cd "$(git rev-parse --show-toplevel)\07-CI-CD-Jenkins\Student-Registry"
npm install
# Check if the app can be started and run the tests
npm run
npm test
#Step 3 - Create seperate repository https://github.com/dimitar-grigorov/Student-Registry
#Step 4 - Create, configure and run Jenkins job
# run ngrok docker container
docker run -it -e NGROK_AUTHTOKEN=xyz ngrok/ngrok:latest http host.docker.internal:8080
```

## 11 Exam Preparation - 1

```powershell
# Step 1 - 3
npm install
npm start
# Add .gitingore with node_modules
# Create new repository and push the code
npm run test:unit
npm install -D @playwright/test
npx playwright install 
npm run test:ui
# Create new branch - junior-dev
git checkout -b junior-dev
git push --set-upstream origin junior-dev
# switch to junior-dev branch
# Fix the tests, commit and create pull request
# Merge the pull request
# Step 4 - Implement CI
# Create node.js workflow
# Solution - 11-Exam-Prep-1/pipline.yml
# Step 5 - Implement CD - Render.com
# Create new Web Service and connect it to the GitHub repository
# Runtime - Node, Build Command - npm install, Start Command - npm start
# Stop Auto-Deploy
# Create new secret in GitHub - MY_RENDER_API_KEY, MY_RENDER_SERVICE_ID
# Step 6 - Add UI Tests to CI/CD
# Dont forget to change localhost to the render.com url!!!
```

**NOTES:**
    - On deploy check the status code.
    - Research how to wait for deploy to finish.