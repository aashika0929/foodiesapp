cd "C:\Code\Logout"
echo "# bashTrial" >> README.md
git init
git add README.md
git remote add origin http://prism.wiproaz.com/TrialCheck.git
git add .
echo 'Enter the commit message:'
read commitMessage
git commit -m "$commitMessage"
git push origin master --force
read




