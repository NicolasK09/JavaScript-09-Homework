document.getElementById('showPopup').addEventListener('click', function() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          var posts = JSON.parse(xhr.responseText);
          var post = posts[0];
  
          document.getElementById('postTitle').textContent = post.title;
          document.getElementById('postBody').textContent = post.body;
  
          document.getElementById('popup').classList.remove('hidden');
        } else {
          console.log('მოხდა შეცდომა: ' + xhr.status);
        }
      }
    };
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
    xhr.send();
  });
  
  document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('popup').classList.add('hidden');
  });


  document.getElementById('loadPost').addEventListener('click', function() {
    var postId = 2;
  
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          var post = JSON.parse(xhr.responseText);
  
          var postContainer = document.getElementById('postContainer');
          postContainer.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
          `;
        } else {
          console.log('მოხდა შეცდომა: ' + xhr.status);
        }
      }
    };
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/' + postId, true);
    xhr.send();
  });
  



  var loadButtons = document.getElementsByClassName('loadPost');

  for (var i = 0; i < loadButtons.length; i++) {
    loadButtons[i].addEventListener('click', function() {
      var postId = this.getAttribute('data-postid');
  
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            var post = JSON.parse(xhr.responseText);
  
            var postContainer = document.getElementById('postContainer');
            postContainer.innerHTML = `
              <h2>${post.title}</h2>
              <p>${post.body}</p>
            `;
          } else {
            console.log('მოხდა შეცდომა: ' + xhr.status);
          }
        }
      };
      xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/' + postId, true);
      xhr.send();
    });
  }
  