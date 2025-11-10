const myPromise = new Promise((resolve, reject) => {
    const success = true; // simulate condition
    if (success) {
      resolve("Task completed successfully!");
    } else {
      reject("Something went wrong!");
    }
  });
  
  myPromise.then(result => {
    console.log(result);
  }
    ).catch(error => {  
    console.error(error);
  }
    );  
    
  