
document.getElementById("run").addEventListener("click", function () {
  let currentTime = new Date().toLocaleTimeString(); // 현재 시간 가져오기
  getUser(0)
  .then((result) => {
    output.innerHTML = `${JSON.stringify(result)}<br><br> ⏰ ${currentTime}`;
  });
})

////////////////////////


function getUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const user = userId === 1 ?
                  { id: userId, name: 'choi so hee'} : null;
        resolve(user);
      } catch (error) {
        reject(error);
      }
    }, 1000);
  });
}

function getPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const posts = [
        {id: 1, title: 'Post 1'},
        {id: 2, title: 'Post 2'},
      ]
      resolve(posts);
    }, 1000);
  });
}

function getComments(postId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const comments = [
        {id: 1, text: 'Comment 1'},
        {id: 2, text: 'Comment 2'},
        {id: 3, text: 'Comment 3'},
      ]
      resolve(comments)
    }, 1000)
  })
}


function runPromise() {
  getUser(1)
    .then(user => {
      if (user) {
        console.log('user: ', user);
      } else {
        console.log('유저가 없어요');
      }
    })
}

async function runAsyncAwait() {
  try {
    const user = await getUser(1);
    const posts = await getPosts(user.id);
    const comments = await getComments(posts[0].id);
    console.log('user', user);
    console.log('posts', posts);
    console.log('comments', comments);
  } catch (error) {
    console.log('error', error);
  }
}

console.log('start');
runAsyncAwait().then(user => console.log('user: ', user));
console.log('end');


