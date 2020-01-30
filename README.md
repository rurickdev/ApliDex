# ApliDex

### Aplidex it's a Single Web Page that shows the info of the pokemon using the [Pokeapi](https://pokeapi.co)

### To use it only go to [aplidex.rurick.dev](https://aplidex.rurick.dev)
---
---
The objective is to create a Single Page Application (SPA) that shows a list of pokémon and when one its clicked the side panel shows the details of the selected pokémon like in this mockups

### Desktop Version
<img src="https://s3.us-east-2.amazonaws.com/cdn.aplidex.rurick.dev/readme/desktop_blank-min.png"  width="512" height="auto">
<img src="https://s3.us-east-2.amazonaws.com/cdn.aplidex.rurick.dev/readme/desktop_selected-min.png"  width="512" height="auto">

### Mobile Version
<img src="https://s3.us-east-2.amazonaws.com/cdn.aplidex.rurick.dev/readme/mobile_blank-min.png"  width="256" height="auto">
<img src="https://s3.us-east-2.amazonaws.com/cdn.aplidex.rurick.dev/readme/mobile_blank_details-min.png"  width="256" height="auto">
<img src="https://s3.us-east-2.amazonaws.com/cdn.aplidex.rurick.dev/readme/mobile_selected-min.png"  width="256" height="auto">

[Detailed version](https://www.figma.com/file/BbhSm3yKgu2Y5TGbxfde8J/ApliDex?node-id=0%3A1)

---
This is what was finished
### Desktop Version
<img src="https://s3.us-east-2.amazonaws.com/cdn.aplidex.rurick.dev/readme/production_desktop_blank.png"  width="512" height="auto">
<img src="https://s3.us-east-2.amazonaws.com/cdn.aplidex.rurick.dev/readme/production_desktop_selected.png"  width="512" height="auto">

### Mobile Version
<img src="https://s3.us-east-2.amazonaws.com/cdn.aplidex.rurick.dev/readme/production_mobile_blank.jpg"  width="256" height="auto">
<img src="https://s3.us-east-2.amazonaws.com/cdn.aplidex.rurick.dev/readme/production_mobile_blank_details.jpg"  width="256" height="auto">
<img src="https://s3.us-east-2.amazonaws.com/cdn.aplidex.rurick.dev/readme/production_mobile_blank_details_2.jpg"  width="256" height="auto">
<img src="https://s3.us-east-2.amazonaws.com/cdn.aplidex.rurick.dev/readme/production_mobile_selected.jpg"  width="256" height="auto">
<img src="https://s3.us-east-2.amazonaws.com/cdn.aplidex.rurick.dev/readme/production_mobile_selected_details.jpg"  width="256" height="auto">
<img src="https://s3.us-east-2.amazonaws.com/cdn.aplidex.rurick.dev/readme/production_mobile_selected_details_2.jpg"  width="256" height="auto">

You could check the production version in [https://aplidex.rurick.dev](https://aplidex.rurick.dev)

---
> Note: there is a little easter egg in this app. Could you find it?

> Tip: inspect my picture
---
Technologies Used:
- [NextJs (ReactJs)](https://nextjs.org)
  - [React Window](https://react-window.now.sh)
- [Bulma (Sass)](https://bulma.io)
- [Now (CI / CD)](https://now.sh)
- [Amazon Web Services](https://aws.amazon.com/)
  - [S3](https://aws.amazon.com/es/s3/)
  - [Lambda](https://aws.amazon.com/es/lambda)
- [Figma (Mockups)](https://figma.com)
- [GitLab Board (Organization)](https://gitlab.com/rurickdev/aplidex/-/boards)
- [Material Design Community Icons](https://materialdesignicons.com)
- [Pokéapi](https://pokeapi.co)

Thanks to NextJs it posible to use Server Side Rendering to optimase loading times, and using react window the big grid (~900 items) its virtualized to reduce the rendering in screen.
With Bulma the style it's easy to make because of his column system based on flexbox.
Using Now for the deploy allows to deploy every commit and merge directly to the web.
AWS S3 was used as cdn to have an space to save all the static files like images and a Lambda serves a json with the data of the user
Figma allows to create amazing mockups in an easy way.
GitLab's kanban board, Issues and Milestones lets organice and define objetives to complete de challenge.
The pokeapi was used to get all the info and sprites of pokémon




