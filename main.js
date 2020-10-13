
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      selectable:true,
      events:[
        {
            id: 'a',
            title: 'my event',
            start: '2020-10-01'
          }
      ],
      select:function(selectionInfo){
          $('.modal').modal()
          $('#save').click(function(){
            let title = $('#title').val()
            calendar.addEvent({
                title:title,
                start:selectionInfo.startStr,
                end:selectionInfo.endStr
            }) 
            $('.modal').modal({
                closeExisting: true
            })
          })
          $('#title').val(null)
          

         
      }
    
    });
    
   
    calendar.render();
   
 });


 
 

  