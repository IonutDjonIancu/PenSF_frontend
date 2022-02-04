export const diceUrlApi = 'https://avelraangame.azurewebsites.net/api/palantir/roll20';
export const serverUrlApi = 'https://pensfserver.herokuapp.com';
export const signinPage = 'signin';
export const homePage = 'home';
export const registerPage = 'register';
export const signOut = 'signOut';

export const particleOptions = {
    // background: {
    //   color: {
    //     value: "#0d47a1",
    //   },
    // },
    fpsLimit: 80,
    interactivity: {
      events: {
        onClick: {
          enable: false,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 15,
        },
        push: {
          quantity: 4
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#04C8DA",
        distance: 100,
        enable: true,
        opacity: 0.5,
        width: 0.5,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outMode: "bounce",
        random: false,
        speed: 0.15,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        random: true,
        value: 5,
      },
    },
    detectRetina: true,
}



