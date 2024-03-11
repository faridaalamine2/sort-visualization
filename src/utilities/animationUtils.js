const duration = 800; //in milliseconds

const delay = () => new Promise((resolve) => setTimeout(resolve, duration));
export { delay };
