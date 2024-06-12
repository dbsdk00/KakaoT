// mongodb로 바꿀거
const Store = [
    {
        id: "123456",
        driver: "test@driver.com",
        user: "chldbsdk@naver.com",
        status: "booked", // canceled, end
    }
]

export const Booking = {
    create: async(user) => {
        if (Object.keys(user).length === 0) {
            console.log("내 주변에 택시 없누");
            return Promise.reject({
                message: "내 주변에 택시 없누",
            });
        } else {
            return Store.push(user); // db에 저장해라
        }
    }
}