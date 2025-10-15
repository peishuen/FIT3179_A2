var vg = "idioms/choropleth_map/unemployment_map.vg.json";

vegaEmbed("#choropleth_map_vis", vg)
  .then(function(result) {})
  .catch(console.error);