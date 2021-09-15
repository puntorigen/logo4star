/*
steps:
1) get file puntorigen/logos/repos.json
2) get all users that are stargazers of puntorigen/logo4star
3) compare steps 1 and 2, and get new users
4) for each new user, get the repos that are not forks and add them to 'tomake' obj
5) create a subfolder 'repo'
6) for each user within 'tomake' obj, create a subfolder 'repo/username'
7) for each repo within 'tomake' obj, request a logo svg and save it as 'repo/username/repo.svg'
8) for each svg, convert to png
9) save step 2 as repo/repos.json
10) push 'repo' folder to puntorigen/logos/ as new commit
*/
