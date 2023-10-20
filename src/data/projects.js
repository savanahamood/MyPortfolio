import wnader from '../assets/wander.jpg'
import stor from '../assets/Untitled.png'
const data = [
  {
    id: '1',
    title: 'Wanderlust',
    description:
      'Collaborated with a team to develop “Wanderlust” a web application that allows users to choose their destinations and browse a diverse list of exciting option for restaurants, hotels, and activities.',
    image: {
      src: wnader,
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      sited: 'https://github.com/orgs/finalGroup3/repositories',
      sitel: 'https://653133bc0fbc361409063500--creative-kitten-3e622c.netlify.app/',

    },
    technologies: [
      '#NodeJS',
      '# ReactJS',
      '#Sequelize',
      '#Socket.io',
      '#MySQL',
      '#ExpressJS',
      '#Axios',
    ],
  },
  {
    id: '2',
    title: 'Storefront',
    description:
      'The simple E-Commerce Web Application is designed to provide users with a convenient platform to select and purchase electronic and gaming products. This web application offers a user-friendly interface and wide range of exciting option for electronic devices and games.',
    image: {
      src: stor,
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      sited: 'https://github.com/savanahamood/storefrontt',
      sitel: 'https://delicate-panda-37e2d7.netlify.app/',

    },
    technologies: [
      '#HTML5',
      '#CSS3',
      '#NodeJS',
      '#ReactJS',
      '# Netlify',
      '#Material UI',
    ],
  },
  // {
  //   id: '3',
  //   title: 'Outfitr',
  //   description:
  //     'A react native app with animations made with react-native-reanimated. The app is based on the Outfitr - Fashion UI Kit.',
  //   image: {
  //     src: 'https://res.cloudinary.com/dx6tl6aa2/image/upload/v1671562261/portfolio/projects/fashion/Screenshot_2022-12-20_at_20.45.27_peyqly.jpg',
  //     placeholderSrc:
  //       'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
  //   },
  //   links: {
  //     site: 'https://expo.dev/@v_snaichuk/rn-fashion?serviceType=classic&distribution=expo-go',
  //     repo: 'https://github.com/vsnaichuk/fashion-app',
  //   },
  //   technologies: [
  //     '#typescript',
  //     '#react-native',
  //     '#expo',
  //     '#react-native-reanimated',
  //     '#react-navigation',
  //   ],
  // },
  // {
  //   id: '4',
  //   title: 'Apiko Marketplace',
  //   description:
  //     'An online marketplace made with React. The project was developed on 8th Apiko Intensive.',
  //   image: {
  //     src: 'https://res.cloudinary.com/dx6tl6aa2/image/upload/v1628348072/portfolio/projects/react-marketplace/apiko-marketplace-lg_xppe9n.jpg',
  //     placeholderSrc:
  //       'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
  //   },
  //   links: {
  //     site: 'https://apiko-marketplace-app-snaichuk.herokuapp.com/',
  //     repo: 'https://github.com/vsnaichuk/apiko-marketplace-app-snaichuk',
  //   },
  //   technologies: [
  //     '#react',
  //     '#redux',
  //     '#socket.io',
  //     '#scss',
  //     '#formik',
  //     '#react-window',
  //     '#restapi',
  //   ],
  // },
  // {
  //   id: '5',
  //   title: 'Places App',
  //   description:
  //     'A MERN app to let users share their experience of places along with Details. It is user friendly and can be useful to many others.',
  //   image: {
  //     src: 'https://res.cloudinary.com/dx6tl6aa2/image/upload/v1628348070/portfolio/projects/mern-places/mern-places-lg_xf6zom.jpg',
  //     placeholderSrc:
  //       'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
  //   },
  //   links: {
  //     site: 'https://yourplaces-sv.netlify.app/',
  //     repo: 'https://github.com/vsnaichuk/MERN-places',
  //   },
  //   technologies: [
  //     '#react',
  //     '#nodejs',
  //     '#express',
  //     '#mongodb',
  //     '#react-query',
  //     '#react-transition-group',
  //     '#mongoose',
  //     '#jwt',
  //     '#aws',
  //   ],
  // },
  // {
  //   id: '6',
  //   title: 'eCommerce Mobile App',
  //   description:
  //     'A Mobile eCommerce application built with React Native that includes cart functionality, push notifications, user authentication and user orders',
  //   image: {
  //     src: 'https://res.cloudinary.com/dx6tl6aa2/image/upload/v1628348073/portfolio/projects/rn-shop/rn-shop-lg_fofglf.jpg',
  //     placeholderSrc:
  //       'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
  //   },
  //   links: {
  //     site: 'https://expo.dev/@v_snaichuk/online-shop-app',
  //     repo: 'https://github.com/vsnaichuk/RN-shop',
  //   },
  //   technologies: [
  //     '#react-native',
  //     'expo',
  //     '#redux',
  //     '#redux-toolkit',
  //     '#react-navigation',
  //     '#nodejs',
  //     '#express',
  //     '#mongodb',
  //   ],
  // },
  // {
  //   id: '7',
  //   title: 'Places Mobile App',
  //   description:
  //     'A Mobile application for sharing places that people visit from all over the world. Uses React Native, TypeScript, MobX and Native Device Features',
  //   image: {
  //     src: 'https://res.cloudinary.com/dx6tl6aa2/image/upload/v1628348073/portfolio/projects/rn-places/rn-places-lg_ljyikm.jpg',
  //     placeholderSrc:
  //       'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
  //   },
  //   links: {
  //     site: 'https://expo.dev/@v_snaichuk/rn-places',
  //     repo: 'https://github.com/vsnaichuk/RN-places',
  //   },
  //   technologies: [
  //     '#react-native',
  //     '#typescript',
  //     '#expo',
  //     '#mobx',
  //     '#sqlite',
  //     '#react-native-maps',
  //     '#expo-location',
  //   ],
  // },
  // {
  //   id: '8',
  //   title: 'Shopping Cart',
  //   description:
  //     'Simple eCommerce cart application built with React and TypeScript. Uses SWR hook to fetch the data from the API and Styled Components',
  //   image: {
  //     src: 'https://res.cloudinary.com/dx6tl6aa2/image/upload/v1628348073/portfolio/projects/react-shop-cart/rn-shop-cart-lg_w3qxn6.jpg',
  //     placeholderSrc:
  //       'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
  //   },
  //   links: {
  //     site: 'https://shopping-cart-sv.netlify.app/',
  //     repo: 'https://github.com/vsnaichuk/React-ShoppingCart',
  //   },
  //   technologies: [
  //     '#react',
  //     '#typescript',
  //     '#material-ui',
  //     '#styled-components',
  //     '#swr',
  //     '#fakestoreapi',
  //   ],
  // },
];

export default data;
