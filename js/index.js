const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', siteContent["cta"]["img-src"]);

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


for(let i = 1; i<7; i++){
  document.querySelector("nav a:nth-child("+i+")").innerHTML = siteContent["nav"]["nav-item-"+i+""];
  document.querySelector("nav a:nth-child("+i+")").style.color = "green";
  
}

let ctaHeader = document.querySelector("h1");
ctaHeader.innerHTML = siteContent["cta"]["h1"];

let ctaButton = document.querySelector("button");
ctaButton.innerHTML = siteContent["cta"]["button"];

let textContent = document.querySelector(".text-content h4");
textContent.innerHTML = siteContent["main-content"]["features-h4"];

let paragraphContent = document.querySelector(".text-content p");
paragraphContent.innerHTML = siteContent["main-content"]["features-content"];

let textContent2 = document.querySelector("body > div > section.main-content > div.top-content > div:nth-child(2) > h4");
textContent2.innerHTML = siteContent["main-content"]["about-h4"];

let paragraphContent2 = document.querySelector("body > div > section.main-content > div.top-content > div:nth-child(2) > p");
paragraphContent2.innerHTML = siteContent["main-content"]["about-content"];

let textContent3 = document.querySelector("body > div > section.main-content > div.bottom-content > div:nth-child(1) > h4");
textContent3.innerHTML = siteContent["main-content"]["services-h4"];

let paragraphContent3 = document.querySelector("body > div > section.main-content > div.bottom-content > div:nth-child(1) > p");
paragraphContent3.innerHTML = siteContent["main-content"]["services-content"];

let textContent4 = document.querySelector("body > div > section.main-content > div.bottom-content > div:nth-child(2) > h4");
textContent4.innerHTML = siteContent["main-content"]["product-h4"];

let paragraphContent4 = document.querySelector("body > div > section.main-content > div.bottom-content > div:nth-child(2) > p");
paragraphContent4.innerHTML = siteContent["main-content"]["product-content"];

let textContent5 = document.querySelector("body > div > section.main-content > div.bottom-content > div:nth-child(3) > h4");
textContent5.innerHTML = siteContent["main-content"]["vision-h4"];

let paragraphContent5 = document.querySelector("body > div > section.main-content > div.bottom-content > div:nth-child(3) > p");
paragraphContent5.innerHTML = siteContent["main-content"]["vision-content"];

let contactText = document.querySelector(".contact h4");

contactText.innerHTML = siteContent["contact"]["contact-h4"];

let contactP = document.querySelector("body > div > section.contact > p:nth-child(2)");

contactP.innerHTML = siteContent["contact"]["address"];

let contactP2 = document.querySelector("body > div > section.contact > p:nth-child(3)");

contactP2.innerHTML = siteContent["contact"]["phone"];

let contactP3 = document.querySelector("body > div > section.contact > p:nth-child(4)");

contactP3.innerHTML = siteContent["contact"]["email"];

let footerContent = document.querySelector("footer p");
footerContent.innerHTML = siteContent["footer"]["copyright"];