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
  UBC_LOGO_URL: 'https://brand3.sites.olt.ubc.ca/files/2018/09/5NarrowLogo_ex_768.png',
} as const;

export default constants;
