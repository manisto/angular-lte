export interface IOptions {
  animationSpeed: number;
  screenSizes: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
  };
}

export let Options: IOptions = {
  animationSpeed: 500,
  screenSizes: {
    xs: 480,
    sm: 768,
    md: 992,
    lg: 1200
  }
};
