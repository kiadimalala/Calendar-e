
export function openPopover(event,popoverID){
    let element = $('.fc-event-title-container');
    while(element.className !== "fc-event-title-container"){
      element = element.parent();
    }
    var popper = new Popper(element, document.getElementById(popoverID), {
      placement: 'right'
    });
    document.getElementById(popoverID).classList.toggle("hidden");

  }