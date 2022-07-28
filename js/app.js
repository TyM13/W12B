
function get_api(details) {                                                 // requests the api and gets the link if it fails it goes to the failedlink if it succeeds it goes to successlink

axios.request({
url: `http://www.boredapi.com/api/activity/`
}).then(successlink).catch(failedlink)

}


function successlink(response) {                                            // injects the tages below and goins into response gets the data and displays the string
    
    document.body.insertAdjacentHTML(`afterend`, `<section>                 
    <h1>${response[`data`][`activity`]}</h1>
    <p>Accessibility Rating:${response[`data`][`accessibility`]}</p>
    <p>Type:${response[`data`][`type`]}</p>
    <p>Participants:${response[`data`][`participants`]}</p>
    <p>Price:${response[`data`][`price`]}</p>
    <a href="${response[`data`][`link`]}"></a>
    
    
    </section>`)

}


function failedlink (error) {                                                       // if the funcion fails it will display the h1 tag
    document.body.insertAdjacentHTML(`afterbegin`, `<h1>We have an ERROR!</h1>`)
}



let button_one = document.getElementById(`button_one`);                             // gets the id button_one and sets it as the variable button_one
button_one.addEventListener(`click`, get_api);