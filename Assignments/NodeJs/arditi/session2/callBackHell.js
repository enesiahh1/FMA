async function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(`User ${id} fetched`);
        }, 2000);
      });
}



const response = await getUser(1) ;
console.log("Response", response);



async function getPosts(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(`Posts for user ${userId} fetched`);
        }, 2000);
      });
}

const response1 = await getPosts(2) ;
console.log("Response", response1);





function getComments(postId ) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(`Comments for post ${postId} fetched`);
        }, 2000);
      });
    
}

const response2 = await getComments(3) ;
console.log("Response", response2);



