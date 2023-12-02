
// heaader jquery
var header =` <nav class="mac_navbar">
<div class="custom_container">
    <div class="main__nav">
        <a href="index.html" class="nav__logo">
        <img src="assets/web app_png/Logo_Header@2x.png" alt="">
    </a>
        <div class="nav__menu">
            <ul class="nav__list">
                <li class="nav__item" id="home"><a href="index.html">Home</a>
                    <div class="underline"></div>
                </li>
                <li class="nav__item" id="causes"><a href="causes.html">Causes</a>
                    <div class="underline"></div>
                </li>
                <li class="nav__item" id="aboutus"><a href="about-us.html">About Us</a>
                    <div class="underline"></div>
                </li>

                <li class="nav__item" id="community"><a href="community.html">Community</a>
                    <div class="underline"></div>
                </li>
                <li class="nav__item dropdown hide">
                   <p class="welcome">Welcome</p> 
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                     Rajamohan Reddy
                    </a>
                    <div class="dropdown-menu welcome__menu">
                        <a class="dropdown-item welcome__list" href="my-profile.html">My Profile</a>
                        <a class="dropdown-item welcome__list" href="javascript:void(0)">Logout</a>
                    </div>
                </li>
                <div class="btn__item">
                    <button type="button" class="login__btn">LOGIN/SIGNUP</button>
                </div>
            </ul>
            <!-- mobile menu -->
            <div class="menu-btn" onclick="myFunction(this)">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>
        </div>
    </div>

</div>

</nav>`;
$("#Header").html(header);

// header jquery end

// footer start
var footer =`<div class="container-fluid">
<div class="custom_container">
    <footer class="footer__box">
        <div class="foofer__menu">
            <div class="footer__item">
                <div class="footer__common">
                    <div class="footer__social__icons">
                        <div class="footer__logo">
                            <img src="assets/white_logo.png" alt="upload logo">
                            <div class="footer__content">
                                <p class="logo__descrption">
                                    <span> We are a non-profit organization that</span>
                                    <span> helps to raise funds.</span>
                                </p>

                            </div>
                        </div>
                        <div class="social__icon">
                            <img class="footer_icon" src="assets/fb.svg" alt="upload img">
                            <img class="footer_icon" src="assets/twitter.svg" alt="upload img">
                            <img class="footer_icon" src="assets/linkedin.svg" alt="upload img">
                            <img class="footer_icon" src="assets/youtube.svg" alt="upload img">
                        </div>
                    </div>
                    
                    <div class="footer__copy_right">
                        <p>My People © Copyright 2022 |All Rights Reserved.</p>
                    </div>


                </div>

            </div>
            <div class="footer__item">
                <div class="footer__nav">
                    <ul class="footer__list">
                        <li class="nav__item"><a href="index.html">Home</a></li>
                        <li class="nav__item"><a href="causes.html">Causes</a></li>
                        <li class="nav__item"><a href="about-us.html">About Us</a></li>
                        <li class="nav__item"><a href="javascript:void(0)">Community</a></li>
                        <li class="nav__item"><a href="javascript:void(0)">Contact Us</a></li>
                        <li class="nav__item"><a href="terms_conditions.html">Terms and Conditions</a></li>
                        <li class="nav__item"><a href="privacy_policy.html">Privacy Policy</a></li>
                        <li class="nav__item"><a href="faq.html">FAQs</a></li>
                    </ul>

                </div>

            </div>
            <div class="footer__item">
                <div class="address__box">
                    <div class="address">
                        <p>Address:</p>
                        <p class="address__item">
                            <span class="address_icon"><img src="assets/location.svg" class="footer_icon" alt="upload_img"></span>
                            <span>No.32, Maradana Road, Colombo.</span>
                        </p>
                    </div>
                    <div class="address">
                        <p>Contact:</p>
                        <p class="address__item">
                            <span class="address_icon"><img class="footer_icon" src="assets/phone-number.svg" alt="upload_img"></span>
                            <span>+94771234567</span>
                        </p>
                    </div>
                    <div class="address">
                        <p class="address__item">
                            <span class="address_icon"><img class="footer_icon" src="assets/email.svg" alt="upload_mg"></span>
                            <span>support@mypeople.com</span>
                        </p>
                    </div>

                </div>

            </div>
          
        </div>

    </footer>
</div>
</div> `;
$('#Footer').html(footer);

// go to login page
$('.login__btn').on('click',function(){
    window.location.href = "mypeople-login.html";
});

// sticky navbar
$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.mac_navbar').addClass("sticky");
        } else {
            $('.mac_navbar').removeClass("sticky");
        }

    })
});

function myFunction(x) {
    x.classList.toggle("change");
}
$(document).ready(function() {
    // menu toggle btn script
    $('.menu-btn').click(function() {
        $('.mac_navbar .nav__list').toggleClass("active");
        $('.mac_navbar').toggleClass("active");
    });

});

