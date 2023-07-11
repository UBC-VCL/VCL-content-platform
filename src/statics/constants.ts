const constants = {
  MIN_PASSWORD_LENGTH: 8,
  MIN_USERNAME_LENGTH: 4,
  PROJECTS: [
      { // dummy projects
          name: "Correlation",
          color: "#6776fe"
      },{
          name: "NOVA",
          color: "#fece25"
      }, {
        name: "SHIVA",
        color: "#fece25"
      }, {
          name: "NCIS",
          color: "#848484"
      }, {
          name: "IDEO",
          color: "#f66364"
      }, {
          name: "IT",
          color: "#848484"
      }, {
        name: "Image Transitions",
        color: "#848484"
      }, {
        name: "Dormant",
        color: "#848484"
      }
  ],
  MODALS: {
    LOGIN: 'login',
  },
  UBC_LOGO_URL: 'https://brand3.sites.olt.ubc.ca/files/2018/09/5NarrowLogo_ex_768.png',
} as const;

export default constants;
