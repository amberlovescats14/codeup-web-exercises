"use strict";
// todo https://jsbin.com/topupe/1/edit?js,output
$(document).ready(function() {
	/**********************************************
	 * 			** ID Selector **
	 *********************************************/
	// $('#some-id');

//z: GET the HTML of ID
	let contents = $('#book-welcome').html()
	

//z: change background color
	$('#book-welcome').css({
		'background-color': 'red',
		'color': 'white'
	})


//z: GET the html of selected id
	let bookBundle = $('#book-bundle-one').html()

//z: change css property
	$('#container').css('border', '12px solid yellow')
	
	
	//w: add a h6
	$("#book-welcome").append(`<h6>User: AMBER </h6>`)
	//* .remove .addClass
	
	//w: animate dropdown
	$('#book-welcome').animate({
		opacity: '.9',
		left: '200px',
		height: '300px',
	})

	

	/**********************************************
	 * 			** CLASS Selector **
	 *********************************************/
	// $('.some-class');

//z class selectors
$('.main-headings').css({
	'font-size': '6vh',
	'font-family': 'arial'
})

	/**********************************************
	 * 			** ELEMENT Selector **
	 *********************************************/
	//	$('tag_name')
	
	$('p').css({
		'background': 'orange',
		'color': 'navy'
	})



	/**********************************************
	 * 			** MULTIPLE Selector **
	 *********************************************/
	// $("selector1, selector2, ...")
	//w: select multipele ID's
	//z: and HOVER
$('#mystery-genre, #book-bundle-three').hover(
	function(){ $(this).css('background', 'blue')},
	function(){ $(this).css('background', 'white')}
)
	/**********************************************
	 * 			** THE ALL Selector **
	 *********************************************/
	// $('*')
//w: ALL
	$('*').css({
		border: '1px solid black',
		margin: '5px'
	})



});