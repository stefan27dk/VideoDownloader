
 // ======== CHECK EXTENSION STATE ENABLED / DISABLED ===========================
 var extensionState = false;
 chrome.storage.sync.get(['enableVideoExt'], function(result)
 {
   if(result.enableVideoExt)
   {
    extensionState = true;
    allGenElements(); // Generate All Video Download Elements
    generateDownloadLinks(); // Runs on Enable / Disable Extension 
   }
    
 });




// =================== OBSERVER - Path  ================================

// Observer for path changed
let lastUrl = location.href; 
new MutationObserver(() => 
{
  const url = location.href;
  if (url !== lastUrl) 
  {
    lastUrl = url;
    generateDownloadLinks(); // Runs on Path Changed "Video Changed"
  }
}).observe(document, {subtree: true, childList: true});








   // ========= Generate Elements =================================================
  // -----------Generate all elements ---------------------------------- 
  function allGenElements()
  {
      addDownloadBar();
      // generateDownloadButton1()
     
  }
  

 




 // ---------- Div - BottomBar---------------------------------------
 function addDownloadBar()
 {

  // ######### Generate Buttons ################

  // Button 1 ---------------------------------------------------------
// Create <a> 1
var downloadBtn1 = document.createElement("A");
downloadBtn1.innerHTML = "ALL - Download-1";
downloadBtn1.style = "color: orange; position: fixed: z-index: 20000; font-size: 14px; font-weight: bold;";
downloadBtn1.setAttribute("id", "downloadBtn1");
 

  // Button 2 ---------------------------------------------------------
// Create <a> 1
var downloadBtn2 = document.createElement("A");
downloadBtn2.innerHTML = 'Youtube - Download-2';
downloadBtn2.style = "margin-left: 20px; color: orange; position: fixed: z-index: 20000; font-size: 14px; font-weight: bold;";
downloadBtn2.setAttribute("id", "downloadBtn2");



  // Button 3 ---------------------------------------------------------
// Create <a> 1
var downloadBtn3 = document.createElement("A");
downloadBtn3.innerHTML = 'Youtube - Download-3';
downloadBtn3.style = "margin-left: 20px; color: orange; position: fixed: z-index: 20000; font-size: 14px; font-weight: bold;";
downloadBtn3.setAttribute("id", "downloadBtn3");




 // Button 4 ---------------------------------------------------------
// Create <a> 1
var downloadBtn4 = document.createElement("A");
downloadBtn4.innerHTML = 'Youtube - Download-4';
downloadBtn4.style = "margin-left: 20px; color: orange; position: fixed: z-index: 20000; font-size: 14px; font-weight: bold;";
downloadBtn4.setAttribute("id", "downloadBtn4");



 // Button 5 ---------------------------------------------------------
// Create <a> 1
var downloadBtn5 = document.createElement("A");
downloadBtn5.innerHTML = 'VBox7 - Download-5';
downloadBtn5.style = "margin-left: 20px; color: orange; position: fixed: z-index: 20000; font-size: 14px; font-weight: bold;";
downloadBtn5.setAttribute("id", "downloadBtn5");




  // ######### Generate BottomBar ################
     var div1 = document.createElement('div'); // New Div Element
     div1.innerHTML = '<div id="downloadBar" style="bottom: 0; width: 100%; height: 20px; position: fixed; z-index: 20000; background-color: rgba(50, 48, 66); border-top: solid 2px rgb(31, 237, 234, 0.9);"> </div>';
     div1.firstChild.appendChild(downloadBtn1); // Add Download button to BottomBar
     div1.firstChild.appendChild(downloadBtn2); // Add Download button2
     div1.firstChild.appendChild(downloadBtn3); // Add Download button3
     div1.firstChild.appendChild(downloadBtn4); // Add Download button4
     div1.firstChild.appendChild(downloadBtn5); // Add Download button4
     var body1 = document.getElementsByTagName('body')[0]; // Get the Body
     body1.appendChild(div1.firstChild); // Append the new html code to the body last
 }




 
 
 function generateDownloadButton1()
{
   // Create <a> 1
 var downloadBtn1 = document.createElement("A");
 downloadBtn1.innerHTML = "Download-1";
 downloadBtn1.style.position = "fixed";
 downloadBtn1.style.zIndex = "200000";
 downloadBtn1.setAttribute("id", "downloadBtn1");
 document.body.appendChild(downloadBtn1);
    // window.open(site1DownloadLink, '_blank');
}




 





 //================================ WORK - if enabled / disabled ================================================================
function generateDownloadLinks()
{
        // alert(result.enableExt); 
         if (extensionState == true) 
         {

           // Create Link 1---------------------------------------------------------
          var videoUrl = location.href;
          var site1DownloadLink = 'https://no.fetchfile.net/?url=' + videoUrl;
          var downloadBtn1 = document.getElementById('downloadBtn1');
            downloadBtn1.setAttribute("href", site1DownloadLink);
            downloadBtn1.setAttribute("target", "_blank");


            
           // Create Link 2---------------------------------------------------------
           
          var site1DownloadLink2 = videoUrl.substring(0,19) + 'fff' + videoUrl.substring(19);
          var downloadBtn2 = document.getElementById('downloadBtn2');
           downloadBtn2.setAttribute("href", site1DownloadLink2);
           downloadBtn2.setAttribute("target", "_blank");


          // Create Link 3---------------------------------------------------------
          var site1DownloadLink3 = 'https://invidious.fdn.fr/' + videoUrl.substring(24);
          var downloadBtn3 = document.getElementById('downloadBtn3');
           downloadBtn3.setAttribute("href", site1DownloadLink3);
           downloadBtn3.setAttribute("target", "_blank");

         
            // Create Link 4---------------------------------------------------------
          var site1DownloadLink4 = 'https://keepvid.works/?url=' + videoUrl + '#dlURL';
          var downloadBtn4 = document.getElementById('downloadBtn4');
           downloadBtn4.setAttribute("href", site1DownloadLink4);
           downloadBtn4.setAttribute("target", "_blank");


            // Create Link 5---------------------------------------------------------
          var site1DownloadLink5 = 'https://www.tubeninja.net/?url=' + videoUrl;
          var downloadBtn5 = document.getElementById('downloadBtn5');
           downloadBtn5.setAttribute("href", site1DownloadLink5);
           downloadBtn5.setAttribute("target", "_blank");

         } 
         else  // -----Extension Disabled -----------------
         { 
           //it is disabled
         }
    
}
    
     
  

  

