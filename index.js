const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject();
      }
    }, 2000);
  });
}

function updateLastActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const date = Date.now();
      resolve(date);
    }, 1000);
  });
}

function deletePosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.pop();
      resolve();
    }, 1000);
  });
}
const three = createPost({ title: "Post Three", body: "This is post three" })
  .then(() => {
    return new Promise((resolve) => {
      setTimeout(resolve, 1000); // Introduce a 500ms delay
    });
  })
  .then(() => {
    return updateLastActivityTime();
  });

const four = createPost({ title: "Post Four", body: "This is post four" })
  .then(() => {
    return new Promise((resolve) => {
      setTimeout(resolve, 1000); // Introduce a 500ms delay
    });
  })
  .then(() => {
    return updateLastActivityTime();
  });

Promise.all([three, four])
  .then(() => {
    console.log(posts);
    console.log(four);
  })
  .then(() => {
    return deletePosts(); // Deleting the last post
  })
  .then(() => {
    console.log("Remaining Posts after deletion:", posts);
  });

// const promise1 = Promise.resolve("Hello world");
// const promise2 = Promise.resolve(10); // Converted to a promise
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Welcome Nikhil");
//   }, 2000);
// });

// Promise.all([promise1, promise2, promise3]).then((val) => {
//   console.log(val);
// });
