/*
flow:
1) user mark a star on repo puntorigen/logo4star
2) schedule backend service monitors stargazers of logo4star
    2.1) downloads file puntorigen/logo4star/'logos' branch /repos.json
    2.2) get stargazers of logo4star
        2.2.1) for each user, request their repo
        2.2.2) for each repo, just mark repos that are no forks
        2.2.3) build object with username->repos (non-foked)
    2.3) compare serialized object from 2.2.3 with step 2.1. 
    2.4) if step 2.3 is different, call puntorigen4u/generate-logo webook (workflow)
        2.4.1) this will repeat the steps from step 2.2.
        2.4.2) it will clone the branch 'logos' of puntorigen/logo4star
        2.4.3) it will generate each missing logo defined on step 2.4.1.
        2.4.4) it will save a new /repos.json from step 2.4.1.
        2.4.5) it will push 'repo' folder contents to 'logos' branch of logo4star
        2.4.6) it will call puntorigen/logo4star workflow webhook
    
logo4star workflow will:
1) download the file puntorigen/logo4star/'logos' branch /repos.json
2) read our file readme.md and add each repo found on the 'repos' file
*/