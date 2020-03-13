# React web app prototype

Created with [create-react-app](https://github.com/facebook/create-react-app), serve with the [heroku buildpack for create-react-app](https://github.com/mars/create-react-app-buildpack)

# Deployment instructions

You must have ```git``` and ```heroku-cli``` installed.

Clone this repo.

```
git clone https://github.com/Zildj1an/SciCloud
cd SciCloud
```

Change to the current branch.

```
git checkout react
```

Login to heroku and add the remote

```
heroku login
git remote add heroku https://git.heroku.com/scicloud-web-react.git
```

Push the code to the new remote.

```
git subtree push --prefix client heroku master
```

Finally, open [the app](https://scicloud-web-react.herokuapp.com)
