module.exports = () => {
  const baseUrl = `http://localhost:3000`;
  return [
    {
      name: 'home page',
      url: `${baseUrl}`,
      execute: {
        afterNavigation() {
          const wait = (ms) => {
            var start = new Date().getTime();
            var end = start;
            while (end < start + ms) {
              end = new Date().getTime();
            }
          };
          wait(5000);
          const closeIcon = document.querySelector('#dataplan-close-icon');
          if (closeIcon) {
            closeIcon.click();
          }
          wait(10000);
        },
        beforeSnapshot() {
          const wait = (ms) => {
            var start = new Date().getTime();
            var end = start;
            while (end < start + ms) {
              end = new Date().getTime();
            }
          };
          wait(5000);
          const closeIcon = document.querySelector('#dataplan-close-icon');
          if (closeIcon) {
            closeIcon.click();
          }
          wait(5000);
        },
      },
    },
  ];
};
