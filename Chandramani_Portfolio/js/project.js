let projectData = [
    {
      image:"", title:"Sears e-commerce Clone!",content:"The Sears Clone Project is a Full Stack MERN application that replicates the functionality of the Sears.com e-commerce website. It features user authentication, product management, shopping cart functionality, and responsive design.", techStack:[ 'ReactJS', 'Redux', 'Tailwind CSS', 'Daisy UI', 'Node.js', 'Express', 'MongoDB', 'Mongoose'],
      anke:['https://marvelous-halva-61283d.netlify.app'],
      link:['<i class="fa-brands fa-github"></i>', '<i class="fa-brands fa-github"></i>']
    },
    {
        image:"https://drive.google.com/file/d/16GdFoe1xvRgeOz9ZGxbrvOS-t1qIO7yd/view?usp=drive_link", title:"Sears e-commerce Clone!",content:"The Sears Clone Project is a Full Stack MERN application that replicates the functionality of the Sears.com e-commerce website. It features user authentication, product management, shopping cart functionality, and responsive design.", techStack:[ 'ReactJS', 'Redux', 'Tailwind CSS', 'Daisy UI', 'Node.js', 'Express', 'MongoDB', 'Mongoose'],
        anke:['https://iridescent-cascaron-e5b94f.netlify.app'],
        link:['<i class="fa-brands fa-github"></i>', '<i class="fa-brands fa-github"></i>']
      },
      {
        image:"https://drive.google.com/file/d/12HzrEE0OfKDNY8EX-93q149Iv_EL3ve8/view?usp=sharing", title:"Sears e-commerce Clone!",content:"The Sears Clone Project is a Full Stack MERN application that replicates the functionality of the Sears.com e-commerce website. It features user authentication, product management, shopping cart functionality, and responsive design.", techStack:[ 'ReactJS', 'Redux', 'Tailwind CSS', 'Daisy UI', 'Node.js', 'Express', 'MongoDB', 'Mongoose'],
        anke:['https://inspiring-khapse-86e92f.netlify.app'],
        link:['<i class="fa-brands fa-github"></i>', '<i class="fa-brands fa-github"></i>']
      },
      {
        image:"https://mahin.vercel.app/Images/sears.jpg", title:"Sears e-commerce Clone!",content:"The Sears Clone Project is a Full Stack MERN application that replicates the functionality of the Sears.com e-commerce website. It features user authentication, product management, shopping cart functionality, and responsive design.", techStack:[ 'ReactJS', 'Redux', 'Tailwind CSS', 'Daisy UI', 'Node.js', 'Express', 'MongoDB', 'Mongoose'],
        anke:['https://inspiring-khapse-86e92f.netlify.app'],
        link:['<i class="fa-brands fa-github"></i>', '<i class="fa-brands fa-github"></i>']
      }
]

const projectBox = document.getElementById('myProject')
const project_container = document.querySelector('.project_container')
console.log("every thing is file")

function projectMap(data) {
    let newData = data.map((item)=>{
        console.log(item)
        let box = document.createElement('div')
        let image = document.createElement('img')
        let  title = document.createElement('h2')
        let content = document.createElement('p')
        let techStackContainer = document.createElement('div')
        let imgicon1 = document.createElement('span')
        let imgicon2 = document.createElement('span')
        let icongroup = document.createElement('div')
        icongroup.append(imgicon1,imgicon2)
        icongroup.className = 'groupicon'



         imgicon1.innerHTML = item.link[0] + " "
         imgicon2.innerHTML = item.link[1]
         let techtitle = document.createElement('h4')
         techtitle.innerText = "Tech Stack: "
         techtitle.style.color = 'red'
        let link1 = document.createElement('a')

         image.src = item.image
         title.innerText = item.title
         content.innerText = item.content
         let line = document.createElement('br')
         item.techStack.map((el)=>{
            techStackContainer.append(el+", ")
         })
         box.append(image,title,content,line,techtitle, techStackContainer,line,icongroup)
         project_container.append(box)
         
         console.log(techStackContainer);
    })
}
projectMap(projectData)