$(document).ready(function() {
    // FETCHING DATA FROM JSON FILE
    $.getJSON("data2.json",
        function(data) {
            var employer = '';

            // ITERATING THROUGH OBJECTS
            $.each(data, function(key, value) {

                //CONSTRUCTION OF ROWS HAVING
                // DATA FROM JSON OBJECT
                employer += '<tr>';
                employer += '<td>' +
                    value.Firstname + '</td>';

                employer += '<td>' +
                    value.Lastname + '</td>';

                employer += '<td>' +
                    value.Email + '</td>';
                employer += '<td>' +
                    value.Gender + '</td>';

                employer += '</tr>';
            });

            $('#employer').append('<tbody>');
            $('#employer').append(employer);
            $('#employer').append('</tbody');
        });
});