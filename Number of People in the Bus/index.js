const number = busStops =>
  busStops.reduce((total, people) => (total += people[0] - people[1]), 0);
