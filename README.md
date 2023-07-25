# LeetCode Hints

This project is split into its frontend and backend (view their separate folders).
The frontend was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
The backend uses Node, Express and MongoDB to handle user requests. It's deployed on [Render](https://render.com).
LeetCode Hints is my first venture into building a fullstack application, and I went with MERN because it seemed the simplest to learn.

## What the application's all about

The website has a clean, uncomplicated interface.
It's meant to act as a forum for programmers to share hints on LeetCode problems.
Users can filter hints and read suggestions from others, or fill up a form to submit their own.

## Some issues

Unfortunately, my backend deployed with the free tier of Render goes offline if it hasn't been queried for about 30 minutes.
It then takes a bit to come back online upon the next query, which might be annoying for the user.
