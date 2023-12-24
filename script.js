//toggle reset button
function toggleResetBtn() {
    const resetBtn = document.querySelector('.reset');
    resetBtn.classList.toggle('active');
}
//switch left , middle and right part of banner
function switchBanner(name)  {
    const banner = document.querySelector('#banner');
    if (!banner.classList.contains(name)){
      banner.className ='banner';
      banner.classList.add(name);
      toggleResetBtn();
    }
    return;
    
}
//reset button
function resetBanner(){
    const banner=document.querySelector('#banner');
    banner.className='banner';
    toggleResetBtn();
}


//scrolled 


function scrollToTop()
{
    window.scrollTo(0 ,0)
}
