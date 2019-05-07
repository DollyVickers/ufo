var data = [{
  datetime: "1/1/2010",
  city: "benton",
  state: "ar",
  country: "us",
  shape: "circle",
  durationMinutes: "5 mins.",
  comments: "4 bright green circles high in the sky going in circles then one bright green light at my front door."
},
{
  datetime: "1/1/2010",
  city: "bonita",
  state: "ca",
  country: "us",
  shape: "light",
  durationMinutes: "13 minutes",
  comments: "Three bright red lights witnessed floating stationary over San Diego New Years Day 2010"
}];

var tbody = d3.select("tbody")
var submit = d3.select("#filterButton");

function updateTable(dataset){
  tbody.html('');
  dataset.forEach((toBeDefined) => {
    var row = tbody.append("tr");
    Object.defineProperties(toBeDefined).forEach(([key, value]) => {
      var cell=tbody.append("td")
      cell.text(value);
    });
  });
}

function filterByDate(dataset){
  var filteredData=dataset.filter(function(d){
    return d.datetime === $('#datetime').val();
  });
  return filteredData;
}

updateTable(data);
('#datetime').on('keyup',function() {updateTable}); {
  var result=filterByDate(data);
  updateTable(result);
}




