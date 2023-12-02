$('document').ready(function(){
      //  header banner owl carousel jquery people fund slider
      $("#peopleFund").owlCarousel({
            navigation : true,
            items : 1, 
            loop:true,
            nav:true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            autoplay: true,
            touchDrag  : false,
            mouseDrag  : false,
        });

        // first page second slider owl pot donation slider
        $(function() {
            // Owl Carousel
                  var owl = $(".donation_slider");
                  owl.owlCarousel({
                   items: 5,
                   margin: 10,
                   loop: true,
                   dots:false,
                   responsive:{
                    0:{
                        items: 1
                    },
                    500:{
                        items:2
                    },
                    684:{
                        items: 2
                    },
                    1250:{
                        items: 4
                    },
                    1440:{
                        items: 5
                    }
                }
                   });
                      });
                    //   video slide banner
                    $(document).ready(function(){
                        $('.swipe__slide').owlCarousel({
                            center: false,
                            nav: true,
                            navText:["Previous →","Next  →"],
                            items:2,
                            loop:true,
                            margin:20,
                            stagePadding: 15,
                            dots:false,
                            responsive:{
                                0:{
                                    items: 1
                                },
                                1000:{
                                    items: 1
                                },
                                1440:{
                                    items: 2
                                }
                            }
                            
                        });
                });
  
          
})