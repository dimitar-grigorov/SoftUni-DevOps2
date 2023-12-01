# SoftUni-DevOps2


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
