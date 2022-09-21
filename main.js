
let i = 0;
const sliderItem = document.querySelectorAll(".slider-main")
const sliderDot = document.querySelectorAll(".slider-dot-item")
function sliderDotActive(i) {
    sliderDot.forEach((item, index)=>{
        item.classList.remove("slider-dot--active")
        if(index === i)
        {
            item.classList.add("slider-dot--active")
        }
    })
}
function sliderTransform(i) {
    if(i === 0)
    {
        sliderItem.forEach((item) =>{
            item.style = `transform: translateY(${100}%); transition: unset;`
        })
        setTimeout(()=>{
            sliderItem.forEach((item) =>{
                item.style = `transform: translateY(${i*100}%); transition: all 1s ease;`
            })
        }, 10)
        
    }
    else{
        sliderItem.forEach((item) =>{
            item.style = `transform: translateY(${i*100}%); transition: all 1s ease;`
        })
    }
    
    
}

sliderDot.forEach((item, index)=>{
    item.addEventListener("click", ()=>{
        i = index
        sliderDotActive(i)
        sliderTransform(i)
    })
})

const slider = setInterval(()=>{
    if(i === 3)
    {
        i = 0
    }
    else{
        i++
    }
    sliderTransform(i)
    sliderDotActive(i)
}, 4000)

// clearInterval(slider)
let listTime = []
sliderItem.forEach((item)=>{
    listTime.push(new Date(item.dataset.time))
})
const sliderDay = document.querySelectorAll(".slider-counter--day")
const sliderHour = document.querySelectorAll(".slider-counter--hour")
const sliderMinute = document.querySelectorAll(".slider-counter--minute")
const sliderSecond = document.querySelectorAll(".slider-counter--second")
const day = 1*24*60*60
const hour = 1*60*60
const minute = 1*60
const timeOut = setInterval(()=>{
    const now = new Date()
    listTime.forEach((time, index)=>{
        let timer = (time - now)/1000
        if(timer <=0)
        {
            clearInterval(timeOut)
        }
        else{
            sliderDay[index].textContent =  `${Math.floor(timer / day)}`.slice(-2)
            timer = timer % day
            sliderHour[index].textContent =  `0${Math.floor(timer / hour)}`.slice(-2)
            timer = timer % hour
            sliderMinute[index].textContent = `0${Math.floor(timer / minute)}`.slice(-2)
            timer = timer % minute
            sliderSecond[index].textContent =`0${Math.floor(timer)}`.slice(-2)
        }
    })
}, 1000)