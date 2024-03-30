$(document).ready(function () {
    // Sample array of image links
    var images = [
      "https://scontent.flyp6-2.fna.fbcdn.net/v/t1.6435-9/135186986_2886102845001338_8824322588204072711_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=a_WBOQz1EYIAX-lOpHq&_nc_ht=scontent.flyp6-2.fna&oh=00_AfC7Q2tp7PAFO84VYPZBNfnBdy4LMrblDqgHOaT60VsBQA&oe=662922C6",
      "https://pbs.twimg.com/media/GJkOq1bXMAAKK0P?format=jpg&name=900x900",
      "https://pbs.twimg.com/media/GJkNtu1XYAAE358?format=jpg&name=4096x4096",
      "https://pbs.twimg.com/media/GJbrhg4WYAAchc4?format=jpg&name=4096x4096",
      "https://pbs.twimg.com/media/GJNoohDXAAAMqX9?format=jpg&name=large",
      "https://pbs.twimg.com/media/GJkU50kXkAAsBL5?format=jpg&name=large",
      "https://pbs.twimg.com/media/GJkUDSdWoAAI3FE?format=jpg&name=large",
      "https://pbs.twimg.com/media/GJkRcTYWwAAmkR8?format=jpg&name=large",
      "https://pbs.twimg.com/media/GJkPQAqWsAA8t8s?format=jpg&name=large",
      "https://pbs.twimg.com/media/GJkVluwXkAEYpKy?format=jpg&name=medium",
      " https://scontent.flyp6-1.fna.fbcdn.net/v/t1.6435-9/58933375_2354426384835656_1065765300932182016_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGH5s_g2lTe5TKvwHSAQVoM-HqJAvVK8DD4eokC9UrwMAIz0kzx1b6PrJRDYyo2TDIBYJDBbfy9uhsdFl6fOko9&_nc_ohc=iqDXYSjCfCEAX8PfuBH&_nc_ht=scontent.flyp6-1.fna&oh=00_AfCVYo7-QWxHooCnHpPv8M0MkHVko194bazlJ8k57-R1IA&oe=662ED81B",
      "https://scontent.flyp6-2.fna.fbcdn.net/v/t39.30808-6/386256906_3657648397846775_3599934240640614617_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFfxpJwfIMPqFU52fZgBsWyultoPw5BfP-6W2g_DkF8_8AiZ0j37HJ_UkGT4mDGvn_qb6SFOnSFomFDicrMLMDU&_nc_ohc=BfokM4MMdDsAX9XGOOw&_nc_zt=23&_nc_ht=scontent.flyp6-2.fna&oh=00_AfAhPu3h9MFqxfrorF5pHaOfUFs8dsN3PUpm6xSCbN4Uxg&oe=660D4EC4",
      "https://scontent.flyp6-2.fna.fbcdn.net/v/t39.30808-6/382731868_3650804228531192_1344605443512973626_n.jpg?stp=dst-jpg_s960x960&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFkBY4FlxMHeTjcvZtq61gdbqdVeCu0K-Fup1V4K7Qr4WzYYNu66zXySrqgJUz5ohGjdS9QDZ7cBWXsB6xXpfSk&_nc_ohc=LlRFHM8jXiQAX80Y7hN&_nc_zt=23&_nc_ht=scontent.flyp6-2.fna&oh=00_AfC15tzrTQiPZQRYn8SMByK6PyNARIW9vhBz6ulL9BC0uw&oe=660D456C",
      "https://scontent.flyp6-1.fna.fbcdn.net/v/t39.30808-6/382772088_3650803665197915_4419959474830252154_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFa7fsIOPc1-6ZJXwKoF0BQipWkkWkiMSmKlaSRaSIxKZYh75Qjf2ge5Lxuisc2quTzoqfEUGx0_vT1ZVLWfAxM&_nc_ohc=pIBNJenqj3MAX95a10h&_nc_zt=23&_nc_ht=scontent.flyp6-1.fna&oh=00_AfBjBqzAxw08t5lriLmFXVGQhtVTRuu3yFO-TLuHKzCgzw&oe=660D56EB",
      "https://scontent.flyp6-2.fna.fbcdn.net/v/t39.30808-6/382737970_3650803678531247_3109083762642278911_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFP469ekWP_guiipbxioRR-d7f6jYIwleB3t_qNgjCV4JcNMnraC1DztAph7AzRJzi1970x7dIbn3jParBhITZc&_nc_ohc=1LxF1m3kpokAX8hVCUt&_nc_zt=23&_nc_ht=scontent.flyp6-2.fna&oh=00_AfDvOrqpQFtSrRYQl_dOBYK3QIyaoQR4gQgJCAoMiMwFmw&oe=660D4D36",
      "https://scontent.flyp6-1.fna.fbcdn.net/v/t39.30808-6/382748259_3650803428531272_5430665600202881098_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGwCS5jxQxAShua3muAUZDz7Qz852VWj9vtDPznZVaP24vwC3Ymt2PGsfu1iQouLhlkva1yEvu9xAmPL02v-MNE&_nc_ohc=OCmuT5YQU0gAX_UY8Hk&_nc_zt=23&_nc_ht=scontent.flyp6-1.fna&oh=00_AfCPyQ4r3D4gtUHZq0cncYVblCoc3XoVKqyd9irOw9HmtA&oe=660D5C5C",
      "https://scontent.flyp6-1.fna.fbcdn.net/v/t39.30808-6/379319471_3646429268968688_3044839619565117660_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHgCMw2KFr1udvUUmOaz7Uj0_TDpdt41LfT9MOl23jUt5EG2ERMq9pBXViWyBrQ9vmVyuRxkJR02h5p7bwbV7S8&_nc_ohc=XKHNBF0huJgAX_PcCdL&_nc_zt=23&_nc_ht=scontent.flyp6-1.fna&oh=00_AfBPraJbpATPh5VH4SkhS9FWNGI8vMbXCgOUXkRs0ad8WA&oe=660D491E",
      "https://scontent.flyp6-1.fna.fbcdn.net/v/t39.30808-6/369522285_3628121957466086_5703700133409579978_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHWgP0iev-yPMvygNFV24kXfLRmfGKkdYF8tGZ8YqR1gZkj6U0i2ffWhRVUGA6m2hRDjqHiRrJ5lVKnT131EGDx&_nc_ohc=kkPbpMGLoc4AX94PZL5&_nc_zt=23&_nc_ht=scontent.flyp6-1.fna&oh=00_AfAPCV8XQ65T4SB_9fFJq1yz4a__Q7bBriv2YvsZ9_Hpig&oe=660D3D10",
      "https://scontent.flyp6-2.fna.fbcdn.net/v/t39.30808-6/334293871_3219442465021848_7818658307920413596_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH2rkp5sjUEGiyWFbdY_jquSJgQ7wtSbFRImBDvC1JsVP-sDFAuMrYzKuxfZuFSrlSDPyA54t1swgALIqZD6upN&_nc_ohc=o0Is8SLPI-UAX8uuu5H&_nc_zt=23&_nc_ht=scontent.flyp6-2.fna&oh=00_AfBoFPb2SPG3xn4r6C8KBk-d0a1D7F48hrMhA6ZLWAJuFw&oe=660D5AD2",
      "https://scontent.flyp6-1.fna.fbcdn.net/v/t39.30808-6/271721307_3180607972217489_6025702860128884088_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE67bmgXd3uyP1IcrnaqYSQsWnlxOamGByxaeXE5qYYHH09v8qPQcdjXDW5YV71ZJXcFAe8T8VBoqN6qfvCcVI7&_nc_ohc=Gm9kTJ-6ulkAX-2uR2v&_nc_zt=23&_nc_ht=scontent.flyp6-1.fna&oh=00_AfAIeKougYWBLWTp9_OwV-AcAFcuzrmC469uhFd_wSoshw&oe=660D3F3B",
    ];
  
    // Function to render images randomly
    function renderImages() {
      var gallery = $(".gallery");
      gallery.empty(); // Clear existing images
  
      $.each(images, function (index, value) {
        var img = $("<img>");
        img.attr("src", value);
        img.attr(
          "alt",
          (alt =
            "#muhammad_bilal_ali_khokhar #mbilalalikk #muhammadbilalalikhokhar #muhammadbilalalikhokhar #image #bilalalikhokhar #bilal #bilalali #bilal" +
            (index + 1))
        ); // Set alt tag dynamically
        gallery.append(img);
      });
    }
  
    // Function to open modal with clicked image
    $(".gallery").on("click", "img", function () {
      var modal = $("#myModal");
      var modalImg = $("#modal-img");
      modal.css("display", "flex");
      modal.css("zIndex", "999");
      modalImg.attr("src", $(this).attr("src"));
      var modalIndexing = $("#muhammadbilalalikhokhar-balugallery");
      modalIndexing.addClass("addIndex");
    });
  
    // Close the modal when the close button is clicked
  $(".close").click(function () {
      $("#myModal").css("display", "none");
    });
  
    // Close the modal when clicking outside of it
    $(window).click(function (event) {
      if (event.target.id === "myModal") {
        $("#myModal").css("display", "none");
      }
    });
  
    // Render images randomly when the page loads
    renderImages();
  });
  function plusSlides(n) {
      var currentIndex = $(".gallery img").index($(".gallery img[src='" + $("#modal-img").attr("src") + "']"));
      var newIndex = currentIndex + n;
      var totalImages = $(".gallery img").length;
      
      if (newIndex >= 0 && newIndex < totalImages) {
        $("#modal-img").attr("src", $(".gallery img").eq(newIndex).attr("src"));
      }
    }
  
    window.addEventListener('load', function() {
      var section = document.getElementById('muhammadbilalalikhokhar-balugallery');
      var sectionHeading = document.getElementById('section-muhammadbilalalikhokhar-images-gallery');
      section.style.position = 'absolute';
      section.style.width = '0px';
      sectionHeading.style.display = 'none';
    });
  
    function showGallery(){
      var section = document.getElementById('muhammadbilalalikhokhar-balugallery');
      var sectionHeading = document.getElementById('section-muhammadbilalalikhokhar-images-gallery');
      section.style.position = 'unset';
      section.style.width = 'unset';
      sectionHeading.style.display = 'block';
      
    }
  
  
  
  
  