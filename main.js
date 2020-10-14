document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      selectable:true,
      events:[],
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


 
 

  