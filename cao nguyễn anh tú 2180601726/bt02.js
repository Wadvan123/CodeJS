// Định nghĩa đối tượng student
const student = {
    id: 1,
    name: "Nguyen Van A",
    age: 20,
};

// Promise 1: Random số từ 0-10, xử lý số chẵn/lẻ
const promise1 = new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 11); // Random số từ 0-10
    console.log(`Promise 1: Random number is ${randomNumber}`);
    setTimeout(() => {
        if (randomNumber % 2 === 0) {
            resolve(`Promise 1: ${JSON.stringify(student)}`);
        } else {
            reject("Promise 1: dữ liệu lỗi");
        }
    }, 2000); // Chờ 2 giây
});

// Promise 2: Random số từ 0-10, xử lý số chẵn/lẻ
const promise2 = new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 11); // Random số từ 0-10
    console.log(`Promise 2: Random number is ${randomNumber}`);
    setTimeout(() => {
        if (randomNumber % 2 === 0) {
            resolve(`Promise 2: ${JSON.stringify(student)}`);
        } else {
            reject("Promise 2: dữ liệu lỗi");
        }
    }, 4000); // Chờ 4 giây
});

// Xử lý lỗi riêng biệt để cả 2 Promise vẫn chạy
const wrappedPromise1 = promise1.catch((error) => error);
const wrappedPromise2 = promise2.catch((error) => error);

// Sử dụng Promise.all
Promise.all([wrappedPromise1, wrappedPromise2])
    .then((results) => {
        console.log("Promise.all: Lấy dữ liệu hoàn thành");
        console.log(results);
    })
    .catch((error) => {
        console.error("Promise.all: Error -", error);
    });

// Sử dụng Promise.race
Promise.race([promise1, promise2])
    .then((result) => {
        console.log("Promise.race: Đã lấy được dữ liệu");
        console.log(result);
    })
    .catch((error) => {
        console.error("Promise.race: Error -", error);
    });
