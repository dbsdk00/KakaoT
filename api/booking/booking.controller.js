// import { Template } from "ejs";
import { User } from "../user/user.model.js";
import { Booking } from "./booking.model.js";

function responseWithResult(res, statusCode) {
    statusCode = statusCode || 200;
    return function(entity) {
        res.status(statusCode).json(entity);
    }
}
function handleError(res, statusCode) {
    statusCode = statusCode || 500;
    return function(err) {
        res.status(statusCode).send(err);
    }
}
export async function create (req, res, next) {
    const {email, latitude, longitude} = req.body;
    console.log(`승객 ${email}의 위치(${latitude},${longitude}) 로 주변 택시를 검색해보자`);

    // 유재석을 넘길 필요는 업고, 탑승자의 위도갑, 경도값만 
    const found = await User.getDriver({latitude, longitude});
    console.log(`wldkfkdk:${JSON.stringify(found)}`);

    // 자동부킨이니 db에 저장
    Booking.create(
        !found
        ? {}
        : {
            id: Date.now(),
            driver: found.email,
            user: email,
            statu: "booked",
        },
    )
        .then((booking)=>{
            console.log(`booking: ${booking}`);
            const tmp = Object.assign({}, booking,{
                message: "추카 부킹됨"
            });
            console.log(`booking: ${JSON.stringify(tmp)}`);
            return tmp;
        })
        .then(responseWithResult(res, 201))
        .catch(handleError(res));
}