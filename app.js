function toggleTheme( ) {
	var element = document.getElementById( "body" );
	var toggleIcon = document.getElementById( "toggle" );
	element.classList.toggle( "theme" );
	if ( toggleIcon.classList.contains( 'fa-sun' ) ) {
		toggleIcon.classList.remove( 'fa-sun' );
		toggleIcon.classList.add( 'fa-moon' );
	}
	else {
		toggleIcon.classList.add( 'fa-sun' );
		toggleIcon.classList.remove( 'fa-moon' );
	}
}

function openNav( ) {
	document.getElementById( "myNav" ).style.width = "100%";
}

function closeNav( ) {
	document.getElementById( "myNav" ).style.width = "0%";
}
