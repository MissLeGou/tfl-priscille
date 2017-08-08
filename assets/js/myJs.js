// function autocomplete

$(document).ready(function() {

var availableStations = [
	 "Baker Street",
	 "Charing Cross",
	 "Edgware Road (Bakerloo)",
	 "Elephant and Castle",
	 "Embankment",
	 "Harlesden",
	 "Harrow and Wealdstone",
	 "Kensal Green",
	 "Kenton",
	 "Kilburn Park",
	 "Lambeth North",
	 "Maida Vale",
	 "Marylebone",
	 "North Wembley",
	 "Oxford Circus",
	 "Paddington",
	 "Piccadilly Circus",
	 "Queen's Park",
	 "Regent's Park",
	 "South Kenton",
	 "Stonebridge Park",
	 "Warwick Avenue",
	 "Waterloo",
	 "Wembley Central",
	 "Willesden Junction",
	 "Bank",
	 "Barkingside",
	 "Bethnal Green",
	 "Bond Street",
	 "Buckhurst Hill",
	 "Chancery Lane",
	 "Chigwell",
	 "Debden",
	 "Ealing Broadway",
	 "East Acton",
	 "Epping",
	 "Fairlop",
	 "Gants Hill",
	 "Grange Hill",
	 "Greenford",
	 "Hainault",
	 "Hanger Lane",
	 "Holborn",
	 "Holland Park",
	 "Lancaster Gate",
	 "Leyton",
	 "Leytonstone",
	 "Liverpool Street",
	 "Loughton",
	 "Marble Arch",
	 "Mile End",
	 "Newbury Park",
	 "North Acton",
	 "Northolt",
	 "Notting Hill Gate",
	 "Perivale",
	 "Queensway",
	 "Redbridge",
	 "Roding Valley",
	 "Ruislip Gardens",
	 "Shepherd's Bush",
	 "Snaresbrook",
	 "South Ruislip",
	 "South Woodford",
	 "St Paul's",
	 "Stratford",
	 "Theydon Bois",
	 "Tottenham Court Road",
	 "Wanstead",
	 "West Acton",
	 "West Ruislip",
	 "White City",
	 "Woodford",
	 "Acton Town",
	 "Aldgate East",
	 "Barking",
	 "Barons Court",
	 "Becontree",
	 "Blackfriars",
	 "Bow Road",
	 "Bromley-by-Bow",
	 "Cannon Street",
	 "Chiswick Park",
	 "Dagenham East",
	 "Dagenham Heathway",
	 "Ealing Common",
	 "Earl's Court",
	 "East Ham",
	 "East Putney",
	 "Edgware Road (H & C)",
	 "Elm Park",
	 "Fulham Broadway",
	 "Gloucester Road",
	 "Gunnersbury",
	 "Hammersmith (District and Picc)",
	 "High Street Kensington",
	 "Hornchurch",
	 "Kensington (Olympia)",
	 "Kew Gardens",
	 "Mansion House",
	 "Monument",
	 "Parsons Green",
	 "Plaistow",
	 "Putney Bridge",
	 "Ravenscourt Park",
	 "Richmond",
	 "Sloane Square",
	 "South Kensington",
	 "Southfields",
	 "St. James's Park",
	 "Stamford Brook",
	 "Stepney Green",
	 "Temple",
	 "Tower Hill",
	 "Turnham Green",
	 "Upminster",
	 "Upminster Bridge",
	 "Upney",
	 "Upton Park",
	 "Victoria",
	 "West Brompton",
	 "West Ham",
	 "West Kensington",
	 "Westminster",
	 "Whitechapel",
	 "Wimbledon",
	 "Wimbledon Park",
	 "Aldgate",
	 "Barbican",
	 "Euston Square",
	 "Farringdon",
	 "Great Portland Street",
	 "Hammersmith",
	 "King's Cross St Pancras",
	 "Moorgate",
	 "Bermondsey",
	 "Canada Water",
	 "Canary Wharf",
	 "Canning Town",
	 "Canons Park",
	 "Dollis Hill",
	 "Finchley Road",
	 "Green Park",
	 "Kilburn",
	 "Kingsbury",
	 "London Bridge",
	 "Neasden",
	 "North Greenwich",
	 "Queensbury",
	 "Southwark",
	 "St John's Wood",
	 "Stanmore",
	 "Swiss Cottage",
	 "Wembley Park",
	 "West Hampstead",
	 "Willesden Green",
	 "Amersham",
	 "Chalfont and Latimer",
	 "Chorleywood",
	 "Colliers Wood",
	 "Croxley",
	 "Eastcote",
	 "Harrow on the Hill",
	 "Hillingdon",
	 "Ickenham",
	 "Moor Park",
	 "North Harrow",
	 "Northwick Park",
	 "Northwood",
	 "Northwood Hills",
	 "Pinner",
	 "Rayners Lane",
	 "Rickmansworth",
	 "Ruislip",
	 "Ruislip Manor",
	 "Uxbridge",
	 "Watford",
	 "West Harrow",
	 "Angel",
	 "Archway",
	 "Balham",
	 "Belsize Park",
	 "Borough",
	 "Brent Cross",
	 "Burnt Oak",
	 "Camden Town",
	 "Chalk Farm",
	 "Clapham Common",
	 "Clapham North",
	 "Clapham South",
	 "Colindale",
	 "East Finchley",
	 "Edgware",
	 "Euston",
	 "Finchley Central",
	 "Golders Green",
	 "Goodge Street",
	 "Hampstead",
	 "Hendon Central",
	 "High Barnet",
	 "Highgate",
	 "Kennington",
	 "Kentish Town",
	 "Leicester Square",
	 "Mill Hill East",
	 "Morden",
	 "Mornington Crescent",
	 "Old Street",
	 "Oval",
	 "South Wimbledon",
	 "Stockwell",
	 "Tooting Bec",
	 "Tooting Broadway",
	 "Totteridge and Whetstone",
	 "Tufnell Park",
	 "Warren Street",
	 "West Finchley",
	 "Woodside Park",
	 "Alperton",
	 "Arnos Grove",
	 "Arsenal",
	 "Boston Manor",
	 "Bounds Green",
	 "Caledonian Road",
	 "Cockfosters",
	 "Covent Garden",
	 "Finsbury Park",
	 "Hatton Cross",
	 "Heathrow Airport Terminal 4",
	 "Heathrow Airport Terminal 5",
	 "Heathrow Airport Terminals 1-3",
	 "Holloway Road",
	 "Hounslow Central",
	 "Hounslow East",
	 "Hounslow West",
	 "Hyde Park Corner",
	 "Knightsbridge",
	 "Manor House",
	 "North Ealing",
	 "Northfields",
	 "Oakwood",
	 "Osterley",
	 "Park Royal",
	 "Russell Square",
	 "South Ealing",
	 "South Harrow",
	 "Southgate",
	 "Sudbury Hill",
	 "Sudbury Town",
	 "Turnpike Lane",
	 "Wood Green",
	 "Blackhorse Road",
	 "Brixton",
	 "Highbury and Islington",
	 "Pimlico",
	 "Seven Sisters",
	 "Tottenham Hale",
	 "Vauxhall",
	 "Walthamstow Central"	
];
    $( "#stations" ).autocomplete({
      source: availableStations,
      minLength: 3,
      position: { my: "left top", at: "left bottom", collision: "none" },
   
    });

 

  var stationId = '';
  $('.btn').on('click', function() {
    var stationName = $('#stations').val();
    getStationId(stationName);
   })

 // function getStationId

function getStationId(stationName){
         
      $.ajax({
      url: 'https://api.tfl.gov.uk/StopPoint/Search?query='+ stationName +'&modes=tube',
      dataType: 'Json',
      async: true,
      success: function(data){
         var stationId = data.matches[0].id;
         getTimes(stationId);
         
         console.log(data)
      },
      error: function(data){
          console.log(data)
      }
   });
      
 }

// function getTimes

function getTimes(stationId) {
  
  $.ajax({
    type: 'GET',
    url: 'https://api.tfl.gov.uk/StopPoint/'+ stationId +'/Arrivals?app_key=%20a73f7a36fab42a930bf7cf8b1616d995&app_id=be29441e',
    dataType: 'Json',
    success: function (data) {
      $("#board").html("");
      var sorted = data.sort(function (a, b) {
        if (a.timeToStation > b.timeToStation) {
          return 1;
        }
        if (a.timeToStation < b.timeToStation) {
          return -1;
        }

        return 0;
      });

      $.each(data, function (key, value) {
        var time;
        if (value.timeToStation < 900) {
          if (value.timeToStation > 60) {
            time = parseInt(value.timeToStation / 60) + "min";
            $("#board").append(key + " /// " + value.lineName + " / " + value.stationName + " => " + value.destinationName + "<br>" + value.platformName + " " + time + "<br>");
          } else {
            time = "due";
            $("#board").append(key + " /// " + value.lineName + " / " + value.stationName + " => " + value.destinationName + "<br>" + value.platformName + " " + time + "<br>");
          }
        }
        console.log(key + " /// " + value.lineName + " / " + value.stationName + " => " + value.destinationName + " / " + value.platformName + " " + parseInt(value.timeToStation / 60) + "min");
      });
    }
  });
}
// END function getTimes


// function getClock
function getClock() {
  var date = new Date();

  var options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  };

  var dateFormatted = date.toLocaleTimeString("en-UK", options);

  document.getElementById('clockbox').innerHTML = dateFormatted;
}
// END function getClock


// window.onload
window.onload = function () {
  getClock();
  setInterval(getClock, 60000);
}
// END window.onload
});
