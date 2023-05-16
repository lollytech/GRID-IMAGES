const body = document.body;

const main = document.createElement("main")
const div = document.createElement("div");
const div2 = document.createElement("div");
const div3 = document.createElement("div");
const div4 = document.createElement("div");
const div5 = document.createElement("div");
const div6 = document.createElement("div");
const div7 = document.createElement("div");
const div8 = document.createElement("div");
const div9 = document.createElement("div");


const img = document.createElement("img")
const img2 = document.createElement("img")
const img3 = document.createElement("img")
const img4 = document.createElement("img")
const img5 = document.createElement("img")
const img6 = document.createElement("img")
const img7 = document.createElement("img")
const img8 = document.createElement("img")
const img9 = document.createElement("img")

main.classList.add("container")
div.classList.add("pic")
div2.classList.add("pic2")
div3.classList.add("pic3")
div4.classList.add("pic4")
div5.classList.add("pic5")
div6.classList.add("pic6")
div7.classList.add("pic7")
div8.classList.add("pic8")
div9.classList.add("pic9")

img.classList.add("img1")
img2.classList.add("img2")
img3.classList.add("img3")
img4.classList.add("img4")
img5.classList.add("img5")
img6.classList.add("img6")
img7.classList.add("img7")
img8.classList.add("img8")
img9.classList.add("img9")

img.setAttribute(
    "src", 
    "https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg")
    
img2.setAttribute(
     "src", 
     "https://imgv3.fotor.com/images/blog-richtext-image/take-a-picture-with-camera.png")

img3.setAttribute(
    "src", 
    "https://img.freepik.com/premium-vector/taking-picture-illustration_23-2147532206.jpg?w=2000")
    
img4.setAttribute(
    "src", 
    "https://image.shopmoment.com/resizer?quality=75&fit=cover&width=1200&gravityX=0.5&gravityY=0.5&height=792&image=https://image.shopmoment.com/general/Kodak-EKTAR-H35-Half-Frame-Film-Camera-Lifestyle-02.jpg")

img5.setAttribute(
    "src", 
    "https://expertphotography.b-cdn.net/wp-content/uploads/2020/07/social-media-for-photographers-follow-1.jpg")

img6.setAttribute(
    "src", 
    "https://media.istockphoto.com/id/618066222/photo/camera-capturing-a-forest.jpg?s=612x612&w=0&k=20&c=Mqr3fFI2QPY09_bu3GyRYJvcdwBO2qeHPT88GFsLTS4=")

img7.setAttribute(
    "src", 
    "https://thumbs.dreamstime.com/b/photography-camera-lens-concept-80221319.jpg")

img8.setAttribute(
    "src", 
    "https://www.asiaone.com/sites/default/files/original_images/Oct2019/191027_cameralady_unsplash.jpg")

img9.setAttribute(
    "src", 
    "https://i.ytimg.com/vi/ixRKeQMa7Nc/maxresdefault.jpg")
div.append(img)
div2.append(img2)
div3.append(img3)
div4.append(img4)
div5.append(img5)
div6.append(img6)
div7.append(img7)
div8.append(img8)
div9.append(img9)



body.append(main)

main.append(div,div2,div3,div4,div5,div6,div7,div8,div9)
