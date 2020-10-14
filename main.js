import {randomColor} from './js/randomColor.js'

document.addEventListener('DOMContentLoaded', function() {
  
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      locale:'Fr',
      selectable:true,
      events:[],
      select:function(selectionInfo){
          $('.modal').modal()
          $(document).off('click','#save').on('click','#save',function(){
            let title = $('#title').val()
            let color = randomColor()
            let event = {
              title,
              start:selectionInfo.startStr,
              end:selectionInfo.endStr,
              color
          }
          if(title ===''){
            console.log('empty');
          }else{
            calendar.addEvent(event);
            $('#title').val(null);
            $.modal.close()
          }

            

          })
          
      },
      
      
    
    });
    
   
    calendar.render();
   
 });
 

 
 

  