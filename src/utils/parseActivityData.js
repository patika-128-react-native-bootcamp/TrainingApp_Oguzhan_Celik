export default function (data) {
  return Object.keys(data)
    .map(key => {
      return {
        id: key,
        ...data[key],
      };
    })
    .sort(function (a, b) {
      return a.distance > b.distance ? -1 : a.distance > b.distance ? 1 : 0;
    });
}
