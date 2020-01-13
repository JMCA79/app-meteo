var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            var dataArray = JSON.parse(this.responseText);

            var i, j;
            var displayData = "";

            for (i in dataArray.results)
            {
                for (j in dataArray.results[i].description)
                {
                    displayData += "<b>Name: </b> " + dataArray.results[i].name + "<br>";
                    displayData += "<b>Designed by: </b> " + dataArray.results[i].iso2 + "<br>";
                    displayData += "<b>Latest Release: </b> " + dataArray.results[i].country + "<br>";
                    displayData += "<b>Object Oriented: </b> " + dataArray.results[i].admin1 + "<br>";
                    displayData += "<b>Description: </b> " + dataArray.results[i].description[j].admin1 + "<br>";
                    displayData += "<br><hr>";
                }
            }
        }

        document.getElementById("displayData").innerHTML = displayData;
        };
        
        xmlhttp.open("GET", "data-meteo.json", true);
        xmlhttp.send();