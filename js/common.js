// $(document).ready(function() {
//     $('#tab__filter li a').click(function() {
        
//         var ourClass = $(this).attr('class');

//         $('#tab__filter li').removeClass('active');
        
//         $(this).parent().addClass('active');

//         if (ourClass == 'all') {
    
//             $('#ourHolder').children('div.tab__item').show();
//         } else {
         
//             $('#ourHolder').children('div:not(.' + ourClass + ')').hide();
           
//             $('#ourHolder').children('div.' + ourClass).show();
//         }
//         return false;
//     });
// });

// accordian js

const accSingleTriggers = document.querySelectorAll('.accordian__list');

accSingleTriggers.forEach(trigger => trigger.addEventListener('click', toggleAccordion));

function toggleAccordion() {
  const items = document.querySelectorAll('.accordian__item');
  const thisItem = this.parentNode;

  items.forEach(item => {
    if (thisItem == item) {
      thisItem.classList.toggle('is-open');
      return;
    }
    item.classList.remove('is-open');
  });
}
