function openTab(tabName) {
  
    const tabContents = document.getElementsByClassName('tab-conent');
      for (const content of tabContents) {
        content.style.display = 'none';
    }
    
    document.getElementById(tabName).style.display = 'block';

    const tabButton = document.getElementsByClassName('tabbutton');
    for (const button of tabButton) {
        button.classList.remove('active');
    }

    event.currentTarget.classList.add('active');
}

