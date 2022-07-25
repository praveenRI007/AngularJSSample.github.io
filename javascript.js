$(document).ready(function() {
    // FETCHING DATA FROM JSON FILE
    $.getJSON("data.json",
        function(data) {
            var employee = '';

            // ITERATING THROUGH OBJECTS
            $.each(data, function(key, value) {

                //CONSTRUCTION OF ROWS HAVING
                // DATA FROM JSON OBJECT
                employee += '<tr>';
                employee += '<td>' +
                    value.Firstname + '</td>';

                employee += '<td>' +
                    value.Lastname + '</td>';

                employee += '<td>' +
                    value.Email + '</td>';
                employee += '<td>' +
                    value.Gender + '</td>';

                employee += '</tr>';
            });

            $('#employee').append('<tbody>');
            $('#employee').append(employee);
            $('#employee').append('</tbody');
        });
});