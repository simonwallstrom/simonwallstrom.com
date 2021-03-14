export default async (req, res) => {
  const url = 'https://api.raindrop.io/rest/v1/';
  var query = req.query.collection;
  const raindropsEndpoint = `${url}raindrops/${query}`;

  const raindropsResponse = await fetch(raindropsEndpoint, {
    headers: {
      Authorization: `Bearer ${process.env.RAINDROP_TOKEN}`,
    },
  });

  const raindrops = await raindropsResponse.json();
  let raindropsArray = [];
  raindrops.items.forEach((item) => {
    raindropsArray.push({
      id: item._id,
      title: item.title,
      description: item.excerpt,
      domain: item.domain,
      link: item.link,
      created: item.created,
    });
  });

  return res.status(200).json(raindropsArray);
};
