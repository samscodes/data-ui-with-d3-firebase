const data = [
  {width: 200, height: 100, fill: 'purple'}
];

// select the svg container first
const svg = d3.select('svg');

svg.select('rect')
  .data(data)
  .attr('width', (d,i,n) => d.width)
  .attr('height', (d,i,n) => d.height)
  .attr('fill', (d,i,n) => d.fill);


