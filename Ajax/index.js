

$(function () {
    $('#load').click(function () {
      $.get('students.txt', function (Response) {
        $('#result').empty()
        $('#result').append(Response)
      })
    })
  })