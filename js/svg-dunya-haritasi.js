/*! SVG Dünya Haritası:  Mustafa Tok */

function svgDunyaHaritasi() {
  const element = document.querySelector('body');
  const info = document.querySelector('.isim');

  
 // HANDLING 
 let datas = ['#libya','#china','#brazil','#russia']; 
 let turkiye = document.querySelector('#turkey');
 turkiye.style.fill = 'red';

 // çeşitli renklendirmeler ve vurgulamak istenen alanlar için.
  Array.prototype.forEach.call(datas, function(el, i){
    let who = document.querySelector(el);
    who.style.fill = 'blue';
  });

 // HANDLING 


 element.addEventListener(
    'mouseout',
    function (event) {
      info.innerHTML = '';
    }
  );

  element.addEventListener(
    'mouseover',
    function (event) {

      let name = event.target.getAttribute('data-id');

      if (event.target.tagName === 'path' ) { 
        info.innerHTML = [
      '<div>',
          name ? name : event.target.id, 
      '</div>',

        ].join('');
      }
    }
  );

  element.addEventListener(
    'mousemove',
    function (event) {
      info.style.top = event.pageY + 25 + 'px';
      info.style.left = event.pageX + 'px';
    }
  );

}