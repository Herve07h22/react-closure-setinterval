# Understand Closure, useRef and useEffect


At a first glance, some React Hooks are not easy to use with confidence. This is especially true for the mysterious useEffect which drove me crazy sometimes.

[This post](https://overreacted.io/making-setinterval-declarative-with-react-hooks/)
written by Dan Abramov describes common issues when you try to trigger a timer form a useEffect hook.

It turned to be a great opportunity to illustrate the `useEffect` and ``useRef`` hooks, but also to check if the Javascript *closure* is clear enough.

I wrote this code this to teach theses skills to a junior dev who was learning React. I Hope this will be usefull to others.


[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/react-closure-setinterval)