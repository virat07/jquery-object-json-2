$(document).ready(function () {
    console.log('Ready');
    var Cat = '';
    var i;
    var up_user = '';
    console.log('loaded');
    $.ajax({
        url: "http://www.json-generator.com/api/json/get/bQCAxaACsy?indent=2",
        type: "GET",
        success: function (data) {
            var cat = data.Category;

            up_user = data.books;

            for (i in cat) {
                Cat += '<li id=' + i + '>';
                Cat += cat[i];
                Cat += '</li>';

            }
            $('#List').html(Cat);



        }
    });

    $('#List').on('click', function (event) {
        var user = event.target.id;
        console.log(up_user);
        var outlook = ' ';
        for (let i in up_user[user]) {
            console.log(up_user[i]);

            outlook += "<div class='row'>";
            outlook += "<div class='column'>" + up_user[user][i].name + "</div>";
            outlook += "<div class = 'column'>" + up_user[user][i].description + "</div>";
            outlook += "<div class='column'>" + up_user[user][i].category + "</div>";
            outlook += "</div>";


        }
        if (user === 'All') {
            Object.keys(up_user).forEach(function (key) {
                var val = up_user[key];

                for (var j in val) {
                    outlook += "<div class='row'>";
                    outlook += "<div class='column'>" + val[j].name + "</div>";
                    outlook += "<div class = 'column'>" + val[j].description + "</div>";
                    outlook += "<div class='column'>" + val[j].category + "</div>";
                    outlook += "</div>";

                }
            });
        }


        $('#base').html(outlook);
    });
});



