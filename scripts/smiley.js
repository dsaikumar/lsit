var svg = d3.select('svg'); 
var width=svg.attr('width'), height=svg.attr('height');
var w = +(width), h = +(height);
var y = h/2, x = w/2
svg.style('background-color', 'red');
var g = svg.append('g').attr('transform', 'translate('+x+', '+y+')');
var circle = g.append('circle');
circle.attr('r', h/4)
      .attr('fill', 'yellow')
      .attr('stroke', 'black');
var eyeRadius = 10, eyePosition= 40, eyeOffset = 40;
var leftEye = g.append('circle');
leftEye.attr('r', eyeRadius)
  .attr('cx', eyePosition)
  .attr('cy', -eyeOffset)
  .attr('fill','black');
var rightEye = g.append('circle');
rightEye.attr('r', eyeRadius)
  .attr('cx', -eyePosition)
  .attr('cy', -eyeOffset)
  .attr('fill','black');
g.append('path').attr('d',d3.arc()({
  innerRadius: 50,
  outerRadius: 60,
  startAngle: Math.PI / 2,
  endAngle: Math.PI * 3/2
})); 
