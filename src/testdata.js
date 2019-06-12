let menu = [
  {
    name: "Homepage",
    type: "link",
    adresee: "/Homepage"
  },
  {
    name: "Productdetail",
    type: "link",
    adresee: "/Productdetail"
  },
  {
    name: "productListe",
    type: "link",
    adresee: "/productListe"
  },
  {
    name: "tunnel",
    type: "link",
    adresee: "/tunnel"
  },
  {
    name: "DataTable",
    type: "link",
    adresee: "/DataTable"
  },
  {
    name: 'open',
    type: 'dropdown',
    childrens: [
      {
        name: "link1",
        adresee: "#link1"
      },
      {
        name: "link2",
        adresee: "#link2"
      },
      {
        name: "link3",
        adresee: "#link3"
      }
    ]
  },
  
  {
    name:"web logo",
    type:"logo",
    src:"data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMTI3Ljk4IDIwMTYuODciIGZpbGw9IiM0MWUwZmQiPgogIDxwYXRoICBkPSJNODg4IDExMTkuMTdjMTYtMzIuNjIgMzIuODQtNjUuMzcgNTAuMTctOTcuMzVsLjE1LS4yNyAxOC4zOS0zNS42OCAyNy4xNi00NSAuMTctLjI5YzEwLjE0LTE3LjI2IDIwLjY2LTM0LjY4IDMxLjI3LTUxLjc4bDE4LjY5LTMwLjg3YzI0Ljg4LTQxLjE5IDQ0Ljg4LTcxLjIzIDc2LjQzLTExNC43NiAxNy0yMy40MyAzMy4xMi00NCA1OC42Ni03NS45MmwuMDYtLjA2IDEuMjYtMS41OS40OS0uNjNjMTAuMzctMTMuMjIgMjAuODQtMjYuMjUgMzEuMTEtMzguNzNsLjM0LS40Mi4yLS4yNWMyMy44My0yOS41MSA0OC4xMi01OS4xMyA3Mi4xOS04OGw5LjU3LTExLjQ4VjM1Ni41NEgxMjY3Yy05LjIzLTguNjgtMTguNjYtMTcuMy0yOC4wOC0yNS42OS03Ni4zMi02Ny43Mi0xNTIuNDMtMTIwLjg1LTIyNi4yNy0xNTcuNzktNzUuNzEtMzcuOTItMTQ1LjYzLTU3LjE0LTIwNy44LTU3LjE0LTQ0LjM5IDAtODQuMDYgOS45NC0xMTcuOTEgMjkuNTMtMzIuNTUgMTguODQtNTkuOSA0Ni45MS04MS4zMSA4My40NC0yMC4wNiAzNC4yMy0zNC44NCA3NS44OS00My45NSAxMjMuODEtMTcuNTQgOTIuMzctMTMuNzQgMjA4IDExIDMzNC4zNCAzLjEyIDE1LjkgNi41NiAzMiAxMC4yNSA0OC0xOS43NCA2LTM4LjkxIDEyLjE4LTU3LjEzIDE4LjUzLTExOS4yNiA0MS41OC0yMTkgOTUuOTEtMjg4LjQyIDE1Ny4xNC0zNiAzMS43MS02My44NCA2NS4yMy04Mi44OSA5OS42Mi0yMC4yNCAzNi41Ny0zMC41MSA3NC4wOC0zMC41MSAxMTEuNDkgMCA3NSA0MS41NSAxNTEgMTIwLjE1IDIxOS45NCA3NCA2NC45MyAxNzguNjUgMTIxLjYyIDMwMi41NSAxNjQgMTEuNTEgMy45MSAyMy4yMiA3LjcxIDM1IDExLjM0LTQuMTIgMTcuOTMtNy45MyAzNi0xMS4zNiA1NC0yMy41NiAxMjQuMDgtMjYuMzEgMjM3LjYyLTggMzI4LjM1IDkuNTEgNDcgMjQuNjEgODcuODkgNDQuODkgMTIxLjU3IDIxLjU2IDM1LjggNDguOTMgNjMuNDQgODEuMzQgODIuMTMgMzQuMTUgMTkuNjkgNzQuMzQgMjkuNjcgMTE5LjQ1IDI5LjY3IDYxLjQyIDAgMTMwLjA5LTE4LjIxIDIwNC4xMS01NC4xMyA3Mi41Ni0zNS4yMSAxNDYuNjMtODUuNjQgMjIwLjEzLTE0OS44OSAxMS4zMy05LjkgMjMtMjAuNDkgMzQuNjYtMzEuNTNoMTcuNDF2LTE3NC4zOWwtNi4zNC03LjgtMy0zLjY3LTc5LjgyLTk4LjU1LTQ0LjM1LTU0Ljc1Yy0yMi4zOS0yNy42NC01OC4yNS03OC43OS0xMDEtMTQ0LTM0LTUxLjg0LTU4Ljc2LTkzLjQ3LTcwLjUtMTEzLjYzbC0xLjI4LTIuMjFjLTIwLjQ5LTM1LjMzLTM1LjcxLTYzLjc5LTQ3LjkzLTg2LjY0LTE1LjMtMjguNjMtMzAuMzktNTcuODctNDQuOTEtODdsMi42Ni01LjE3em0tODAuODYtMTcyLjg5Yy0xMy41My0zNC43LTI1LjkyLTY5LjEzLTM3LTEwMi44MSAzNC41Ny03LjEzIDcwLjUxLTEzLjUzIDEwNy4zMi0xOS4xMS0xMi4yOCAyMC4xMS0yNC4zNCA0MC40MS0zNiA2MC42NHMtMjMuMTIgNDAuNjktMzQuMzIgNjEuMjh6bS0zOC4yNSA0NjIuMWMxMS40NS0zNC44NiAyNC4zMS03MC41NiAzOC4zOS0xMDYuNTkgMTEuMjkgMjAuNyAyMi44NyA0MS4zIDM0LjU4IDYxLjUzIDEyLjI3IDIxLjE5IDI1IDQyLjQ4IDM3Ljk1IDYzLjU4LTM4LjQ2LTUuMzItNzUuNjItMTEuNTMtMTEwLjkyLTE4LjUxek03MDcuMTggMzk3LjE2YzktNjEuNzQgMjkuMTQtMTA1Ljg3IDU1LjM3LTEyMS4wNiAxMC44OS02LjMxIDI1LjM0LTkuNSA0Mi45My05LjUgMzguNDcgMCA4OC4yNCAxNS4xIDE0My45MSA0My42NyA2MC4zNCAzMSAxMjUuNzcgNzcuMTEgMTg5LjIyIDEzMy40NXE1LjkgNS4yNCAxMi4wNyAxMC44OWMtNTUuODEgNjEuNzEtMTEwLjgxIDEzMC4yOC0xNjMuNjggMjA0LjEtOTAuMDggOC44LTE3Ni42OCAyMS45NC0yNTcuNzYgMzkuMTEtMi45My0xMi44NC01LjY4LTI1Ljc1LTguMi0zOC41bC0uMjQtMS4zMmMtMTkuMzMtOTguNzYtMjQuMDQtMTg5LTEzLjYyLTI2MC44NHptMTEuMzEgNzI3Yy0zOC4xIDg0LTcwLjQ4IDE2Ny4xNi05Ni4zNyAyNDcuNDYtOS0yLjgtMTcuODktNS43Mi0yNi42NS04LjctMTAzLTM1LjIxLTE4OC43OS04MC42Ni0yNDguMDgtMTMxLjQzLTQ1LjM3LTM4Ljg1LTcyLjQ1LTc5LjgzLTcyLjQ1LTEwOS42MyAwLTMwLjU5IDI3LjA5LTcwIDc0LjM0LTEwOC4yIDU1LTQ0LjQ3IDEzMy4yNy04NS4xMSAyMjYuMTktMTE3LjUgMTUuNzktNS40OCAzMS44Ny0xMC43MyA0OC0xNS42NCAyNS41MyA3OS4xMyA1Ny40OCAxNjAuOTkgOTUuMDEgMjQzLjYzem0uMTIgNDc0LjkyYzIuODYtMTUgNi0zMC4wOSA5LjQzLTQ1LjA5IDgwIDE2LjM3IDE2Ny41OSAyOC43MSAyNjAuNzUgMzYuNzEgNTMuMzggNzQuMzQgMTA4Ljg0IDE0My4zNyAxNjUuMDUgMjA1LjQ0LTYuOTQgNi4zOS0xMy45NCAxMi42OC0yMC45IDE4Ljc5LTgxLjM3IDcxLjEzLTE2My4wOSAxMjIuNTUtMjM2LjI4IDE0OC43MWwtMS41Mi41NGMtMzIuOCAxMS41OC02Mi4wOSAxNy40NS04NyAxNy40NS0xOC4zOCAwLTMzLjIyLTMuMTgtNDQuMTEtOS40Ni0yNi41MS0xNS4yOS00Ny4xNC01OC40Ni01Ni42LTExOC40NS0xMS4wNi02OS45MS03LjE5LTE1Ny45NyAxMS4xNy0yNTQuNjV6IgogICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyMy45OCAtMTE1LjkyKSIgaWQ9Il9Hcm91cF8iIGRhdGEtbmFtZT0iJmx0O0dyb3VwJmd0OyIgLz4KICA8cGF0aCBkPSJNMjE5NS4wNyAxMjA1LjFxLTU2LjI2LTEwMy40NS0xNjUuNTQtMTM0LjIzYTIuODUgMi44NSAwIDAgMS0xLjc5LTIuODUgMyAzIDAgMCAxIDEuMzctMi42OGM1NC4yNC0zMC4xNiA5NS45My03My4xMSAxMjUuMTUtMTI3LjlxNDQuMTUtODIuODkgNDQuMTYtMTk5LjQ5YzAtMTI4LjI1LTMyLjQ1LTIyMy42NS05Ny4wNi0yODcuMTFzLTE1MC42Mi05NS0yNTcuNy05NWgtNTc4LjM1Yy0xLjI1IDAtMi4yNyAxLjMxLTIuMjcgMi45M1YxODk0LjNjMCAxLjYyIDEgMi45MyAyLjI3IDIuOTNoNTQ2LjU3cTExNS40MiAwIDE5OS4xMS0zMy42OWM1NS45MS0yMi40MiAxMDEuNC01Mi42OCAxMzcuMjEtOTAuNjhzNjEuOTItODMuMzMgNzguNjYtMTM2YzE2Ljc0LTUyLjIzIDI1LjEtMTA4LjggMjUuMS0xNjkuMjQuMDQtMTA1LjM3LTE5LjA4LTE5Mi41Ny01Ni44OS0yNjIuNTJ6bS03MjIuMzItNjI4YzAtMS42MiAxLTIuOTMgMi4yNy0yLjkzaDMzOS40NmM1Ni45NSAwIDEwMC41MSAxNiAxMzAuNjUgNDcuNTVzNDUuMiA4Ni40IDQ1LjIgMTY0LjE4YzAgNjkuMTgtMTYuNzQgMTIxLjkyLTUwLjI1IDE1OS4wOHMtNzUuMzcgNTUuMzItMTI1LjYzIDU1LjMySDE0NzVjLTEuMjUgMC0yLjI3LTEuMzEtMi4yNy0yLjkzem01MTguMTYgMTAzNS44Yy0zNC44NiA0Mi43Ni04NC40MSA2NC0xNDguMDcgNjRIMTQ3NWMtMS4yNSAwLTIuMjctMS4zMS0yLjI3LTIuOTN2LTQ3Ni40YzAtMS42MiAxLTIuOTMgMi4yNy0yLjkzaDM2Ny44MmM2My42NiAwIDExMi41NyAxOS44OSAxNDguMDcgNjEuMzVzNTIuOTMgOTkuODIgNTIuOTMgMTc2LjNjLjAyIDc3Ljc3LTE3Ljc2IDEzOC4yNy01Mi45MSAxODAuNjF6IgogICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyMy45OCAtMTE1LjkyKSIgLz48L3N2Zz4K"
  },
  {
    name:"any icon",
    type:"icon",
    src:"https://image.flaticon.com/icons/svg/1670/1670670.svg"
  }
]
let images=[
  {
      title:"First slide label",
      discribtion:"Nulla vitae elit libero, a pharetra augue mollis interdum.",
      src:"https://s7d2.scene7.com/is/image/PetSmart/5251722?$sclp-prd-main_large$"
  },
  {
      title:"Second slide label",
      discribtion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      src:"https://s7d2.scene7.com/is/image/PetSmart/4034664?$sclp-prd-main_large$"
  },
  {
      title:"Third slide label",
      discribtion:"Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
      src:"https://s7d2.scene7.com/is/image/PetSmart/4031550?$sclp-prd-main_large$"
  }
]
let products = [
  {
    src: "https://d2j7t5u190oygv.cloudfront.net/img/p/3/9/5/7/2/39572-large_default.jpg",
    name: "TEMPERETED GLASS LENOVO A2020",
    description: "TEMPERETED GLASS SAMSUNG LENOVO A2020 Protecteur d'écran en verre.",
    price: 2000 ,
    avalable: true
  },
  {
    src: "https://d2j7t5u190oygv.cloudfront.net/img/p/3/9/5/6/5/39565-large_default.jpg",
    name: "TEMPERETED GLASS EXPRESS PRIME",
    description: "TEMPERETED GLASS SAMSUNG EXPRESS PRIME Protecteur d'écran en verre.",
    price: 2100 ,
    avalable: true
  },
  {
    src: "https://d2j7t5u190oygv.cloudfront.net/img/p/3/9/5/7/8/39578-large_default.jpg",
    name: "TEMPERETED GLASS LENOVO K5 PLUS",
    description: "TEMPERETED GLASS SAMSUNG LENOVO K5 PLUS Protecteur d'écran en verre.",
    price: 2200 ,
    avalable: false
  },
  {
    src: "https://d2j7t5u190oygv.cloudfront.net/img/p/3/9/5/7/2/39572-large_default.jpg",
    name: "TEMPERETED GLASS LENOVO A2020",
    description: "TEMPERETED GLASS SAMSUNG LENOVO A2020 Protecteur d'écran en verre.",
    price: 2000 ,
    avalable: true
  },
  {
    src: "https://d2j7t5u190oygv.cloudfront.net/img/p/3/9/5/6/5/39565-large_default.jpg",
    name: "TEMPERETED GLASS EXPRESS PRIME",
    description: "TEMPERETED GLASS SAMSUNG EXPRESS PRIME Protecteur d'écran en verre.",
    price: 2100 ,
    avalable: true
  },
  {
    src: "https://d2j7t5u190oygv.cloudfront.net/img/p/3/9/5/7/8/39578-large_default.jpg",
    name: "TEMPERETED GLASS LENOVO K5 PLUS",
    description: "TEMPERETED GLASS SAMSUNG LENOVO K5 PLUS Protecteur d'écran en verre.",
    price: 2200 ,
    avalable: false
  },
  {
    src: "https://d2j7t5u190oygv.cloudfront.net/img/p/3/9/5/7/2/39572-large_default.jpg",
    name: "TEMPERETED GLASS LENOVO A2020",
    description: "TEMPERETED GLASS SAMSUNG LENOVO A2020 Protecteur d'écran en verre.",
    price: 2000 ,
    avalable: true
  },
  {
    src: "https://d2j7t5u190oygv.cloudfront.net/img/p/3/9/5/6/5/39565-large_default.jpg",
    name: "TEMPERETED GLASS EXPRESS PRIME",
    description: "TEMPERETED GLASS SAMSUNG EXPRESS PRIME Protecteur d'écran en verre.",
    price: 2100 ,
    avalable: true
  },
  {
    src: "https://d2j7t5u190oygv.cloudfront.net/img/p/3/9/5/7/8/39578-large_default.jpg",
    name: "TEMPERETED GLASS LENOVO K5 PLUS",
    description: "TEMPERETED GLASS SAMSUNG LENOVO K5 PLUS Protecteur d'écran en verre.",
    price: 2200 ,
    avalable: false
  },
  {
    src: "https://d2j7t5u190oygv.cloudfront.net/img/p/3/9/5/7/2/39572-large_default.jpg",
    name: "TEMPERETED GLASS LENOVO A2020",
    description: "TEMPERETED GLASS SAMSUNG LENOVO A2020 Protecteur d'écran en verre.",
    price: 2000 ,
    avalable: true
  },
  {
    src: "https://d2j7t5u190oygv.cloudfront.net/img/p/3/9/5/6/5/39565-large_default.jpg",
    name: "TEMPERETED GLASS EXPRESS PRIME",
    description: "TEMPERETED GLASS SAMSUNG EXPRESS PRIME Protecteur d'écran en verre.",
    price: 2100 ,
    avalable: true
  },
  {
    src: "https://d2j7t5u190oygv.cloudfront.net/img/p/3/9/5/7/8/39578-large_default.jpg",
    name: "TEMPERETED GLASS LENOVO K5 PLUS",
    description: "TEMPERETED GLASS SAMSUNG LENOVO K5 PLUS Protecteur d'écran en verre.",
    price: 2200 ,
    avalable: false
  },
  {
    src: "https://d2j7t5u190oygv.cloudfront.net/img/p/3/9/5/7/2/39572-large_default.jpg",
    name: "TEMPERETED GLASS LENOVO A2020",
    description: "TEMPERETED GLASS SAMSUNG LENOVO A2020 Protecteur d'écran en verre.",
    price: 2000 ,
    avalable: true
  },
  {
    src: "https://d2j7t5u190oygv.cloudfront.net/img/p/3/9/5/6/5/39565-large_default.jpg",
    name: "TEMPERETED GLASS EXPRESS PRIME",
    description: "TEMPERETED GLASS SAMSUNG EXPRESS PRIME Protecteur d'écran en verre.",
    price: 2100 ,
    avalable: true
  },
  {
    src: "https://d2j7t5u190oygv.cloudfront.net/img/p/3/9/5/7/8/39578-large_default.jpg",
    name: "TEMPERETED GLASS LENOVO K5 PLUS",
    description: "TEMPERETED GLASS SAMSUNG LENOVO K5 PLUS Protecteur d'écran en verre.",
    price: 2200 ,
    avalable: false
  },
  {
    src: "https://d2j7t5u190oygv.cloudfront.net/img/p/3/9/5/7/2/39572-large_default.jpg",
    name: "TEMPERETED GLASS LENOVO A2020",
    description: "TEMPERETED GLASS SAMSUNG LENOVO A2020 Protecteur d'écran en verre.",
    price: 2000 ,
    avalable: true
  },
  {
    src: "https://d2j7t5u190oygv.cloudfront.net/img/p/3/9/5/6/5/39565-large_default.jpg",
    name: "TEMPERETED GLASS EXPRESS PRIME",
    description: "TEMPERETED GLASS SAMSUNG EXPRESS PRIME Protecteur d'écran en verre.",
    price: 2100 ,
    avalable: true
  },
  {
    src: "https://d2j7t5u190oygv.cloudfront.net/img/p/3/9/5/7/8/39578-large_default.jpg",
    name: "TEMPERETED GLASS LENOVO K5 PLUS",
    description: "TEMPERETED GLASS SAMSUNG LENOVO K5 PLUS Protecteur d'écran en verre.",
    price: 2200 ,
    avalable: false
  },
]
let footer=[
  {
      type:"socialMedia",
      list:[
          {
              iconClass:"fab fa-facebook-f white-text mr-4",
              link:"www.facebook.com"
          },
          {
              iconClass:"fab fa-twitter white-text mr-4",
              link:"www.twitter.com"
          },
          {
              iconClass:"fab fa-google-plus-g white-text mr-4",
              link:"www.google.tn"
          },
          {
              iconClass:"fab fa-linkedin-in white-text mr-4",
              link:"www.linkedin.com"
          },
          {
              iconClass:"fab fa-instagram white-text",
              link:"www.instagram.com"
          },
      ]
  },
  {
      name:"COMPANY NAME",
      type:"paragraf",
      content:"Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
      name:"Products",
      type:"listOfLinks",
      list:[
          {
              name:"MDBootstrap",
              link:"#!"
          },
          {
              name:"MDWordPress",
              link:"#!"
          },
          {
              name:"BrandFlow",
              link:"#!"
          },
          {
              name:"Bootstrap Angular",
              link:"#!"
          },
      ]
  },
  {
      name:"Useful links",
      type:"listOfLinks",
      list:[
          {
              name:"Your Account",
              link:"#!"
          },
          {
              name:"Become an Affiliate",
              link:"#!"
          },
          {
              name:"Shipping Rates",
              link:"#!"
          },
          {
              name:"Help",
              link:"#!"
          },
      ]
  },
  {
      name:"Contact",
      type:"listOfIcons",
      list:[
          {
              name:" New York, NY 10012, US",
              iconClass:"fas fa-home mr-3"
          },
          {
              name:" info@example.com",
              iconClass:"fas fa-envelope mr-3"
          },
          {
              name:" + 01 234 567 88",
              iconClass:"fas fa-phone mr-3"
          },
          {
              name:"+ 01 234 567 89",
              iconClass:"fas fa-print mr-3"
          },
      ]
  }
]
let discountProduct=[
  {
      name:"Festina Montre Femme – Silver - Garantie 2 Ans",
      src:"https://tn.jumia.is/b9vGKs3OcfTu9y_-ZVFcEPeocMg=/fit-in/500x500/filters:fill(white):sharpen(1,0,false):quality(100)/product/20/6101/1.jpg?4324",
      discount:"-50%",
      price:160  ,
      odldPrice:320  
  },
  {
      name:"Fossil Montre Homme - Cuir - fs5280 - Garantie 2 Ans",
      src:"https://tn.jumia.is/THRYxLOjULe2VR8z1eCCX3X1SDI=/fit-in/500x500/filters:fill(white):sharpen(1,0,false):quality(100)/product/82/306/1.jpg?0944",
      discount:"-30%",
      price:438  ,
      odldPrice:625  
  },
  {
      name:"Festina Montre Homme - Fond Noir - Garantie 2 Ans",
      src:"https://tn.jumia.is/ZJqcu71hziRYbU0aqS8RuJIOeHs=/fit-in/500x500/filters:fill(white):sharpen(1,0,false):quality(100)/product/49/3531/1.jpg?7084",
      discount:"-50%",
      price:235  ,
      odldPrice:470  
  },
  {
      name:"TOMMY HILFIGER Montre Homme - 1791243 - Garantie 2 Ans",
      src:"https://tn.jumia.is/59d1_fs0PoLsN-VMOyl19lTZZcw=/fit-in/500x500/filters:fill(white):sharpen(1,0,false):quality(100)/product/27/244/1.jpg?4965",
      discount:"-40%",
      price:373  ,
      odldPrice:621  
  },
  {
      name:"TOMMY HILFIGER Montre Homme - 1791242 - Garantie 2 Ans",
      src:"https://tn.jumia.is/wj2ww14eRcD3tl3MbUW_BUgs7Z4=/fit-in/500x500/filters:fill(white):sharpen(1,0,false):quality(100)/product/94/244/1.jpg?0013",
      discount:"-40%",
      price:373  ,
      odldPrice:621  
  },
  {
      name:"Fossil Montre Homme - FS5440 - Marron - Garantie 2 Ans",
      src:"https://tn.jumia.is/m7Jjk98fZ6UnD264SZ_CWy8LZQg=/fit-in/500x500/filters:fill(white):sharpen(1,0,false):quality(100)/product/24/817/1.jpg?2144",
      discount:"-20%",
      price:396  ,
      odldPrice:495  
  }
]
const sidemenu=[
  {
    "name":"pere1",
    "chiledrens":[
            {
              "name":"fils1",
              "chiledrens":[
                        {"name":"gfils1",
                          "chiledrens":[]},
                        {"name":"gfils2",
                          "chiledrens":[]}
                      ]
            },
            {
              "name":"fils2",
              "chiledrens":[
                {"name":"gfils1",
                  "chiledrens":[]},
                {"name":"gfils2",
                  "chiledrens":[]}
              ]
            },
            {
              "name":"fils3",
              "chiledrens":[
                {"name":"gfils1",
                  "chiledrens":[]},
                {"name":"gfils2",
                  "chiledrens":[]}
              ]
            }

          ]
  },
  {
    "name":"pere2",
    "chiledrens":[
      {
        "name":"fils1",
        "chiledrens":[
          {"name":"gfils1",
            "chiledrens":[]},
          {"name":"gfils2",
            "chiledrens":[]}
        ]
      },
      {
        "name":"fils2",
        "chiledrens":[
          {"name":"gfils1",
            "chiledrens":[]},
          {"name":"gfils2",
            "chiledrens":[]}
        ]
      },
      {
        "name":"fils3",
        "chiledrens":[
          {"name":"gfils1",
            "chiledrens":[]},
          {"name":"gfils2",
            "chiledrens":[]}
        ]
      }

    ]
  },
  {
    "name":"pere3",
    "chiledrens":[
      {
        "name":"fils1",
        "chiledrens":[
          {"name":"gfils1",
            "chiledrens":[]},
          {"name":"gfils2",
            "chiledrens":[]}
        ]
      },
      {
        "name":"fils2",
        "chiledrens":[
          {"name":"gfils1",
            "chiledrens":[]},
          {"name":"gfils2",
            "chiledrens":[]}
        ]
      },
      {
        "name":"fils3",
        "chiledrens":[
          {"name":"gfils1",
            "chiledrens":[]},
          {"name":"gfils2",
            "chiledrens":[]}
        ]
      }

    ]
  }
];
const ZoomIMG={src : 'https://images.unsplash.com/photo-1444065381814-865dc9da92c0'}
const BigSaleSRC=[
  [
    {
      src:"https://static.jumia.com.tn/cms/campaign-TN/2019/MW19/Sliders/DB/TN_DB_MW_TreasureHunt.jpg",
      link:"www.google.com"
    },
    {
        src:"https://static.jumia.com.tn/cms/campaign-TN/2019/MW19/Sliders/DB/TN_DB_MW_FS_07042019.jpg",
        link:"www.google.com"
    }
  ],
  [
    {
      src:"https://static.jumia.com.tn/cms/campaign-TN/2019/MW19/Sliders/DB/TN_DB_MW_TreasureHunt.jpg",
      link:"www.google.com"
    }
  ],
  [
    {
      src:"https://static.jumia.com.tn/cms/campaign-TN/2019/MW19/Sliders/DB/TN_DB_MW_TreasureHunt.jpg",
      link:"www.google.com"
    },
    {
      src:"https://static.jumia.com.tn/cms/campaign-TN/2019/MW19/Sliders/DB/TN_DB_MW_TreasureHunt.jpg",
      link:"www.google.com"
    },
    {
      src:"https://static.jumia.com.tn/cms/campaign-TN/2019/MW19/Sliders/DB/TN_DB_MW_TreasureHunt.jpg",
      link:"www.google.com"
    },
    {
      src:"https://static.jumia.com.tn/cms/campaign-TN/2019/MW19/Sliders/DB/TN_DB_MW_TreasureHunt.jpg",
      link:"www.google.com"
    }
  ],
  [
    {
      src:"https://static.jumia.com.tn/cms/campaign-TN/2019/MW19/Sliders/DB/TN_DB_MW_TreasureHunt.jpg",
      link:"www.google.com"
    },
    {
      src:"https://static.jumia.com.tn/cms/campaign-TN/2019/MW19/Sliders/DB/TN_DB_MW_TreasureHunt.jpg",
      link:"www.google.com"
    },
    {
      src:"https://static.jumia.com.tn/cms/campaign-TN/2019/MW19/Sliders/DB/TN_DB_MW_TreasureHunt.jpg",
      link:"www.google.com"
    }
  ]
]
const CarouselPhoto=[


  {
      src:"http://lorempixel.com/output/cats-q-c-640-480-3.jpg",
      paragraph:"Legend 3"
  },
  {
      src:"http://lorempixel.com/output/cats-q-c-640-480-4.jpg",
      paragraph:"Legend 4"
  },
  {
      src:"http://lorempixel.com/output/cats-q-c-640-480-5.jpg",
      paragraph:"Legend 5"
  },
  {
      src:"http://lorempixel.com/output/cats-q-c-640-480-6.jpg",
      paragraph:"Legend 6"
  },
  {
      src:"http://lorempixel.com/output/cats-q-c-640-480-7.jpg",
      paragraph:"Legend 7"
  },
  {
      src:"http://lorempixel.com/output/cats-q-c-640-480-8.jpg",
      paragraph:"Legend 8"
  },
  {
      src:"http://lorempixel.com/output/cats-q-c-640-480-9.jpg",
      paragraph:"Legend 9"
  },
  {
      src:"http://lorempixel.com/output/cats-q-c-640-480-10.jpg",
      paragraph:"Legend 10"
  },
  {
      src:"http://lorempixel.com/output/cats-q-c-640-480-11.jpg",
      paragraph:"Legend 11"
  },
  {
      src:"http://lorempixel.com/output/cats-q-c-640-480-12.jpg",
      paragraph:"Legend 12"
  },
  {
      src:"http://lorempixel.com/output/cats-q-c-640-480-13.jpg",
      paragraph:"Legend 13"
  },
  {
      src:"http://lorempixel.com/output/cats-q-c-640-480-14.jpg",
      paragraph:"Legend 14"
  }
]
let ProductImagelist=[
  "https://images.pexels.com/photos/949586/pexels-photo-949586.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/556667/pexels-photo-556667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/1040626/pexels-photo-1040626.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/207962/pexels-photo-207962.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
]
const CategorieTab=[
{ name:"liste",
   category: [
    {
      name: "product k",
      list: [{name:"product 1",liink:"#"}, {name:"product 2",liink:"#"}, {name:"product 3",liink:"#"}, {name:"product 7",liink:"#"}, {name:"product 58",liink:"#"}, {name:"product 8",liink:"#"},{name:"product 11",liink:"#"}]
    },
    {
      name: "product j",
      list: [{name:"product 1",liink:"#"}, {name:"product 2",liink:"#"}, {name:"product 3",liink:"#"}, {name:"product 7",liink:"#"}, {name:"product 58",liink:"#"}, {name:"product 8",liink:"#"},{name:"product 11",liink:"#"}]
    },
    {
      name: "product ll",
      list: [{name:"product 1",liink:"#"}, {name:"product 2",liink:"#"}, {name:"product 3",liink:"#"}, {name:"product 7",liink:"#"}, {name:"product 58",liink:"#"}, {name:"product 8",liink:"#"},{name:"product 11",liink:"#"}]
    },
    {
      name: "product kk",
      list: [{name:"product 1",liink:"#"}, {name:"product 2",liink:"#"}, {name:"product 3",liink:"#"}, {name:"product 7",liink:"#"}, {name:"product 58",liink:"#"}, {name:"product 8",liink:"#"},{name:"product 11",liink:"#"}]
    },
    {
      name: "product 154",
      list: [{name:"product 1",liink:"#"}, {name:"product 2",liink:"#"}, {name:"product 3",liink:"#"}, {name:"product 7",liink:"#"}, {name:"product 58",liink:"#"}, {name:"product 8",liink:"#"},{name:"product 11",liink:"#"}]
    },
    {
      name: "product 0000",
      list: [{name:"product 1",liink:"#"}, {name:"product 2",liink:"#"}, {name:"product 3",liink:"#"}, {name:"product 7",liink:"#"}, {name:"product 58",liink:"#"}, {name:"product 8",liink:"#"},{name:"product 11",liink:"#"}]
    },
    {
      name: "product k",
      list: [{name:"product 1",liink:"#"}, {name:"product 2",liink:"#"}, {name:"product 3",liink:"#"}, {name:"product 7",liink:"#"}, {name:"product 58",liink:"#"}, {name:"product 8",liink:"#"},{name:"product 11",liink:"#"}]
    },
    {
      name: "product j",
      list: [{name:"product 1",liink:"#"}, {name:"product 2",liink:"#"}, {name:"product 3",liink:"#"}, {name:"product 7",liink:"#"}, {name:"product 58",liink:"#"}, {name:"product 8",liink:"#"},{name:"product 11",liink:"#"}, {name:"product 7",liink:"#"}, {name:"product 58",liink:"#"}, {name:"product 8",liink:"#"},{name:"product 11",liink:"#"}]
    },
    {
      name: "product ll",
      list: [{name:"product 1",liink:"#"}, {name:"product 2",liink:"#"}, {name:"product 3",liink:"#"}]
    },
    {
      name: "product kk",
      list: [{name:"product 1",liink:"#"}, {name:"product 2",liink:"#"}, {name:"product 3",liink:"#"}, {name:"product 7",liink:"#"}, {name:"product 58",liink:"#"}, {name:"product 8",liink:"#"},{name:"product 11",liink:"#"}, {name:"product 7",liink:"#"}, {name:"product 58",liink:"#"}, {name:"product 8",liink:"#"},{name:"product 11",liink:"#"}]
    },
    {
      name: "product 154",
      list: [{name:"product 1",liink:"#"}, {name:"product 2",liink:"#"}, {name:"product 3",liink:"#"}, {name:"product 7",liink:"#"}, {name:"product 58",liink:"#"}, {name:"product 8",liink:"#"},{name:"product 11",liink:"#"}]
    },
  ]

},
  { name:"liste",
   category: [
    {
      name: "product k",
      list: [{name:"product 1",liink:"#"}, {name:"product 2",liink:"#"}, {name:"product 3",liink:"#"}, {name:"product 7",liink:"#"}, {name:"product 58",liink:"#"}, {name:"product 8",liink:"#"},{name:"product 11",liink:"#"}]
    },
    {
      name: "product j",
      list: [{name:"product 1",liink:"#"}, {name:"product 2",liink:"#"}, {name:"product 3",liink:"#"}, {name:"product 7",liink:"#"}, {name:"product 58",liink:"#"}, {name:"product 8",liink:"#"},{name:"product 11",liink:"#"}]
    },
    {
      name: "product ll",
      list: [{name:"product 1",liink:"#"}, {name:"product 2",liink:"#"}, {name:"product 3",liink:"#"}, {name:"product 7",liink:"#"}, {name:"product 58",liink:"#"}, {name:"product 8",liink:"#"},{name:"product 11",liink:"#"}]
    },
    {
      name: "product kk",
      list: [{name:"product 1",liink:"#"}, {name:"product 2",liink:"#"}, {name:"product 3",liink:"#"}, {name:"product 7",liink:"#"}, {name:"product 58",liink:"#"}, {name:"product 8",liink:"#"},{name:"product 11",liink:"#"}]
    },
    {
      name: "product 154",
      list: [{name:"product 1",liink:"#"}, {name:"product 2",liink:"#"}, {name:"product 3",liink:"#"}, {name:"product 7",liink:"#"}, {name:"product 58",liink:"#"}, {name:"product 8",liink:"#"},{name:"product 11",liink:"#"}]
    },
    {
      name: "product 0000",
      list: [{name:"product 1",liink:"#"}, {name:"product 2",liink:"#"}, {name:"product 3",liink:"#"}, {name:"product 7",liink:"#"}, {name:"product 58",liink:"#"}, {name:"product 8",liink:"#"},{name:"product 11",liink:"#"}]
    },
    {
      name: "product k",
      list: [{name:"product 1",liink:"#"}, {name:"product 2",liink:"#"}, {name:"product 3",liink:"#"}, {name:"product 7",liink:"#"}, {name:"product 58",liink:"#"}, {name:"product 8",liink:"#"},{name:"product 11",liink:"#"}]
    },
    {
      name: "product j",
      list: [{name:"product 1",liink:"#"}, {name:"product 2",liink:"#"}, {name:"product 3",liink:"#"}, {name:"product 7",liink:"#"}, {name:"product 58",liink:"#"}, {name:"product 8",liink:"#"},{name:"product 11",liink:"#"}, {name:"product 7",liink:"#"}, {name:"product 58",liink:"#"}, {name:"product 8",liink:"#"},{name:"product 11",liink:"#"}]
    },
    {
      name: "product ll",
      list: [{name:"product 1",liink:"#"}, {name:"product 2",liink:"#"}, {name:"product 3",liink:"#"}]
    },
    {
      name: "product kk",
      list: [{name:"product 1",liink:"#"}, {name:"product 2",liink:"#"}, {name:"product 3",liink:"#"}, {name:"product 7",liink:"#"}, {name:"product 58",liink:"#"}, {name:"product 8",liink:"#"},{name:"product 11",liink:"#"}, {name:"product 7",liink:"#"}, {name:"product 58",liink:"#"}, {name:"product 8",liink:"#"},{name:"product 11",liink:"#"}]
    },
    {
      name: "product 154",
      list: [{name:"product 1",liink:"#"}, {name:"product 2",liink:"#"}, {name:"product 3",liink:"#"}, {name:"product 7",liink:"#"}, {name:"product 58",liink:"#"}, {name:"product 8",liink:"#"},{name:"product 11",liink:"#"}]
    },
  ]

},
 { name:"liste",
 category: [
  {
    name: "product k",
    list: [{name:"product 1",liink:"#"}, {name:"product 2",liink:"#"}, {name:"product 3",liink:"#"}, {name:"product 7",liink:"#"}, {name:"product 58",liink:"#"}, {name:"product 8",liink:"#"},{name:"product 11",liink:"#"}]
  },
  {
    name: "product j",
    list: [{name:"product 1",liink:"#"}, {name:"product 2",liink:"#"}, {name:"product 3",liink:"#"}, {name:"product 7",liink:"#"}, {name:"product 58",liink:"#"}, {name:"product 8",liink:"#"},{name:"product 11",liink:"#"}]
  },
  {
    name: "product ll",
    list: [{name:"product 1",liink:"#"}, {name:"product 2",liink:"#"}, {name:"product 3",liink:"#"}, {name:"product 7",liink:"#"}, {name:"product 58",liink:"#"}, {name:"product 8",liink:"#"},{name:"product 11",liink:"#"}]
  },
  {
    name: "product kk",
    list: [{name:"product 1",liink:"#"}, {name:"product 2",liink:"#"}, {name:"product 3",liink:"#"}, {name:"product 7",liink:"#"}, {name:"product 58",liink:"#"}, {name:"product 8",liink:"#"},{name:"product 11",liink:"#"}]
  },
  {
    name: "product 154",
    list: [{name:"product 1",liink:"#"}, {name:"product 2",liink:"#"}, {name:"product 3",liink:"#"}, {name:"product 7",liink:"#"}, {name:"product 58",liink:"#"}, {name:"product 8",liink:"#"},{name:"product 11",liink:"#"}]
  },
  {
    name: "product 0000",
    list: [{name:"product 1",liink:"#"}, {name:"product 2",liink:"#"}, {name:"product 3",liink:"#"}, {name:"product 7",liink:"#"}, {name:"product 58",liink:"#"}, {name:"product 8",liink:"#"},{name:"product 11",liink:"#"}]
  },
  {
    name: "product k",
    list: [{name:"product 1",liink:"#"}, {name:"product 2",liink:"#"}, {name:"product 3",liink:"#"}, {name:"product 7",liink:"#"}, {name:"product 58",liink:"#"}, {name:"product 8",liink:"#"},{name:"product 11",liink:"#"}]
  },
  {
    name: "product j",
    list: [{name:"product 1",liink:"#"}, {name:"product 2",liink:"#"}, {name:"product 3",liink:"#"}, {name:"product 7",liink:"#"}, {name:"product 58",liink:"#"}, {name:"product 8",liink:"#"},{name:"product 11",liink:"#"}, {name:"product 7",liink:"#"}, {name:"product 58",liink:"#"}, {name:"product 8",liink:"#"},{name:"product 11",liink:"#"}]
  },
  {
    name: "product ll",
    list: [{name:"product 1",liink:"#"}, {name:"product 2",liink:"#"}, {name:"product 3",liink:"#"}]
  },
  {
    name: "product kk",
    list: [{name:"product 1",liink:"#"}, {name:"product 2",liink:"#"}, {name:"product 3",liink:"#"}, {name:"product 7",liink:"#"}, {name:"product 58",liink:"#"}, {name:"product 8",liink:"#"},{name:"product 11",liink:"#"}, {name:"product 7",liink:"#"}, {name:"product 58",liink:"#"}, {name:"product 8",liink:"#"},{name:"product 11",liink:"#"}]
  },
  {
    name: "product 154",
    list: [{name:"product 1",liink:"#"}, {name:"product 2",liink:"#"}, {name:"product 3",liink:"#"}, {name:"product 7",liink:"#"}, {name:"product 58",liink:"#"}, {name:"product 8",liink:"#"},{name:"product 11",liink:"#"}]
  },
]

}
 ]

const testTableData=[
[ "1" , 	"Alphabet puzzle", 	"2016/01/15" ,	"Done",	"1000","",""]	,
[ "2", 	"Layout for poster", 	"2016/01/31",	"Planned",	"1834","",""],	
[ "3", 	"Image creation", 	"2016/01/23",	"To Do",	"1500","",""]	,
[ "4", 	"Create font", 	"2016/02/26",	"Done",	"1200","",""]	,
[ "5", 	"Sticker production", 	"2016/02/18",	"Planned"	,"2100","",""],	
[ "6", 	"Glossy poster", 	"2016/03/17"	,"To Do",	"899"	,"",""],
[ "7", 	"Beer label", 	"2016/05/28",	"Confirmed",	"2499","",""],	
[ "8", 	"Shop sign"	, "2016/04/19",	"Offer"	,"1099","",""]	,
[ "9", 	"X-Mas decoration", 	"2016/10/31",	"Confirmed",	"1750","",""],	
[ "10", 	"Halloween invite"	, "2016/09/12"	,"Planned",	"400","",""]	,
[ "11", 	"Wedding announcement"	, "2016/07/09"	,"To Do",	"299","",""],
[ "12"	, "Member pasport", 	"2016/06/22",	"Offer",	"149"	,"",""],
[ "13"	, "Drink tickets", 	"2016/11/01",	"Confirmed"	,"199","",""],	
[ "14"	, "Album cover	", "2017/03/15",	"To Do",	"4999"	,"",""],
[ "15"	, "Shipment box", 	"2017/02/08"	,"Offer"	,"1399","",""]	,
[ "16"	, "Wooden puzzle", 	"2017/01/11",	"Done"	,"1000","",""]	,
[ "17"	, "Fashion Layout", 	"2016/01/30",	"Planned"	,"1834"	,"",""],
[ "18"	, "Toy creation", 	"2016/01/10",	"To Do",	"1550","",""]	,
[ "19"	, "Create stamps"	, "2016/02/26"	,"Done",	"1220","",""]	,
[ "20"	, "Sticker design", 	"2017/02/18",	"Planned"	,"2100","",""],	
[ "21"	, "Poster rock concert", 	"2017/04/17"	,"To Do"	,"899","",""],	
[ "22"	, "Wine label", 	"2017/05/28",	"Confirmed",	"2799","",""]	,
[ "23", "	Shopping bag"	, "2017/04/19"	,"Offer",	"1299","",""],
[ "24", 	"Decoration for Easter", 	"2017/10/31",	"Confirmed"	,"1650","",""],	
[ "25"	, "Saint Nicolas colorbook"	, "2017/09/12"	,"Planned",	"510","",""]	,
[ "26"	, "Wedding invites	", "2017/07/09",	"To Do"	,"399"	,"",""],
[ "27", 	"Member pasport", 	"2017/06/22",	"Offer"	,"249","",""]	,
[ "28", 	"Drink tickets"	, "2017/11/01"	,"Confirmed"	,"199","",""	],
[ "29", 	"Blue-Ray cover"	, "2018/03/15	","To Do",	"1999","",""]	,
[ "30"	, "TV carton", 	"2019/02/08",	"Offer",	"1369","https://myegy.to/","https://myegy.to/files/img/content/8/646/1558749261.200_300.jpg"]
]
let testTableDataColumn=[
{
  type:"input",
  inputType:"number",
  label:"Order"
},
{
type:"input",
inputType:"normal",
label:"Description"
},
{
type:"input",
inputType:"date",
label:"Deadline"
},
{
type:"input",
inputType:"normal",
label:"Status"
},
{
type:"input",
inputType:"normal",
label:"Amount"
},
{
  type:"input",
  inputType:"url",
  label:"web site",
},
{
  type:"img",
  inputType:"url",
  label:"image"
}
]
export {CategorieTab,footer,menu,images ,products,discountProduct,sidemenu,ZoomIMG,BigSaleSRC,CarouselPhoto,ProductImagelist,testTableData,testTableDataColumn}
