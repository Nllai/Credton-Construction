invoke = (event) => {
    console.log(event.getAttribute('folder'))
    //hope function is in window.
    //Else the respective object need to be used
    console.log(document.getElementsByTagName("template")[0])
    template = document.getElementsByTagName("template")[0]
    template.content.querySelector('#myCarousel')
    document.body.appendChild(template.content)
}

