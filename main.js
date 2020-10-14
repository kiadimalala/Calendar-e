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
          $(document).off('click','#save').on('click','#save',function(){
            let title = $('#title').val()
            let event = {
              title:title,
              start:selectionInfo.startStr,
              end:selectionInfo.endStr
          }
            calendar.addEvent(event);
            $('#title').val(null);
            calendar.unselect()
            $.modal.close()

          })
          
         
          
      }
      
    
    });
    
   
    calendar.render();
   
 });


 
 

  