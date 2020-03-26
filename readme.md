#Git commands

git init - Create a new repo
git add - Add files to staging area
git status - Get the changes to your project
git commit - Create a new commit with files from staging area ( to be done after git add)
git log - List recent commits

CONNECTING TO GITHUB USING SSH KEYS

https://help.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh

Create the key
ssh-keygen -t tsa -b 4096 -C 'pdixit25@gmail.com'
FIlename - id_rsa
Passphrase - NO

WHich ssh key to use - ssh_agent

    Check if ssh agent is running
    eval "$(ssh-agent -s)"

    Add identity
    ssh-add ~/.ssh/id_rsa

    Copy the public key in Memory ( MAC, could changes as per OS)
    pbcopy < ~/.ssh/id_rsa.pub

Connect to github using ssh
git remote add origin git@github.com:PrabhatDixit/expensify-app.git

git push -u origin master