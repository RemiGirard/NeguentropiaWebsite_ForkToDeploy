var entries = [];
$('.list .title').each(function (index) {
    var title = this.innerText.replace(':', '')

    if (index == 1) {
        title = "Société Néguentropique"
    }

    // Insère une ancre pour etre plus tard utilisée pour le 3D Tag Cloud
    $('.list anchor').remove()

    // var link = $(this).attr('href')

    // create the list
    var anchor = `#${title}`
    $('#summary-list ul').append(`<li><a href="${anchor}">${title}</a></li>`)

    entries.push({
        label: title,
        url: anchor,
        target: '_self'
    })
})

var settings = {

    entries: entries[index],
    width: 480,
    height: 480,
    radius: '65%',
    radiusMin: 75,
    bgDraw: true,
    bgColor: '#111',
    opacityOver: 1.00,
    opacityOut: 0.05,
    opacitySpeed: 6,
    fov: 800,
    speed: 1,
    fontFamily: 'Oswald, Arial, sans-serif',
    fontSize: '15',
    fontColor: '#fff',
    fontWeight: 'normal', //bold
    fontStyle: 'normal', //italic 
    fontStretch: 'normal', //wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
    fontToUpperCase: true,
    tooltipFontFamily: 'Oswald, Arial, sans-serif',
    tooltipFontSize: '11',
    tooltipFontColor: '#fff',
    tooltipFontWeight: 'normal', //bold
    tooltipFontStyle: 'normal', //italic 
    tooltipFontStretch: 'normal', //wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
    tooltipFontToUpperCase: false,
    tooltipTextAnchor: 'left',
    tooltipDiffX: 0,
    tooltipDiffY: 10

};

//var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
$('#holder').svg3DTagCloud(settings);
var settings = {

    entries: entries[index],
    width: 480,
    height: 480,
    radius: '65%',
    radiusMin: 75,
    bgDraw: true,
    bgColor: '#111',
    opacityOver: 1.00,
    opacityOut: 0.05,
    opacitySpeed: 6,
    fov: 800,
    speed: 1,
    fontFamily: 'Oswald, Arial, sans-serif',
    fontSize: '15',
    fontColor: '#fff',
    fontWeight: 'normal', //bold
    fontStyle: 'normal', //italic 
    fontStretch: 'normal', //wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
    fontToUpperCase: true,
    tooltipFontFamily: 'Oswald, Arial, sans-serif',
    tooltipFontSize: '11',
    tooltipFontColor: '#fff',
    tooltipFontWeight: 'normal', //bold
    tooltipFontStyle: 'normal', //italic 
    tooltipFontStretch: 'normal', //wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
    tooltipFontToUpperCase: false,
    tooltipTextAnchor: 'left',
    tooltipDiffX: 0,
    tooltipDiffY: 10

};

//var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
$('#tag-cloud').svg3DTagCloud(settings);