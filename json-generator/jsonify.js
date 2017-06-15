    var array = [];
    var n = 0;


    function addStar() {
        var name = document.getElementById("constellation-name").value;
        var xString = document.getElementById("x_coordinate").value;
        var yString = document.getElementById("y_coordinate").value;
        var color = document.getElementById("color").value;
        var spikesString = document.getElementById("number_of_spikes").value;

        var x = parseInt(xString);
        var y = parseInt(yString);
        var spikes = parseInt(spikesString);

        var temp = {};
        temp['id'] = 'star' + n;
        temp['x_coordinate'] = x;
        temp['y_coordinate'] = y;
        temp['color'] = color;
        temp['number_of_spikes'] = spikes;
        array.push(temp);

        document.getElementById('star-name').innerHTML = name;
        updateStars();

        n++;
    }

    function updateStars(){
        array.toString();
        document.getElementById('jsonObject').innerHTML = JSON.stringify(array); 
    }


    function deleteStar() {
        var deleteID = document.getElementById("star-to-delete").value;
        var num = deleteID.match(/\d+/)[0] ;
        if(num > -1){
            array.splice( num, 1 );
            console.log(array);
        }

        for( i = 0 ; i < array.length ; i++){
            array[i].id = 'star' + i;
            console.log(array[i].id);
        }

        updateStars();

    }

