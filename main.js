import {randomColor} from './js/randomColor.js'
//import {openPopover} from './js/popover.js'

document.addEventListener('DOMContentLoaded', function() {

    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      locale:'Fr',
      selectable:true,
      editable:true,
      events:[],
      select:function(selectionInfo){
          $('.modal').modal({
            fadeDuration: 300,
          })
          $(document).off('click','#save').on('click','#save',function(){
            let title = $('#title').val()
            let description = $('.description').val()
            let color = randomColor()
            let event = {
              title,
              description,
              start:selectionInfo.startStr,
              end:selectionInfo.endStr,
              color
              
          }
          if(title === ''){
            console.log('empty');
          }else{
            calendar.addEvent(event);
            $('#title').val(null);
            $.modal.close()
            $('.fc-event-title').addClass('font-bold text-gray-800')
            $('.fc-event-title-container').attr('data-toggle',"popover")
            
          }

          })
      }, 
      
    });
    
    calendar.render();
    
 });


 
 

  