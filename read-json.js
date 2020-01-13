var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            var dataArray = JSON.parse(this.responseText);

            var i, j;
            var displayData = "";

            for (i in dataArray.meteo_results)
            {
                for (j in dataArray.meteo_results[i].description)
                {
                    displayData += "<b>Name: </b> " + dataArray.meteo_results[i].name + "<br>";
                    displayData += "<b>Designed by: </b> " + dataArray.meteo_results[i].designed_by + "<br>";
                    displayData += "<b>Latest Release: </b> " + dataArray.meteo_results[i].latest_release + "<br>";
                    displayData += "<b>Object Oriented: </b> " + dataArray.meteo_results[i].paradigm.object_oriented + "<br>";
                    displayData += "<b>Description: </b> " + dataArray.meteo_results[i].description[j].description_data + "<br>";
                    displayData += "<br><hr>";
                }
            }
        }

        document.getElementById("displayData").innerHTML = displayData;
        };
        
        xmlhttp.open("GET", "data-meteo.json", true);
        xmlhttp.send();
