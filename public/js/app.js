$(function(){
    $('#portfolio').json2html(portfolioData,portfolioTransform);
    $('#slider').json2html(aboutData,aboutTransform);
    $('#count').json2html(counterData,counterTransform);
    $('#team').json2html(teamData,teamTransform);
    $('#slide').json2html(slideData,slideTransform);
    $('#client').json2html(clientData,clientTransform);
    $('#services').json2html(servicesData,servicesTransform);
    $('#order').json2html(orderData,orderTransform);
    $('#social-icons').json2html(socialData,socialTransform);
    $('#contact').json2html(contactData,contactTransform);
});