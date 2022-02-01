const fetchData = async () => {
  const data = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=50&page=1&sparkline=true"
  )
    .then((res) => res.json())
    .then((data) => data);
  return data;
};

export default fetchData;
