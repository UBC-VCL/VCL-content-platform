const constants = {
  MIN_PASSWORD_LENGTH: 8,
  MIN_USERNAME_LENGTH: 4,
  PROJECTS: [
    { // dummy projects
      name: "Correlation"
      },{
          name: "NOVA"
      }, {
          name: "Perceptual Modes"
      }, {
          name: "IDEO"
      }, {
          name: "IT"
      }, {
        name: "Image Transitions"
      }, {
        name: "Dormant"  
      }
  ],
  MODALS: {
    LOGIN: 'login',
  },
  UBC_LOGO_URL: 'https://res.cloudinary.com/dhp7dbfmf/image/upload/v1660613822/gr6bjcqwqmyubofqvfrs.png',
} as const;

export default constants;
