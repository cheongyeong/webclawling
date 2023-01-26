function tabOpen(e,tabName){
  // let conHide = function(){
    let tabContent = document.getElementsByClassName('tabcont')
      for (i=0; i<tabContent.length; i++){
        tabContent[i].style.display = 'none';
    }
    document.getElementById(tabName).style.display = "block";
  // 컨텐츠를 보여주기 위해서 사용
  
  //탭리스트에 클래스를 추가해주기 위해서 
    let tabL = document.getElementsByClassName('tablink');  //active라는 애들 다 숨기고
    for (i=0; i<tabL.length; i++){
      tabL[i].className = tabL[i].className.replace('active','');
    }
    e.currentTarget.className += ' active'; // 지금 내가 클릭한애들만 active라는 애들 다시 보여줘 
  }
  

  function tabOn(e,tabName){
    let tabContent = document.getElementsByClassName('tabcont')
    for(i=0; i<tabContent.length; i++){
      tabcontent[i].style.display = 'none'
    }
  }