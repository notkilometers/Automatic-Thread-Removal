// ==UserScript==
// @name     Thread Purger
// @description Eliminates thread(s) of choosing; in this example, I did it on /mu/ with the KPOP General thread. 
// @version  1
// @grant    none
// @include https://boards.4channel.org/mu/*
// ==/UserScript==

var threadNames = ["KPOP GENERAL"]; // add thread names here

window.addEventListener('load', function () { // purge when page loads 
	threadParse(document.getElementsByClassName("thread")); // parses all threads
})

function threadParse(threads)
{
	for(var i = 0; i < threads.length; i++) // for each thread on page
	{
		removeThread(threads[i]); // run remove condition & remove (if valid) on each thread
	}	
}

function removeThread(thread)
{
	try
	{
		for(var i = 0; i < threadNames.length; i++) // for each thread in list of threads to remove
		{
			if(thread.getElementsByClassName("subject")[0].textContent == threadNames[i])  // if is one of desired threads to remove
			{
				thread.style.visibility="hidden"; // changes visibility, doesn't collapse (intentional)
			}
		}
	}
  
	catch(err)
	{
		console.log(err);
	}
}
