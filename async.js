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

async function createAndUpdatePosts() {
  try {
    await createPost({
      title: "Post Three",
      body: "This is post three",
    });
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const post3time = await updateLastActivityTime();
    console.log(`time for post 3 ${post3time}`);

    await createPost({ title: "Post Four", body: "This is post four" });
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Introduce a 500ms delay
    const post4time = await updateLastActivityTime();
    console.log(`time for post 4 ${post4time}`);
    console.log(posts);

    await deletePosts();

    console.log("Remaining Posts after deletion:", posts);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

createAndUpdatePosts();
