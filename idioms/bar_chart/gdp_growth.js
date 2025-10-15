var vg = "idioms/bar_chart/gdp_growth.vg.json";

vegaEmbed("#bar_chart_vis", vg)
  .then(function(result) {
    window.multi_line_chart_view = result.view;
  })
  .catch(console.error);
