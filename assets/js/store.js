
function searchHistory(searchTerm) {
    var historyLength = 3;
    var history = JSON.parse(localStorage.getItem('searchHistory') || '[]');
    var isMaxed = history.length === historyLength;
    var workingHistory = isMaxed ? history.slice(1) : history;
    var updatedHistory = workingHistory.concat(searchTerm);
  
    localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
  }
  
  function updateHistory(){
    var history = JSON.parse(localStorage.getItem('searchHistory') || '[]');
  
    
  }