let footerHtml = ` <footer class="footer-section">
    <div class="container footer-container">
      <div class="footer-one">
        <div class="logo-brand">
          <a href="index.html" target="_self" class="footer-subheading" style="padding: 0;"> MK-EDUHUB</a>
        </div>

        <p class="footer-para" style="color: #c1c5cb;">
          Welcome to Thapa EcomStore, your ultimate destination for cutting-edge gadgets!
        </p>

        <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards" />
      </div>

      <div class="footer-two">
        <p class="footer-subheading">SHOPPING</p>
        <ul>
          <li><a href="#">Computer Store</a></li>
          <li><a href="#">Laptop Store</a></li>
          <li> <a href="#">Accessories</a></li>
          <li><a href="#">Sales & Discount</a></li>
        </ul>
      </div>

      <div class="footer-three">
        <p class="footer-subheading">Links</p>
        <ul>
          <li> <a href="./contact.html">Contact Us</a></li>
          <li> <a href="" target="_blank">Payment Method</a></li>
          <li> <a href="" target="_blank">Delivery</a> </li>
          <li> <a href="" target="_blank">Return and Exchange</a></li>

        </ul>
      </div>

      <div class="footer-four">
        <h4 class="footer-subheading" style="color: white; padding: 0;">NEWSLETTER</h4>
        <p style="text-align: left;">Be the first to know about new<br />arrivals, sales & promos!</p>
        <div class="f-mail">
          <input type="email" placeholder="Your Email"
            style="background-color: black; padding: 0.5rem 1rem; border: 1px solid #c1c5cb;" />
          <i class="bx bx-envelope"></i>
        </div>
        <hr />
      </div>


    </div>
    <section style="width: 100vw; background-color: #c1c5cb; height: 1px;"></section>
    <div class="f-design">
      <div class="f-design-txt">
        <p style="text-align: center;" class="mt-4">Design and Code by MK-EDUHUB</p>
      </div>
    </div>
  </footer>`;

  let footerEle = document.querySelector(".footer-section");

  footerEle.insertAdjacentHTML("afterbegin",footerHtml);