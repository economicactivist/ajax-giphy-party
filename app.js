console.log("Let's get this party started!")

$('#search-btn').on('click', function (e) {
  e.preventDefault()
  getGifs()
})

$('#delete-btn').on('click', function (e) {
    e.preventDefault()
    $('main').empty()
  })

async function getGifs() {
  let giphyTheme = $('#giphy-theme').val()
  if (giphyTheme) {
    const res = await axios.get('https://api.giphy.com/v1/gifs/search', {
      params: {
        api_key: 'HbxeOTTw7ln0R1eO4DqIrq3L3GiAd7mV',
        q: `${giphyTheme}`,
      },
    })

    let data = res['data']['data']

    let imgUrl
    for (let i = 0; i < 6; i++) {
      imgUrl = data[i].images.downsized.url
      $('.main-grid-container').append(`<div class="dog${i}"></div>`)
      $(`.dog${i}`).append(`<img src="${imgUrl}"/>`)
      // $('main').append('.giphyImg')
  
    }
  }
}
