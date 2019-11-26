(() => {
	console.log('fired');


// Grab the sheildsat the bottom of the page
    const banner = document.querySelectorAll('.sigil-container');
		  lightBox = document.querySelector('.lightbox');
		  video = document.querySelector('video');
		  closeLB = document.querySelector('.lightbox-close');
		  banners = document.querySelector('#killerImages');
		  killerName = document.querySelector('.killer-name');
		  killerInfo = document.querySelector('.killer-info');

	const houseData = [ 
	 [`Ted Bundy`, `Theodore Robert Bundy was an American serial killer who kidnapped, raped, and murdered numerous young women and girls during the 1970s and possibly earlier. After more than a decade of denials, before his execution in 1989 he confessed to 30 homicides that he committed in seven states between 1974 and 1978`],

		[`Andrei Chikatilo`,`Andrei Romanovich Chikatilo was a Soviet serial killer, nicknamed the Butcher of Rostov, the Red Ripper, and the Rostov Ripper, who sexually assaulted, murdered, and mutilated at least 43 women and children between 1978 and 1990 in the Russian SFSR, the Ukrainian SSR, and the Uzbek SSR`],

		[`Jeffrey Dahmer`,` Jeffrey Lionel Dahmer, also known as the Milwaukee Cannibal or the Milwaukee Monster, was an American serial killer and sex offender who committed the rape, murder, and dismemberment of 17 men and boys from 1978 to 1991`],

		[`Luis Garavito`,`Luis Alfredo Garavito Cubillos, also known as La Bestia or Tribilín is a Colombian rapist and serial killer. In 1999, he admitted to the rape, torture and murder of 138 children and teenagers`],

		
];

		console.log(houseData);

	function openLightbox() {
		// grab the right video source
		

		// get the lowercase house name from the class list
		let targetHouse = this.className.split(" ")[1];
		// console.log(targetHouse);
		
		// make sure the names match - needs to be uppercase
		// stark becomes Stark -> first make a capital S, then add tark (or any house name)
		let targetSrc = targetHouse.charAt(0).toUpperCase() + targetHouse.slice(1);

		killerName.textContent = `Killer ${targetSrc}`;

		// this only ever retrieves the first index in the aray, which is the stark data
		killerInfo.textContent = houseData[0];
	}
	



	function animateBanner() {
		const offSet = 600; //this is the offset / width of one image

	    
	    totalOffset = this.dataset.offset * offSet + "px";
	    killerInfo.textContent = houseData[this.dataset.offset][1];
	    killerName.textContent = `Killer ${houseData[this.dataset.offset][0]}`;
	    banners.style.right = totalOffset;
	    TweenMax.to(banners, 0.8, { right: totalOffset, easyOut });
	}
	    

    banner.forEach(sigil => sigil.addEventListener('click', openLightbox));
    banner.forEach(sigil => sigil.addEventListener('click', animateBanner));



})();
