
const names = {
				days: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', "Jum'at", 'Sabtu'],
				months: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
			},
			
			elems = {
				// Search
				search : document.getElementById('search'),
				searchBar : document.getElementById('search-bar'),
				searchInput : document.getElementById('search-input'),
				searchEnter : document.getElementById('search-enter'),
				searchOptions : document.getElementById('search-options'),
				
				// Widget
				clockSecond : document.getElementById('clock-second'),
				clockMinute : document.getElementById('clock-minute'),
				clockHour : document.getElementById('clock-hour'),
				dateId : document.getElementById('date')
};

// Hover Event
function hoverEvent(elem, delay, fn) {
	let isHover = false;
	elem.addEventListener('touchstart', ()=>{
		isHover =true
		setTimeout(()=>{
			if(isHover){
				fn();
			}
		},delay || 0);
	});
	
	elem.addEventListener('touchend',()=>{
		isHover= false;
	});
}

// SEARCH ENGINE

// search initialize
const searchSources = [
				{text:'q', name:'Google',
					src: 'https://www.google.com/search?q=' },
				{text:'M', name:'Youtube',
					src: '' }/*
				{text:'E', name:'Facebook',
					src: '' },
				{text:')', name:'Github',
					src: '' },
				{text:'Q', name:'Instagram',
					src: '' },
				{text:'A', name:'Pinterest',
					src: '' },
				{text:'e', name:'Wikipedia',
					src: '' },
				{text:'l', name:'StackOverflow',
					src: '' },
				{text:'R', name:'Reddit',
					src: '' },
				{text:'V', name:'SoundCloud',
					src: '' },
				{text:'W', name:'Spotify',
					src: '' },
				{text:'z', name:'RSS',
					src: ''}*/
			]
;

// search site
var nowSearchSite = '';
function setSearchSite(optNum) {
	nowSearchSite = searchSources[optNum].src;
	elems.searchEnter.innerHTML= `<i class="icon">${searchSources[optNum].text}</i>`;
};
setSearchSite(0);

// open search options
hoverEvent( elems.searchEnter, 300, () => {
	
	// reset
	elems.searchOptions.innerHTML = '';
	
	// init
	for(const indexItem in searchSources) {
		
		const item = searchSources[indexItem],
					newOption = document.createElement('button')
		;
		
		newOption.innerHTML= `<i class="icon">${item.text}</i> ${item.name}`;
		newOption.addEventListener('click',()=>{
			setSearchSite(indexItem);
		});
		
		elems.searchOptions.appendChild(newOption);
		
	}
	
	//show
	elems.searchOptions.classList.add('openSearchOptions');
	console.log('hover');
});

// close search options
elems.searchOptions.addEventListener('click', () => {
	elems.searchOptions.classList.remove('openSearchOptions');
});

// search enter
elems.searchEnter.addEventListener('click', () => {
	if(elems.searchInput.value.length != 0)
		location.href = nowSearchSite + elems.searchInput.value;
	
	elems.searchOptions.classList.remove('openSearchOptions');
});


// Membuat program Jam dan Tanggal
setInterval(function() {
	const now = new Date(),
				second = now.getSeconds().toString().padStart(2,'0'),
				minute = now.getMinutes().toString().padStart(2,'0'),
				hour = now.getHours().toString().padStart(2,'0'),
				
				day = names.days[now.getDay()],
				date = now.getDate().toString(),
				month = names.months[now.getMonth()],
				year = now.getFullYear().toString()
	;
	
	elems.clockSecond.innerHTML= second;
	elems.clockMinute.innerHTML= minute+':';
	elems.clockHour.innerHTML= hour+':';
	elems.dateId.innerHTML= day+', '+date+' '+month+' '+year;
},1000);
