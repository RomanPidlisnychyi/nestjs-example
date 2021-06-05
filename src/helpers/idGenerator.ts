export const idGenerator = (arr) =>
  [...arr]
    .sort((a, b) => a.id - b.id)
    .reduce((acc, element) => {
      if (acc === element.id) {
        return acc + 1;
      }

      return acc;
    }, 1);
